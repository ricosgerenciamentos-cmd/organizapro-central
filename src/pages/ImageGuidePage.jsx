import PageHero from '../components/PageHero.jsx';
import { imageSpecs } from '../data/imageSpecs.js';

export default function ImageGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Guia de imagens"
        title="Arquivos visuais recomendados para a OrganizaPro"
        text="Use essa página como checklist para substituir placeholders por imagens reais e manter o site mais premium."
        secondaryLabel="Voltar ao início"
        secondaryTo="/"
      />
      <section className="section compactTop">
        <div className="container tableWrap">
          <table>
            <thead>
              <tr>
                <th>Área</th>
                <th>Tamanho</th>
                <th>Arquivo</th>
                <th>Uso</th>
              </tr>
            </thead>
            <tbody>
              {imageSpecs.map((spec) => (
                <tr key={spec.area}>
                  <td>{spec.area}</td>
                  <td>{spec.size}</td>
                  <td><code>{spec.file}</code></td>
                  <td>{spec.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
