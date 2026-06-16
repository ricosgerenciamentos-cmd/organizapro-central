import DetailPage from '../../components/DetailPage.jsx';
import { tools } from '../../data/tools.js';

export default function Calculadoras() {
  return <DetailPage item={tools.find((item) => item.id === 'calculadoras')} eyebrow="Ferramenta" backTo="/ferramentas" backLabel="Voltar às ferramentas" />;
}
