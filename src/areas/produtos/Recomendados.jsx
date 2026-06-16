import DetailPage from '../../components/DetailPage.jsx';
import { productCategories } from '../../data/products.js';

export default function Recomendados({ id = 'escritorio' }) {
  return <DetailPage item={productCategories.find((item) => item.id === id)} eyebrow="Produtos recomendados" backTo="/produtos" backLabel="Voltar aos produtos" />;
}
