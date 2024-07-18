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
		<section className="w-full h-[1000px] justify-between flex items-center flex-col px-16 py-28">
			<div className="flex gap-16">
				{cardInfo.map((info, index) => (
					<a key={index} href="">
						<div className="flex flex-col items-center gap-3">
							<img src={info.imagem} alt="" className="h-16 w-16" />
							<p className="font-semibold text-xl text-[#1355E9]">
								{info.title}
							</p>
						</div>
					</a>
				))}
			</div>

			<div className="flex justify-between h-[530px] w-full ">
				<img src={aboutEvent} alt="" className="object-cover w-[650px] h-full rounded-2xl" />
				<div className="gap-5 flex flex-col h-full justify-between">
					<div className="flex flex-col gap-3">
						<h1 className="font-semibold text-3xl">Sobre</h1>
						<h2 className="font-semibold text-3xl">Mesa Redonda com CEO's</h2>
						<p className="h-64 w-[534px] text-justify">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
							Explicabo maxime consequatur reprehenderit tempore ratione, omnis
							unde quisquam iusto nemo nesciunt dolores rem! Numquam culpa quo
							quas. Necessitatibus quo nostrum laudantium. omnis unde quisquam
							iusto nemo nesciunt dolores rem! Numquam culpa quo quas.
							Necessitatibus quo nostrum laudantium. omnis unde quisquam iusto
							nemo nesciunt dolores rem! Numquam culpa quo quas. Necessitatibus
							quo nostrum laudantium.
						</p>
					</div>
					<a
						href=""
						className="w-56 h-9 bg-[#1355E9] rounded-md text-white font-bold text-sm flex items-center justify-center mb-10"
					>
						Participe do evento
					</a>
				</div>
			</div>
		</section>
	)
}

export default AboutEvent
