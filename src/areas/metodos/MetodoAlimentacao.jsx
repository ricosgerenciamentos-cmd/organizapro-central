import DetailPage from '../../components/DetailPage.jsx';
import { methods } from '../../data/methods.js';

export default function MetodoAlimentacao() {
  return <DetailPage item={methods.find((item) => item.id === 'alimentacao')} eyebrow="Método" backTo="/metodos" backLabel="Voltar aos métodos" />;
}
