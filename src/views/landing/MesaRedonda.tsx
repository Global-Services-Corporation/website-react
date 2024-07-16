import AboutEvent from "../../containers/MesaRedonda/AboutEvent"
import Banner from "../../containers/MesaRedonda/Banner"
import PorqueParticipar from "../../containers/MesaRedonda/PorqueParticipar"
import Speakers from "../../containers/MesaRedonda/Speakers"

const MesaRedonda: React.FC = () => {
	return (
		<main className="bg-[#ffff] w-screen h-screen overflow-y-auto">
			<Banner />
			<AboutEvent/>
			<PorqueParticipar/>
			<Speakers/>
		</main>
	)
}

export default MesaRedonda
