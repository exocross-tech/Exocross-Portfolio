export const WHATSAPP_NUMBERS = {
  primary: "917604830742",
  secondary: "918124473373",
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Exocross team! I visited your website and would like to inquire about your software development and IT solutions.";

export function getWhatsAppUrl(
  number: string = WHATSAPP_NUMBERS.primary,
  message: string = DEFAULT_WHATSAPP_MESSAGE
): string {
  const cleanNumber = number.replace(/\D/g, "");
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
