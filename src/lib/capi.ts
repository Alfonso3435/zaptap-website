// lib/capi.ts
// Sends server-side events directly to Meta's Conversions API. No third-party
// gateway, no monthly fee — just a server-to-server POST using the access
// token generated in Events Manager (Settings > Conversions API > Set up
// manually).

import crypto from "crypto";

const PIXEL_ID = "1353540513165636";
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const GRAPH_API_VERSION = "v21.0";

function sha256(value: string) {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

interface CapiEventParams {
  eventName: "InitiateCheckout" | "Purchase";
  eventId: string;
  value: number;
  currency: string;
  clientIp?: string | null;
  userAgent?: string | null;
  email?: string;
  phone?: string;
}

// Fire-and-forget: never throws, never blocks the response to the customer.
// A failed CAPI call should never break checkout.
export async function sendCapiEvent({
  eventName,
  eventId,
  value,
  currency,
  clientIp,
  userAgent,
  email,
  phone,
}: CapiEventParams) {
  if (!ACCESS_TOKEN) {
    console.warn("META_CAPI_ACCESS_TOKEN not set — skipping server-side event.");
    return;
  }

  const userData: Record<string, unknown> = {};
  if (clientIp) userData.client_ip_address = clientIp;
  if (userAgent) userData.client_user_agent = userAgent;
  if (email) userData.em = [sha256(email)];
  if (phone) userData.ph = [sha256(phone.replace(/\D/g, ""))];

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        event_source_url: "https://zaptap.shop",
        user_data: userData,
        custom_data: { value, currency },
      },
    ],
  };

  try {
    await fetch(
      `https://graph.facebook.com/${GRAPH_API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
  } catch (err) {
    console.error("Meta CAPI error:", err);
  }
}
