import AberturaOficial from "../../containers/MesaRedonda/AberturaOficial"
import BaixarAgenda from "../../containers/MesaRedonda/BaixarAgenda"
import Banner from "../../containers/MesaRedonda/Banner"
import Estatisticas from "../../containers/MesaRedonda/Estátisticas"
import PorqueParticipar from "../../containers/MesaRedonda/PorqueParticipar"

const MesaRedonda: React.FC = () => {
	return (
		<main className="bg-[#ffff] w-screen h-screen overflow-y-auto">
			<Banner />
			<BaixarAgenda />
			<Estatisticas />
			<PorqueParticipar />
			<AberturaOficial />
		</main>
	)
}

export default MesaRedonda
