// lib/fpixel.ts
// Helper para disparar eventos del Meta Pixel de forma segura desde cualquier componente cliente

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const FB_PIXEL_ID = "1353540513165636";

type StandardEvent = "ViewContent" | "AddToCart" | "InitiateCheckout" | "Purchase";

export function fbTrack(event: StandardEvent, params?: Record<string, any>) {
  if (typeof window === "undefined" || !window.fbq) return;
  window.fbq("track", event, params);
}
