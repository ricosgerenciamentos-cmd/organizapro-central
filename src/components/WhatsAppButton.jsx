import Button from './Button.jsx';
import { makeWhatsAppUrl } from '../utils/whatsapp.js';

export default function WhatsAppButton({ children = 'Falar no WhatsApp', message, variant = 'whatsapp', className = '' }) {
  return (
    <Button href={makeWhatsAppUrl(message)} variant={variant} className={className}>
      {children}
    </Button>
  );
}
