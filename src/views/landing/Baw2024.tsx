import { useEffect } from "react"
import AboutEvent from "../../containers/Baw2024/AboutEvent"
import AtividadesRecentes from "../../containers/Baw2024/AtividadesRecentes"
import Banner from "../../containers/Baw2024/Banner"
import Estatisticas from "../../containers/Baw2024/Estatisticas"
import EventInfo from "../../containers/Baw2024/InfoEvent"
import OQueEsperar from "../../containers/Baw2024/OQueEsperar"
import Oradores from "../../containers/Baw2024/Oradores"
import Parceiros from "../../containers/Baw2024/Parceiros"
import { Video } from "../../containers/Baw2024/Feed"
import CallToAction from "../../containers/Baw2024/CallToAction"
import { bgPricing } from "../../assets"
import Sponsors from "../../containers/Baw2024/Sponsors"

const InfoPage: React.FC = () => {
	useEffect(() => {
		localStorage.clear()
	}, [])

	return (
		<div className="bg-[#001032] gap-[64px] flex flex-col justify-center items-center relative font-interTight">
			<Banner />
			<Parceiros />
			<img
				src={bgPricing}
				alt=""
				className="object-cover max-sm:hidden absolute top-[5%] animate-pulse"
			/>
			<AboutEvent />
			<EventInfo />

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
		</div>
	)
}

export default InfoPage
