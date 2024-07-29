import AboutUs from "../../containers/LandingPage/AboutUs"
import Services from "../../containers/LandingPage/Services"
import EnterpriseSolution from "../../containers/LandingPage/EnterpriseSolution"
import { elipse2 } from "../../assets"
import FormativeAction from "../../containers/LandingPage/FormativeAction"
import Blog from "../../containers/LandingPage/Blog"
import Newsletter from "../../containers/LandingPage/Newsletter"

import BannerMesaRedonda from "../../containers/LandingPage/BannerMR"

const HomePage: React.FC = () => {
	return (
		<div className="font-interTight bg-[#001032] h-full text-white flex flex-col justify-center items-center pb-48">
			<img
				src={elipse2}
				className="absolute start-0 -top-[750px] object-cover z-0 rotate-180 animate-pulse"
				alt=""
			/>
			<BannerMesaRedonda />
			<img
				src={elipse2}
				className="absolute end-0 object-cover z-0 top-[200px] animate-pulse"
				alt=""
			/>
			<Services />
			<AboutUs />
			<img
				src={elipse2}
				className="absolute start-0 object-cover z-0 top-[1470px] rotate-180 animate-pulse"
				alt=""
			/>
			<EnterpriseSolution />
			<FormativeAction />
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
