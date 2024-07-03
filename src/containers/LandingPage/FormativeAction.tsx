import Slider from "react-slick"
import FormativeActionCard from "../../components/formative-action-card"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect, useState } from "react"

const FormativeAction: React.FC = () => {
	const [qtdSlide, setQtdSlide] = useState(3)
	const [arrows, setArrows] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				setQtdSlide(1)
				setArrows(true)
			} else {
				setQtdSlide(3)
			}
		}

		handleResize()

		window.addEventListener("resize", handleResize)

		return () => window.removeEventListener("resize", handleResize)
	}, [])

	const settings = {
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: qtdSlide,
		slidesToScroll: 2,
		arrows: arrows,
	}

	const cardInfo = [
		{
			img: "",
			title: "Gestão de sinistros nas empresas",
			description:
				"Criação de um plano estratégico de marketing que pode incluir posicionamento de marca, segmentação de mercado, definição de público-alvo, definição de objetivos e metas de marketing.",
		},
		{
			img: "",
			title: "Gestão e estratégia de recursos humanos",
			description:
				" Criação de um plano estratégico de marketing que pode incluir posicionamento de marca, segmentação de mercado, definição de público-alvo, definição de objetivos e metas de marketing.",
		},
		{
			img: "",
			title: "Técnicas de comunicação assertiva",
			description:
				" Criação de um plano estratégico de marketing que pode incluir posicionamento de marca, segmentação de mercado, definição de público-alvo, definição de objetivos e metas de marketing.",
		},
		{
			img: "",
			title: "Gestão financeira e tesouraria",
			description:
				" Criação de um plano estratégico de marketing que pode incluir posicionamento de marca, segmentação de mercado, definição de público-alvo, definição de objetivos e metas de marketing.",
		},
		{
			img: "",
			title: "Elaboração de plano de negócios",
			description:
				" Criação de um plano estratégico de marketing que pode incluir posicionamento de marca, segmentação de mercado, definição de público-alvo, definição de objetivos e metas de marketing.",
		},
		{
			img: "",
			title: "Consultoria em marketing",
			description:
				" Criação de um plano estratégico de marketing que pode incluir posicionamento de marca, segmentação de mercado, definição de público-alvo, definição de objetivos e metas de marketing.",
		},
	]

	return (
		<section className="w-full flex flex-col justify-center gap-12 py-24 max-sm:py-12 items-center z-40">
			<div className="w-full flex flex-col items-center gap-5 justify-center">
				<p className="font-bold text-4xl max-sm:text-2xl"> Ação Formativa</p>
				<p className="text-[#c5c5c5] max-sm:text-sm text-center w-2/3">
					Veja as soluções que a{" "}
					<span className="text-[#30CBE8]">Global Services Corporation</span>{" "}
					tem para a sua empresa.
				</p>
			</div>

			<div className="w-4/5 flex justify-center items-center gap-2 h-fit">
				{" "}
				<Slider {...settings} className="w-full flex">
					{cardInfo.map((info, index) => (
						<FormativeActionCard
							key={index}
							img={info.img}
							title={info.title}
							description={info.description}
						/>
					))}
				</Slider>
			</div>
		</section>
	)
}

export default FormativeAction
