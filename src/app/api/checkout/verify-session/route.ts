import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

// Confirms with Stripe that a checkout session was actually paid before the
// client fires the Meta Pixel Purchase event. Without this, anyone visiting
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

    return NextResponse.json({
      paid: true,
      amount_total: (session.amount_total ?? 0) / 100,
      currency: (session.currency ?? "usd").toUpperCase(),
    });
  } catch {
    return NextResponse.json({ error: "Could not verify session." }, { status: 400 });
  }
}
