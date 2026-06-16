import DetailPage from '../../components/DetailPage.jsx';
import { services } from '../../data/services.js';

export default function PaginaDeVendas() {
  return <DetailPage item={services.find((item) => item.id === 'pagina-de-vendas')} eyebrow="Serviço" backTo="/servicos" backLabel="Voltar aos serviços" />;
}
