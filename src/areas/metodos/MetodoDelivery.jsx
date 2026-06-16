import DetailPage from '../../components/DetailPage.jsx';
import { methods } from '../../data/methods.js';

export default function MetodoDelivery() {
  return <DetailPage item={methods.find((item) => item.id === 'delivery')} eyebrow="Método" backTo="/metodos" backLabel="Voltar aos métodos" />;
}
