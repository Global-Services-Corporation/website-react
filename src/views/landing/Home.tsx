import AboutUs from "../../containers/LandingPage/AboutUs"
import Services from "../../containers/LandingPage/Services"
import EnterpriseSolution from "../../containers/LandingPage/EnterpriseSolution"
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
			<Blog />
			<Newsletter />
		</div>
	)
}

export default HomePage
