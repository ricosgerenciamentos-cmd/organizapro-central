import DetailPage from '../../components/DetailPage.jsx';
import { services } from '../../data/services.js';

export default function SiteProfissional() {
  return <DetailPage item={services.find((item) => item.id === 'site-profissional')} eyebrow="Serviço" backTo="/servicos" backLabel="Voltar aos serviços" />;
}
