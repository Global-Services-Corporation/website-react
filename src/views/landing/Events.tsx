import { useEffect } from "react";
import AboutEvent from "../../containers/InfoPageEvent/AboutEvent";
import AtividadesRecentes from "../../containers/InfoPageEvent/AtividadesRecentes";
import Banner from "../../containers/InfoPageEvent/Banner";
import Estatisticas from "../../containers/InfoPageEvent/Estatisticas";
import EventInfo from "../../containers/InfoPageEvent/InfoEvent";
import OQueEsperar from "../../containers/InfoPageEvent/OQueEsperar";
import Oradores from "../../containers/InfoPageEvent/Oradores";
import Parceiros from "../../containers/InfoPageEvent/Parceiros";
import ProgramEvent from "../../containers/InfoPageEvent/ProgramEvent";
import Footer from "../../components/footer";
import { Video } from "../../containers/InfoPageEvent/Feed";
import CallToAction from "../../containers/InfoPageEvent/CallToAction";
import { bgPricing } from "../../assets";
import Sponsors from "../../containers/InfoPageEvent/Sponsors";

const InfoPage: React.FC = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="bg-[#001032] gap-[64px] flex flex-col justify-center items-center relative">
      <Banner />
      <Parceiros />
	  <img
        src={bgPricing}
        alt=""
        className="object-cover max-sm:hidden absolute top-[5%] animate-pulse"
      />
      <AboutEvent />
      <EventInfo />
      <ProgramEvent />
      <Oradores />
      <Estatisticas />
      <img
        src={bgPricing}
        alt=""
        className="object-cover max-sm:hidden absolute top-[50.5%] animate-pulse"
      />
      <OQueEsperar />
      <CallToAction />
      <AtividadesRecentes />
      <Video />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default InfoPage;
