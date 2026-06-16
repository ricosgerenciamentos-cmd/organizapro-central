import DetailPage from '../../components/DetailPage.jsx';
import { tools } from '../../data/tools.js';

export default function Planilhas() {
  return <DetailPage item={tools.find((item) => item.id === 'planilhas')} eyebrow="Ferramenta" backTo="/ferramentas" backLabel="Voltar às ferramentas" />;
}
