import type { CartItem } from "@/types";
import { DESTINATION_LABELS } from "@/types";

/** Used for every sms: link on the site. */
export const SMS_NUMBER = "+14256528532";
export const PHONE_DISPLAY = "+1 425 652 8532";
export const EMAIL = "zaptapcard@gmail.com";

/**
 * Builds an sms: deep link with a prefilled message body.
 * "?&body=" (rather than plain "?body=") is the pattern that reliably
 * prefills the message on both iOS and Android — dropping the "&" breaks
 * prefill on some Android versions.
 */
export function smsLink(message: string) {
  return `sms:${SMS_NUMBER}?&body=${encodeURIComponent(message)}`;
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
