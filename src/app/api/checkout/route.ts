import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { allProducts } from "@/data/products";
import { DESTINATION_LABELS, type Destination } from "@/types";
import { sendCapiEvent } from "@/lib/capi";

interface IncomingItem {
  productId: string;
  quantity: number;
  destination: Destination;
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const items: IncomingItem[] | undefined = body?.items;
  const eventId: string | undefined = body?.eventId;

  if (!items || items.length === 0) {
    return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
  }

  // Prices are looked up server-side from the product catalog, never taken
  // from the client. A request could otherwise be edited in the browser to
  // claim a $19.99 card costs $1.
  const line_items: Array<{
    price_data: {
      currency: string;
      product_data: { name: string; description?: string };
      unit_amount: number;
    };
    quantity: number;
  }> = [];

  const summaryLines: string[] = [];

  for (const item of items) {
    const product = allProducts.find((p) => p.id === item.productId);
    if (!product) {
      return NextResponse.json(
        { error: `Unknown product: ${item.productId}` },
        { status: 400 }
      );
    }
    const quantity = Math.max(1, Math.floor(item.quantity) || 1);

    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: product.name,
          description: `Points to ${DESTINATION_LABELS[item.destination]}`,
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity,
    });

    summaryLines.push(
      `${quantity}x ${product.name} (${DESTINATION_LABELS[item.destination]})`
    );
  }

  const origin = req.headers.get("origin") ?? "http://localhost:3000";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items,
    phone_number_collection: { enabled: true },
    // Overrides the Checkout page's displayed brand name for this session
    // only. The Stripe account itself stays named "Answr" — this does not
    // touch account settings, so nothing about Answr's own Stripe usage
    // changes. Requires the stripe package to support the Clover API
    // version (2025-09-30) or later; see note in stripe.ts if this errors.
    branding_settings: {
      display_name: "ZapTap",
    },
    custom_fields: [
      {
        key: "business_name",
        label: { type: "custom", custom: "Your business name" },
        type: "text",
      },
      {
        key: "google_review_link",
        label: { type: "custom", custom: "Your Google review link" },
        type: "text",
        optional: true,
      },
    ],
    metadata: {
      order_summary: summaryLines.join(", ").slice(0, 500),
    },
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/`,
  });

  if (!session.url) {
    return NextResponse.json(
      { error: "Stripe did not return a checkout URL." },
      { status: 500 }
    );
  }

  // Server-side mirror of the browser's InitiateCheckout event, sent via
  // Meta Conversions API. Uses the same eventId the client already fired,
  // so Meta deduplicates the two into one event. Fire-and-forget: never
  // blocks or breaks checkout if it fails.
  if (eventId) {
    const totalCents = line_items.reduce(
      (sum, li) => sum + li.price_data.unit_amount * li.quantity,
      0
    );
    sendCapiEvent({
      eventName: "InitiateCheckout",
      eventId,
      value: totalCents / 100,
      currency: "USD",
      clientIp: req.headers.get("x-forwarded-for"),
      userAgent: req.headers.get("user-agent"),
    });
  }

  return NextResponse.json({ url: session.url });
}
