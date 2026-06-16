import { siteConfig } from '../data/siteConfig.js';

export function makeWhatsAppUrl(message = siteConfig.whatsappDefaultMessage) {
  const number = siteConfig.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
