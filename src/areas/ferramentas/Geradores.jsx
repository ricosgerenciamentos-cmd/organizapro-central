import DetailPage from '../../components/DetailPage.jsx';
import { tools } from '../../data/tools.js';

export default function Geradores() {
  return <DetailPage item={tools.find((item) => item.id === 'geradores')} eyebrow="Ferramenta" backTo="/ferramentas" backLabel="Voltar às ferramentas" />;
}
