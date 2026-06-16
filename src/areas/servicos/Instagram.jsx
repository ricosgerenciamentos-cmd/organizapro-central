import DetailPage from '../../components/DetailPage.jsx';
import { services } from '../../data/services.js';

export default function Instagram() {
  return <DetailPage item={services.find((item) => item.id === 'instagram-organizado')} eyebrow="Serviço" backTo="/servicos" backLabel="Voltar aos serviços" />;
}
