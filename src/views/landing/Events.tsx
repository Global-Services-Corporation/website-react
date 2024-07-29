import AtividadesRecentes from "../../containers/Baw2024/AtividadesRecentes"
import AtividadesFuturas from "../../containers/Events/AtividadesFuturas"
import BannerMesaRedonda from "../../containers/LandingPage/BannerMR"

const Events: React.FC = () => {
	return (
		<main className="bg-[#001032] text-white pb-16">
			<BannerMesaRedonda />
			<AtividadesFuturas />
			<AtividadesRecentes />
		</main>
	)
}

export default Events
