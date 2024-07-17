import AboutEvent from "../../containers/MesaRedonda/AboutEvent"
import AberturaOficial from "../../containers/MesaRedonda/AberturaOficial"
import BaixarAgenda from "../../containers/MesaRedonda/BaixarAgenda"
import Banner from "../../containers/MesaRedonda/Banner"
import Estatisticas from "../../containers/MesaRedonda/Estátisticas"
import PorquePatrocinar from "../../containers/MesaRedonda/PorquePatrocinar"
import PorqueParticipar from "../../containers/MesaRedonda/PorqueParticipar"
import Speakers from "../../containers/MesaRedonda/Speakers"
import SponsorsAndPartners from "../../containers/MesaRedonda/SponsorAndPartners"

const MesaRedonda: React.FC = () => {
	return (
		<main className="bg-[#ffff] w-screen h-screen overflow-y-auto">
			<Banner />
			<BaixarAgenda />
			<Estatisticas />
			<PorqueParticipar />
			<AberturaOficial />
			<AboutEvent />
			<PorquePatrocinar />
			<Speakers />
			<SponsorsAndPartners/>
		</main>
	)
}

export default MesaRedonda
