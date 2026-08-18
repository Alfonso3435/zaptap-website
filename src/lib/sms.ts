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
