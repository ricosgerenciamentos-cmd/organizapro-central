import SectionTitle from '../components/SectionTitle.jsx';
import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import { productCategories } from '../data/products.js';

export default function ProductsPreview() {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Produtos recomendados"
          title="Compre melhor o que ajuda seu negócio"
          text="Categorias preparadas para receber recomendações e links úteis por nicho."
        />
        <div className="cardGrid five compactCards">
          {productCategories.map((category) => <Card key={category.id} item={category} type="product" />)}
        </div>
        <div className="centerAction"><Button to="/produtos" variant="primary">Ver produtos</Button></div>
      </div>
    </section>
  );
}
