import { fundoWhite } from "../../assets/mesa-redonda"
import {
	carlosRosado,
	DuraoBarroso,
	marioNascimento,
	matuzalemSukete,
	NJAyuk,
	pauloPortasCard,
} from "../../assets/mesa-redonda/speakers"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import { Pagination, Autoplay } from "swiper/modules"
import "./speakers.css"

const Speakers: React.FC = () => {
	const cardInfo = [
		{
			imagem: DuraoBarroso,
			name: "Durão Barroso",

			title: "Ex-Primeiro  Ministro de Portugal",
		},
		{
			imagem: matuzalemSukete,
			name: "Matuzalém Sukete",
			title: "Ex-Primeiro  Ministro de Portugal",
		},
		{
			imagem: marioNascimento,
			name: "Mário de Nascimento",
			title: "Ex-Primeiro  Ministro de Portugal",
		},
		{
			imagem: pauloPortasCard,
			name: "Paulo Portas",
			title: "Ex-Primeiro  Ministro de Portugal",
		},
		{
			imagem: carlosRosado,
			name: "Carlos Rosado",
			title: "Ex-Primeiro  Ministro de Portugal",
		},
		{
			imagem: NJAyuk,
			name: "NJ Ayuk JD MBA",
			title: `Executive Chairman at African Energy Chamber`,
		},
	]

	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return '<span class="' + className + '"></span>'
		},
	}

	return (
		<section className="relative min-h-screen h-screen">
			<img
				src={fundoWhite}
				alt=""
				className="w-full h-full object-cover opacity-50"
			/>
			<div className="absolute top-0 flex flex-col w-full py-20 justify-around max-lg:justify-normal gap-12 items-center lg:px-24 max-lg:px-12 h-full">
				<p className="font-extrabold text-3xl text-[#0E1937] text-center max-lg:text-2xl">
					Speakers do Evento
				</p>

				<div className="w-full flex justify-center items-center text-black h-screen">
					<Swiper
						watchSlidesProgress={true}
						slidesPerView={3}
						spaceBetween={30}
						autoplay={{
							delay: 2500,
							disableOnInteraction: true,
						}}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							640: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 3,
							},
						}}
						pagination={pagination}
						modules={[Pagination, Autoplay]}
						className="speakersSwiper w-full"
					>
						{cardInfo.map((info, index) => (
							<SwiperSlide key={index}>
								<div className="w-full flex justify-center">
									<img
										src={info.imagem}
										alt=""
										className="object-contain hover:-translate-y-3 transition-all duration-700 shadow-md "
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default Speakers
