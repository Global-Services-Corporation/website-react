import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { bannerMesaRedonda, bannerMRPeople } from "../../assets"
import { Link } from "react-router-dom"

const BannerMesaRedonda: React.FC = () => {
	const settings = {
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 4000, // Tempo em milissegundos entre as mudanças de slide
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
	}

	return (
		<div className="h-screen w-full relative">
			<div className="w-full h-full">
				<Slider {...settings} className="">
					<div className="w-full flex items-center h-full">
						<img
							src={bannerMesaRedonda}
							alt=""
							className="w-full object-cover h-screen"
						/>
					</div>

					<div className="w-full flex items-center h-screen">
						<img
							src={bannerMRPeople}
							alt=""
							className="w-full object-cover h-screen"
						/>
					</div>
				</Slider>
			</div>

			<div className="absolute top-0 left-0 w-full h-full bg-[#151515c4] flex justify-center items-center">
				<div className="flex flex-col gap-10 max-w-[800px] max-lg:w-full justify-between items-center">
					<h1 className="font-extrabold text-5xl text-center max-lg:text-2xl text-[#ffffff]">
						Leadership <span className="text-[#FF9800]">Innovation</span>{" "}
						In Industries and In The Oil & Gas Sector
					</h1>

					<p className="text-[#ffff]">Participe do maior evento corporativo.</p>

					<Link
						to="https://www.mesaredonda.globalsc.ao"
						className="hover:bg-[#FF9800] hover:text-[#ffffff] bg-[#ffffff] py-2.5 px-6 font-semibold rounded-lg transition-colors duration-300 w-56 max-lg:w-36 max-lg:text-sm flex justify-center items-center"
					>
						Saiba mais
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BannerMesaRedonda
