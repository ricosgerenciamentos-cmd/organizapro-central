import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import ServicosPage from './pages/ServicosPage.jsx';
import MethodsPage from './pages/MethodsPage.jsx';
import FerramentasPage from './pages/FerramentasPage.jsx';
import ProdutosPage from './pages/ProdutosPage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';
import LegalPage from './pages/LegalPage.jsx';
import ImageGuidePage from './pages/ImageGuidePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import SiteProfissional from './areas/servicos/SiteProfissional.jsx';
import Instagram from './areas/servicos/Instagram.jsx';
import WhatsappBusiness from './areas/servicos/WhatsappBusiness.jsx';
import PaginaDeVendas from './areas/servicos/PaginaDeVendas.jsx';
import AssistenteVirtual from './areas/servicos/AssistenteVirtual.jsx';
import MetodoBarbeiro from './areas/metodos/MetodoBarbeiro.jsx';
import MetodoAssistencia from './areas/metodos/MetodoAssistencia.jsx';
import MetodoDelivery from './areas/metodos/MetodoDelivery.jsx';
import MetodoEstetica from './areas/metodos/MetodoEstetica.jsx';
import MetodoAlimentacao from './areas/metodos/MetodoAlimentacao.jsx';
import Calculadoras from './areas/ferramentas/Calculadoras.jsx';
import Planilhas from './areas/ferramentas/Planilhas.jsx';
import Checklists from './areas/ferramentas/Checklists.jsx';
import Geradores from './areas/ferramentas/Geradores.jsx';
import Barbearia from './areas/produtos/Barbearia.jsx';
import AssistenciaTecnica from './areas/produtos/AssistenciaTecnica.jsx';
import Delivery from './areas/produtos/Delivery.jsx';
import Estetica from './areas/produtos/Estetica.jsx';
import Escritorio from './areas/produtos/Escritorio.jsx';
import { useRoute } from './utils/useRoute.js';
import { useSeo } from './utils/useSeo.js';
import LoginPage from './pages/platform/LoginPage.jsx';
import PlatformPage from './pages/platform/PlatformPage.jsx';
import ClientDashboard from './pages/platform/ClientDashboard.jsx';
import AdminDashboard from './pages/platform/AdminDashboard.jsx';
import CRMPage from './pages/platform/CRMPage.jsx';
import AutomationsPage from './pages/platform/AutomationsPage.jsx';
import AIAssistantPage from './pages/platform/AIAssistantPage.jsx';

const routes = {
  '/': <Home />,
  '/servicos': <ServicosPage />,
  '/metodos': <MethodsPage />,
  '/ferramentas': <FerramentasPage />,
  '/produtos': <ProdutosPage />,
  '/contato': <ContatoPage />,
  '/login': <LoginPage />,
  '/plataforma': <PlatformPage />,
  '/cliente': <ClientDashboard />,
  '/admin': <AdminDashboard />,
  '/admin/crm': <CRMPage />,
  '/admin/automacoes': <AutomationsPage />,
  '/assistente-ia': <AIAssistantPage />,
  '/privacidade': <LegalPage path="/privacidade" />,
  '/termos': <LegalPage path="/termos" />,
  '/reembolso': <LegalPage path="/reembolso" />,
  '/guia-de-imagens': <ImageGuidePage />,
  '/servicos/site-profissional': <SiteProfissional />,
  '/servicos/instagram-organizado': <Instagram />,
  '/servicos/whatsapp-business': <WhatsappBusiness />,
  '/servicos/pagina-de-vendas': <PaginaDeVendas />,
  '/servicos/assistente-virtual': <AssistenteVirtual />,
  '/metodos/barbeiro': <MetodoBarbeiro />,
  '/metodos/assistencia-tecnica': <MetodoAssistencia />,
  '/metodos/delivery': <MetodoDelivery />,
  '/metodos/estetica': <MetodoEstetica />,
  '/metodos/alimentacao': <MetodoAlimentacao />,
  '/ferramentas/calculadoras': <Calculadoras />,
  '/ferramentas/planilhas': <Planilhas />,
  '/ferramentas/checklists': <Checklists />,
  '/ferramentas/geradores': <Geradores />,
  '/produtos/barbearia': <Barbearia />,
  '/produtos/assistencia-tecnica': <AssistenciaTecnica />,
  '/produtos/delivery': <Delivery />,
  '/produtos/estetica': <Estetica />,
  '/produtos/escritorio': <Escritorio />,
};

export default function App() {
  const path = useRoute();
  useSeo(path);

  const page = routes[path] || <NotFoundPage />;

  return (
    <>
      <Header />
      <main>{page}</main>
      <Footer />
    </>
  );
}
