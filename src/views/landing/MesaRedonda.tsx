import AboutEvent from "../../containers/MesaRedonda/AboutEvent"
import Banner from "../../containers/MesaRedonda/Banner"

const MesaRedonda: React.FC = () => {
	return (
		<main className="bg-[#ffff] w-screen h-screen overflow-y-auto">
			<Banner />
			<AboutEvent/>
		</main>
	)
}

export default MesaRedonda
