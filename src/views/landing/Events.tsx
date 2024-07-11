import BannerBaw from "../../containers/LandingPage/BannerBaws"
import AtividadesRecentes from "../../containers/InfoPageEvent/AtividadesRecentes"

const Events: React.FC = () => {
	return (
		<main className="bg-[#001032]">
			<BannerBaw/>
			<AtividadesRecentes/>
		</main>
	)
}

export default Events