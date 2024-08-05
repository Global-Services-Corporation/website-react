import Slider from "react-slick"
import BlogCard from "../../components/BlogCard"
import { useEffect, useState } from "react"
import { academiaBai, sukete, tda } from "../../assets/landing/Blog"

const Blog: React.FC = () => {
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
			navigateTo:
				"https://www.linkedin.com/posts/global-service-corporations_global-services-corporation-e-business-after-activity-7216035336894726145-Ne6P?utm_source=share&utm_medium=member_desktop",
			img: tda,
			title:
				"Estamos entusiasmados em apresentar a TDA – Paixão Automóvel como nosso parceiro para o Business After Work edição Lider Tech!",
			description: `
Recordar que no dia 18 de julho 🗓️ no Hotel de Convenções de Talatona📍 teremos a oportunidade de promover o maior intercâmbio e troca de experiências entre os lideres mais expressivos do mercado nacional e internacional, também saberemos mais sobre como implementar metodologias para uma liderança mais Tech nas organizações.`,

			data: "8 Jul - Joel Silva",
		},
		{
			navigateTo:
				"https://www.linkedin.com/posts/global-service-corporations_lideranaexa-inovaaexaeto-tecnologia-activity-7215021113687326720-4s2G?utm_source=share&utm_medium=member_desktop",
			img: sukete,
			title:
				"Temos o prazer de anunciar o Eng. Matuzalem Sukete, como Orador a Business After Work - Global SC.",
			description: `Matuzalem Sukete, Director Geral da AES - Angola Environmental Serviços, é formado em Engenharia Electrotécnica, e Mestre em Supply Chain Management (Cadeia de Aprovisionamento). Trabalha para AES há mais de 15 anos, onde ocupou vários cargos, incluindo, assistente de operações, Diretor de operações e Diretor Geral adjunto. Hoje ocupa a função de Diretor Geral. 
Matuzalém também trabalhou em empresas como: Empresa Nacional de Electricidade e Global SantaFe`,
			data: "6 Jul - Aguinaldo Quissanga",
		},
		{
			navigateTo:
				"https://www.linkedin.com/posts/global-service-corporations_lideranaexa-inovaaexaeto-tecnologia-activity-7214878226702082050-puSQ?utm_source=share&utm_medium=member_desktop",
			img: academiaBai,
			title: `Estamos entusiasmados em apresentar a Academia BAI como nosso parceiro para o Business After Work edição Lider Tech!`,
			description: `Já no dia 18 de julho 🗓️ no HCTA📍 se tomará a oportunidade perfeita para o estudo das Lideranças atuais e a eficácia e implementação da Liderança Tech nas corporações.`,
			data: "5 Jul - Lucas Kunjuca",
		},
	]

	return (
		<section className="w-full flex flex-col justify-center gap-12 py-24 max-sm:py-12 items-center z-40" id="blog">
			<div className="w-full flex flex-col items-center gap-5 justify-center">
				<p className="font-bold text-4xl max-sm:text-2xl">Feed de Notícias</p>
				<p className="text-[#c5c5c5] max-sm:text-sm text-center max-sm:w-2/3">
					Esteja atualizado sobre todas as novidades da Global Services
					Corporation
				</p>
			</div>

			<div className="w-4/5 flex justify-center items-center gap-2 h-fit">
				{" "}
				<Slider {...settings} className="w-full z-40 flex">
					{cardInfo.map((info, index) => (
						<BlogCard
							key={index}
							img={info.img}
							title={info.title}
							description={info.description}
							data={info.data}
							navigateTo={info.navigateTo}
						/>
					))}
				</Slider>
			</div>
		</section>
	)
}

export default Blog
