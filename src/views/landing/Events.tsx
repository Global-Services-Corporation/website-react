import BannerBaw from "../../containers/LandingPage/BannerBaws"
import AtividadesRecentes from "../../containers/InfoPageEvent/AtividadesRecentes"
import AtividadesFuturas from "../../containers/Events/AtividadesFuturas"

const Events: React.FC = () => {
	return (
		<main className="bg-[#001032] text-white">
			<BannerBaw />
			<AtividadesRecentes />
			<AtividadesFuturas />
		</main>
	)
}

export default Events
