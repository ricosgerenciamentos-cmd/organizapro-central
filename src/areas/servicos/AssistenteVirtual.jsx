import DetailPage from '../../components/DetailPage.jsx';
import { services } from '../../data/services.js';

export default function AssistenteVirtual() {
  return <DetailPage item={services.find((item) => item.id === 'assistente-virtual')} eyebrow="Serviço" backTo="/servicos" backLabel="Voltar aos serviços" />;
}
