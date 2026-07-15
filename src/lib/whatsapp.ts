import { site } from "@/content/site";

/**
 * The one builder every WhatsApp CTA renders through (blueprint §10).
 * The number is content, not env, it's public by nature and editable
 * in content/site.ts in minutes.
 */
export function whatsAppUrl(prefill: string): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(prefill)}`;
}
