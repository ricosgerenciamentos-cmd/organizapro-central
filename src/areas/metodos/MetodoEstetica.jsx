import DetailPage from '../../components/DetailPage.jsx';
import { methods } from '../../data/methods.js';

export default function MetodoEstetica() {
  return <DetailPage item={methods.find((item) => item.id === 'estetica')} eyebrow="Método" backTo="/metodos" backLabel="Voltar aos métodos" />;
}
