import PageHero from '../components/PageHero.jsx';
import Card from '../components/Card.jsx';
import FinalCTA from '../sections/FinalCTA.jsx';
import { productCategories } from '../data/products.js';

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        eyebrow="OrganizaPro Produtos"
        title="Recomendações úteis para equipar melhor seu negócio"
        text="Categorias preparadas para receber produtos por nicho: barbearia, assistência técnica, delivery, estética e organização empresarial."
        secondaryLabel="Ver ferramentas"
        secondaryTo="/ferramentas"
      />
      <section className="section">
        <div className="container cardGrid three">
          {productCategories.map((category) => <Card key={category.id} item={category} type="product" />)}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
