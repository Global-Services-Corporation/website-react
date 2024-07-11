import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../../assets"

const BannerBaw: React.FC = () => {
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
		<div className="h-[800px] max-sm:min-h-[0] relative max-sm:h-[600px] w-full ">
			<div className="flex flex-col justify-center max-sm:relative items-center w-full absolute top-48 gap-[50px] z-40">
				<div className="flex flex-col max-sm:absolute max-sm:top-10 max-sm:items-center max-sm:flex justify-center items-center text-[#fff] w-[1075px] max-lg:w-full max-lg:px-8 gap-6">
					<h1 className="text-[60px] max-md:text-5xl font-bold max-sm:text-[24px] text-center shadow-md">
						BUSINESS AFTER WORK 2024 <br />
						<span className="font-extrabold max-md:text-5xl max-sm:text-[24px] text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text">
							LÍDER TECH
						</span>
					</h1>

					<p className="text-[18px] max-sm:text-[14px] shadow-md">
						Participe do maior evento corporativo.
					</p>

					<div className="flex gap-2">
						<a
							href="https://www.businessafterwork.globalsc.ao/personal"
							className=" bg-[#d3aa51] font-bold flex items-center justify-center px-[25px] py-[25px] w-[217px] h-[50px] text-white hover:bg-[#ffff] rounded-[10px]"
						>
							Participar
						</a>

						<a
							href="https://www.businessafterwork.globalsc.ao/"
							className="text-[#000] bg-[#fff] font-bold flex items-center justify-center px-[50px] py-[25px] w-[217px] h-[50px] hover:text-white hover:bg-[#30CBE8] rounded-[10px]"
						>
							Saber mais
						</a>
					</div>
				</div>
			</div>

			<div className=" flex flex-col absolute top-0 inset-x-0 max-sm:z-0">
				<Slider {...settings} className="">
					<div className="w-full flex items-center h-[800px] max-sm:h-[600px]">
						<img
							src={Banner3}
							alt="Banner Background 2"
							className="w-full object-cover opacity-60 object-top rounded-[50px] max-sm:rounded-none max-sm:hidden max-3xl:w-[1250px] z-0 h-full"
						/>
					</div>

					<div className="w-full flex items-center h-[800px] max-sm:h-[600px]">
						<img
							src={Banner4}
							alt="Banner Background 3"
							className="w-full opacity-60 object-cover object-top rounded-[50px] max-sm:rounded-none max-sm:hidden max-3xl:w-[1250px] z-0 h-full"
						/>
					</div>

					<div className="w-full flex items-center h-[800px] max-sm:h-[600px]">
						<img
							src={Banner5}
							alt="Banner Background 3"
							className="w-full opacity-60 object-cover object-top rounded-[50px] max-sm:rounded-none max-sm:hidden max-3xl:w-[1250px] z-0 h-full"
						/>
					</div>
					<div className="w-full flex items-center h-[800px] max-sm:h-[600px]">
						<img
							src={Banner2}
							alt="Banner Background 3"
							className="w-full opacity-60 object-cover object-top rounded-[50px] max-sm:rounded-none max-sm:hidden max-3xl:w-[1250px] z-0 h-full"
						/>
					</div>
					<div className="w-full flex items-center h-[800px] max-sm:h-[600px]">
						<img
							src={Banner1}
							alt="Banner Background 3"
							className="w-full opacity-60 object-cover object-top rounded-[50px] max-sm:rounded-none max-sm:hidden max-3xl:w-[1250px] z-0 h-full"
						/>
					</div>
				</Slider>
			</div>
		</div>
	)
}

export default BannerBaw
