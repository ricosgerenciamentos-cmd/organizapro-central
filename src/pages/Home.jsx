import Hero from '../sections/Hero.jsx';
import FeatureRail from '../sections/FeatureRail.jsx';
import SolutionPaths from '../sections/SolutionPaths.jsx';
import ComboOffer from '../sections/ComboOffer.jsx';
import ServicesPreview from '../sections/ServicesPreview.jsx';
import MethodsPreview from '../sections/MethodsPreview.jsx';
import ToolsPreview from '../sections/ToolsPreview.jsx';
import ProductsPreview from '../sections/ProductsPreview.jsx';
import Process from '../sections/Process.jsx';
import FinalCTA from '../sections/FinalCTA.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureRail />
      <SolutionPaths />
      <ComboOffer />
      <ServicesPreview />
      <MethodsPreview />
      <ToolsPreview />
      <ProductsPreview />
      <Process />
      <FinalCTA />
    </>
  );
}
