import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { bannerMesaRedonda, bannerMRPeople } from "../../assets"

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

			<div className="absolute top-0 left-0 w-full h-full bg-[#151515c4]"></div>
		</div>
	)
}

export default BannerMesaRedonda
