import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";
import { stripe } from "@/lib/stripe";
import { sendCapiEvent } from "@/lib/capi";

// Confirms with Stripe that a checkout session was actually paid before the
// client fires the Meta Pixel Purchase event, and mirrors that same event
// server-side via Conversions API. Without the Stripe check, anyone visiting
// /checkout/success?session_id=anything would inflate conversion data.
export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "Missing session_id." }, { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ paid: false });
    }

    const amount_total = (session.amount_total ?? 0) / 100;
    const currency = (session.currency ?? "usd").toUpperCase();

    // Deterministic (not random) event ID, tied to the Stripe session ID.
    // If this route is ever called twice for the same session, Meta
    // deduplicates automatically instead of double-counting the sale.
    const eventId = `purchase_${session.id}`;

    // Server-side mirror of the browser's Purchase event, wrapped in
    // after() so Vercel keeps the function alive long enough for the fetch
    // to Meta to actually complete before freezing the instance.
    after(() =>
      sendCapiEvent({
        eventName: "Purchase",
        eventId,
        value: amount_total,
        currency,
        clientIp: req.headers.get("x-forwarded-for"),
        userAgent: req.headers.get("user-agent"),
      })
    );

    return NextResponse.json({ paid: true, amount_total, currency, eventId });
  } catch {
    return NextResponse.json({ error: "Could not verify session." }, { status: 400 });
  }
}
