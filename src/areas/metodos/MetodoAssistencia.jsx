import DetailPage from '../../components/DetailPage.jsx';
import { methods } from '../../data/methods.js';

export default function MetodoAssistencia() {
  return <DetailPage item={methods.find((item) => item.id === 'assistencia-tecnica')} eyebrow="Método" backTo="/metodos" backLabel="Voltar aos métodos" />;
}
