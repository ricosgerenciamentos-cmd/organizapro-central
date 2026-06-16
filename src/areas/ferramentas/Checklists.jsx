import DetailPage from '../../components/DetailPage.jsx';
import { tools } from '../../data/tools.js';

export default function Checklists() {
  return <DetailPage item={tools.find((item) => item.id === 'checklists')} eyebrow="Ferramenta" backTo="/ferramentas" backLabel="Voltar às ferramentas" />;
}
