import {
	aboutEvent,
	agenda,
	participar,
	expor,
	patrocinar,
	speaker,
} from "../../assets"

const AboutEvent: React.FC = () => {
	const cardInfo = [
		{
			imagem: agenda,
			title: "Agenda",
		},
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
			imagem: speaker,
			title: "Speaker",
		},
	]
	return (
		<section className="w-full h-[1049px] gap-20 flex items-center justify-center flex-col">
			<div className="flex gap-16">
				{cardInfo.map((info, index) => (
					<div key={index}>
						<div className="flex flex-col items-center gap-3">
							<img src={info.imagem} alt="" className="h-16 w-16" />
							<p className="font-semibold text-xl text-[#1355E9]">
								{info.title}
							</p>
						</div>
					</div>
				))}
			</div>

			<div className="flex gap-14 h-[530px]">
				<img src={aboutEvent} alt="" />
				<div className="gap-5 flex flex-col">
					<p className="font-semibold text-4xl">Sobre</p>
					<p className="font-semibold text-3xl">Mesa Redonda com os CEO's</p>
					<p className="h-64 w-[534px] text-justify">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
						maxime consequatur reprehenderit tempore ratione, omnis unde
						quisquam iusto nemo nesciunt dolores rem! Numquam culpa quo quas.
						Necessitatibus quo nostrum laudantium. omnis unde quisquam iusto
						nemo nesciunt dolores rem! Numquam culpa quo quas. Necessitatibus
						quo nostrum laudantium. omnis unde quisquam iusto nemo nesciunt
						dolores rem! Numquam culpa quo quas. Necessitatibus quo nostrum
						laudantium.
					</p>
					<a
						href=""
						className="w-56 h-9 bg-[#1355E9] rounded-md text-white font-bold text-sm flex items-center justify-center"
					>
						Participe do evento
					</a>
				</div>
			</div>
		</section>
	)
}

export default AboutEvent
