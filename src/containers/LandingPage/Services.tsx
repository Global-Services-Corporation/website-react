import { Link } from "react-router-dom"
import { seguros, eventosicon } from "../../assets"

const Services: React.FC = () => {
	const cardInfo = [
		{
			icon: seguros,
			title: "Seguros",
			description: "Solicite já uma proposta.",
			buttonTitle: "Solicitar",
			link: "#",
		},
		{
			icon: eventosicon,
			title: "Eventos",
			description: "Começa aderindo o serviço.",
			buttonTitle: "Aderir",
			link: "/events",
		},
	]

	return (
		<section className="w-full pb-20 pt-12 max-2xl:pb-10 relative flex flex-col gap-12 z-40 bg-gradient-to-t from-[#e2e2e2] to-[#ffffff]">
			<p className="font-bold max-sm:text-2xl text-4xl ml-36 max-sm:ml-8">
				Adira já aos nossos serviços!
			</p>

			<div className="w-full h-full flex gap-16 lg:px-28 max-lg:px-8 overflow-x-auto">
				{cardInfo.map((info, index) => (
					<div
						key={index}
						className="min-w-[363px] min-h-[187px] flex relative p-8 bg-gradient-to-t from-[#F7F7F8] to-[#ffffff] rounded-[24px] border border-[#00C7FFeb]"
					>
						<img src={info.icon} alt="" className="absolute object-none" />
						<div className="flex flex-col absolute start-28">
							<p className="text-[#00C7FF] font-semibold text-[20.88px]">
								{info.title}
							</p>
							<p className="text-[#000000] text-[16.71px]">
								{info.description}
							</p>
						</div>

						<Link
							to={info.link}
							className="bg-[#00C7FF] hover:bg-[#0C2A42] text-white
               w-[116px] h-[39px] end-10 bottom-8 absolute rounded-[8px] font-semibold transition-colors flex justify-center items-center duration-700"
						>
							{info.buttonTitle}
						</Link>
					</div>
				))}
			</div>
		</section>
	)
}

export default Services
