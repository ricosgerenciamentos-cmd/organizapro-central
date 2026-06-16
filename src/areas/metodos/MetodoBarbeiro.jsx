import DetailPage from '../../components/DetailPage.jsx';
import { methods } from '../../data/methods.js';

export default function MetodoBarbeiro() {
  return <DetailPage item={methods.find((item) => item.id === 'barbeiro')} eyebrow="Método" backTo="/metodos" backLabel="Voltar aos métodos" />;
}
