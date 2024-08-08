import { Link } from "react-router-dom"
import { aboutEvent } from "../../assets"
import { fundoBlue, fundoWhite } from "../../assets/mesa-redonda"
import {
	participar,
	expor,
	patrocinar,
	speakers,
} from "../../assets/mesa-redonda/aboutEvent"

const AboutEvent: React.FC = () => {
	const cardInfo = [
		{
			imagem: participar,
			title: "Participar",
		},
		{
			imagem: expor,
			title: "Expor",
		},
		{
			imagem: patrocinar,
			title: "Patrocinar",
		},
		{
			imagem: speakers,
			title: "Speaker",
		},
	]
	return (
		<section className="w-full justify-center flex items-center flex-col relative h-[56rem] max-lg:h-[45rem]">
			<img src={fundoWhite} alt="" className="object-cover w-full h-full" />
			<div className="absolute top-0 left-0 w-full h-full">
				<div className="w-full relative max-lg:h-44 h-56">
					<img src={fundoBlue} alt="" className=" w-full h-full object-cover" />

					<div className="flex justify-around items-center w-full lg:px-24 lg:py-14 absolute top-0 left-0 max-lg:px-8 max-lg:py-16">
						{cardInfo.map((info, index) => (
							<a key={index} href="" className="group w-full">
								<div className="flex flex-col items-center gap-3">
									<img
										src={info.imagem}
										alt=""
										className="h-15 w-16 max-lg:w-5"
									/>
									<p className="font-semibold text-xl max-lg:text-sm text-white group-hover:text-[#FF9800]">
										{info.title}
									</p>
								</div>
							</a>
						))}
					</div>
				</div>

				<div className="flex justify-center w-full py-20 px-24 gap-16	  max-lg:flex-col max-lg:px-8 max-lg:py-16 ">
					<img
						src={aboutEvent}
						alt=""
						className="object-cover h-full lg:max-w-[500px] rounded-md max-lg:hidden "
					/>

					<div className="gap-10 flex flex-col h-full w-2/4 justify-center max-lg:gap-4 max-lg:justify-center lg:py-0 lg:max-w-[550px] max-lg:w-full max-lg:text-center max-lg:items-center">
						<div className="flex flex-col gap-3 text-[#010D49] max-lg:text-center">
							<h1 className="text-3xl max-lg:text-2xl font-black">Sobre</h1>
							<h2 className="font-semibold text-3xl max-lg:text-xl">
								Mesa Redonda com CEO's
							</h2>
							<p className="text-lg max-lg:text-sm text-justify max-lg:text-center ">
								Este tema explora como líderes visionários estão conduzindo a
								transformação do setor por meio de estratégias inovadoras, desde
								a adoção de novas tecnologias até a implementação de práticas
								sustentáveis. A discussão abordará as melhores práticas em
								gestão de talentos, a importância da diversidade na liderança e
								como a inovação pode ser o motor para enfrentar os desafios do
								futuro, desde a transição energética até a digitalização dos
								processos.
							</p>
						</div>
						<Link
							to="/personal-form"
							className="w-56 max-lg:w-48 hover:bg-transparent hover:text-[#FF9800] bg-[#FF9800] border-[#FF9800] hover:border transition-colors duration-300 rounded-md text-white font-bold flex items-center justify-center py-2.5 lg:px-6 max-lg:px-4 h-12 max-lg:text-sm"
						>
							Participe do evento
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutEvent
