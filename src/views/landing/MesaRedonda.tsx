import AboutEvent from "../../containers/MesaRedonda/AboutEvent"
import AberturaOficial from "../../containers/MesaRedonda/AberturaOficial"
import BaixarAgenda from "../../containers/MesaRedonda/BaixarAgenda"
import Banner from "../../containers/MesaRedonda/Banner"
import Estatisticas from "../../containers/MesaRedonda/Estátisticas"
import PorquePatrocinar from "../../containers/MesaRedonda/PorquePatrocinar"
import PorqueParticipar from "../../containers/MesaRedonda/PorqueImperdivel"
import Speakers from "../../containers/MesaRedonda/Speakers"
import SponsorsAndPartners from "../../containers/MesaRedonda/SponsorAndPartners"
import OQueEsperar from "../../containers/MesaRedonda/OQueEsperar"
import Footer from "../../components/footer"
import MediaPartners from "../../containers/MesaRedonda/MediaPartners"
import ContactUs from "../../containers/MesaRedonda/ContactUs"

const MesaRedonda: React.FC = () => {
	return (
		<main className="bg-[#ffff] w-screen h-screen overflow-y-auto font-montserrat">
			<Banner />
			<AboutEvent />
			<BaixarAgenda />
			<PorqueParticipar />
			<Estatisticas />
			<PorquePatrocinar />
			<AberturaOficial />
			<Speakers />
			<SponsorsAndPartners />
			<OQueEsperar />
			<MediaPartners />
			<ContactUs />
			<Footer />
		</main>
	)
}

export default MesaRedonda
