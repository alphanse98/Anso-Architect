import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Services from "./components/Services";
import Plan from "./components/Plan";
import Elevation from "./components/Elevation";
import FloorPlan from "./components/FloorPlan";
import Interior from "./components/Interior";
import WalkThrough from "./components/WalkThrough";
import FooterSection from "./components/FooterSection";


export default function Home() {
  return (
    <div className="">
      <Header />
      <Gallery />
      <Services />
      <Plan />
      <Elevation />
      <FloorPlan />
      <Interior />
      <WalkThrough />
      <FooterSection />
    </div>
  );
}
