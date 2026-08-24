// lib/fpixel.ts
// Helper para disparar eventos del Meta Pixel de forma segura desde cualquier componente cliente

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const FB_PIXEL_ID = "1353540513165636";

type StandardEvent = "ViewContent" | "AddToCart" | "InitiateCheckout" | "Purchase";

// eventId is optional. Pass the same eventId used in the matching server-side
// Conversions API call so Meta deduplicates the browser + server copies into
// a single event instead of double-counting it.
export function fbTrack(event: StandardEvent, params?: Record<string, any>, eventId?: string) {
  if (typeof window === "undefined" || !window.fbq) return;
  if (eventId) {
    window.fbq("track", event, params, { eventID: eventId });
  } else {
    window.fbq("track", event, params);
  }
}
