import AboutEvent from "../../containers/MesaRedonda/AboutEvent"
import AberturaOficial from "../../containers/MesaRedonda/AberturaOficial"
import BaixarAgenda from "../../containers/MesaRedonda/BaixarAgenda"
import Banner from "../../containers/MesaRedonda/Banner"
import Estatisticas from "../../containers/MesaRedonda/Estátisticas"
import PorquePatrocinar from "../../containers/MesaRedonda/PorquePatrocinar"
import PorqueParticipar from "../../containers/MesaRedonda/PorqueParticipar"
import Speakers from "../../containers/MesaRedonda/Speakers"
import SponsorsAndPartners from "../../containers/MesaRedonda/SponsorAndPartners"
import OQueEsperar from "../../containers/MesaRedonda/OQueEsperar"
import Footer from "../../components/footer"
import MediaPartners from "../../containers/MesaRedonda/MediaPartners"

const MesaRedonda: React.FC = () => {
	return (
		<main className="bg-[#ffff] w-screen h-screen overflow-y-auto">
			<Banner />
			<AboutEvent />
			<BaixarAgenda />
			<PorqueParticipar />
			<Estatisticas />
			<PorquePatrocinar />
			<Speakers />
			<AberturaOficial />
			<SponsorsAndPartners/>
			<OQueEsperar/>
			<MediaPartners/>
			<Footer/>
		</main>
	)
}

export default MesaRedonda
