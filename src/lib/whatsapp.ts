import type { CartItem } from "@/types";
import { DESTINATION_LABELS } from "@/types";

/** Digits only, country code first. Used for every wa.me link on the site. */
export const WHATSAPP_NUMBER = "14256528532";
export const PHONE_DISPLAY = "+1 425 652 8532";
export const EMAIL = "zaptapcard@gmail.com";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function checkoutMessage(items: CartItem[], total: number) {
  const lines = items.map(
    (i) =>
      `- ${i.quantity} x ${i.name} - points to ${DESTINATION_LABELS[i.destination]} - $${(
        i.price * i.quantity
      ).toFixed(2)}`
  );

  return [
    "Hi ZapTap, I'd like to order:",
    "",
    ...lines,
    "",
    `Total: $${total.toFixed(2)}`,
    "",
    "My business name:",
    "My Google review link:",
    "I'll send my logo next.",
  ].join("\n");
}
