import DetailPage from '../../components/DetailPage.jsx';
import { services } from '../../data/services.js';

export default function WhatsappBusiness() {
  return <DetailPage item={services.find((item) => item.id === 'whatsapp-business')} eyebrow="Serviço" backTo="/servicos" backLabel="Voltar aos serviços" />;
}
