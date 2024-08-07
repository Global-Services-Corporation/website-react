import { useState } from "react"
import {
	saudeIcon,
	aviaoIcon,
	carroIcon,
	acidenteIcon,
	coneIcon,
	assaltoIcon,
	studentsIcon,
	camiaoIcon,
} from "../../assets/insurance"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "./nossosProdutos.css"
import { Pagination, Autoplay } from "swiper/modules"

const NossosProdutos: React.FC = () => {
	const [view, setView] = useState("particular")

	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return '<span class="' + className + '"></span>'
		},
	}

	const insuranceCard = [
		{ icon: saudeIcon, title: "Saúde" },
		{ icon: aviaoIcon, title: "Viagem" },
		{ icon: carroIcon, title: "Automóvel" },
		{ icon: acidenteIcon, title: "Acidentes Pessoais" },
		{ icon: coneIcon, title: "Acidentes de Trabalho" },
		{ icon: assaltoIcon, title: "Proteção Contra Assaltos" },
		{ icon: studentsIcon, title: "Escolar" },
		{ icon: camiaoIcon, title: "Transporte de Cargas/Mercadorias" },
	]

	const renderParticular = () => {
		return (
			<div className="w-full flex">
				<div className="w-full flex min-h-72">
					<Swiper
						watchSlidesProgress={true}
						slidesPerView={4}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							640: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 4,
							},
						}}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						pagination={pagination}
						modules={[Pagination, Autoplay]}
						className="productsSwiper"
					>
						{insuranceCard.map((card, index) => (
							<SwiperSlide key={index}>
								<div className=" h-60 w-48 bg-[#ffffff] hover:bg-[#ffffffa8] flex flex-col rounded-xl px-8 items-center justify-center gap-3 mx-auto cursor-pointer">
									<img src={card.icon} alt="Icon" className="w-16" />
									<p className="text-center">{card.title}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		)
	}

	const renderEmpresarial = () => {
		return (
			<div className="w-full flex">
				<div className="w-full flex min-h-72 ">
					<Swiper
						watchSlidesProgress={true}
						slidesPerView={4}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							640: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 4,
							},
						}}
						pagination={pagination}
						modules={[Pagination, Autoplay]}
						className="productsSwiper"
					>
						{insuranceCard.map((card, index) => (
							<SwiperSlide key={index}>
								<div className=" h-60 w-48 bg-[#ffffff] hover:bg-[#ffffffa8] flex flex-col rounded-xl px-8 items-center justify-center gap-3 mx-auto cursor-pointer">
									<img src={card.icon} alt="Icon" className="w-16" />
									<p className="text-center">{card.title}</p>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		)
	}

	return (
		<section
			className="w-full flex flex-col justify-center gap-12 py-28 max-sm:py-20 items-center z-40 bg-[#0C2A42]"
			id="produtos"
		>
			<div className="w-full flex flex-col items-center gap-5 justify-center">
				<p className="font-bold text-4xl max-sm:text-2xl text-white">
					Produtos
				</p>
			</div>

			<div className="w-4/5 flex flex-col gap-4 z-40">
				<nav className="flex justify-between p-2">
					<div className="flex w-52 justify-between items-center">
						<button
							className={`text-xl cursor-pointer text-white ${
								view === "particular" && "border-b-4 border-b-[#ffffff]"
							}`}
							onClick={() => setView("particular")}
						>
							Particular
						</button>
						<button
							className={`text-xl cursor-pointer text-white ${
								view === "empresarial" && "border-b-4 border-b-[#ffffff]"
							}`}
							onClick={() => setView("empresarial")}
						>
							Empresarial
						</button>
					</div>
				</nav>

				<div className="py-10 flex w-full items-center">
					{view === "particular" && renderParticular()}
					{view === "empresarial" && renderEmpresarial()}
				</div>
			</div>
		</section>
	)
}

export default NossosProdutos
