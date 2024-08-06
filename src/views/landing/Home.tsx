import AboutUs from "../../containers/LandingPage/AboutUs"
import Services from "../../containers/LandingPage/Services"
import EnterpriseSolution from "../../containers/LandingPage/EnterpriseSolution"
import { elipse2 } from "../../assets"
import NossosProdutos from "../../containers/LandingPage/NossosProdutos"
import Blog from "../../containers/LandingPage/Blog"
import Newsletter from "../../containers/LandingPage/Newsletter"

import BannerMesaRedonda from "../../containers/LandingPage/BannerMR"

const HomePage: React.FC = () => {
	return (
		<div className="font-interTight bg-[#ffffff] h-full text-[#000000] flex flex-col justify-center items-center pb-48">
			<BannerMesaRedonda />
			<Services />
			<AboutUs />
			<EnterpriseSolution />
			<NossosProdutos />
			<img
				src={elipse2}
				alt=""
				className="absolute end-0 top-[2470px] object-cover animate-pulse"
			/>
			<Blog />
			<img
				src={elipse2}
				className="absolute start-0 object-cover z-0 top-[3470px] rotate-180 animate-pulse"
				alt=""
			/>
			<Newsletter />
		</div>
	)
}

export default HomePage
