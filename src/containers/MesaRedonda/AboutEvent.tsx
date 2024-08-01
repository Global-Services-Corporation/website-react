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
		<section className="w-full justify-center flex items-center flex-col relative h-[65rem]">
			<img src={fundoWhite} alt="" className="object-cover w-full h-full" />
			<div className="absolute top-0 left-0 w-full h-full">
				<div className="w-full relative h-56">
					<img src={fundoBlue} alt="" className=" w-full h-full object-cover" />

					<div className="flex justify-around w-full px-24 py-14 absolute top-0 left-0">
						{cardInfo.map((info, index) => (
							<a key={index} href="" className="group ">
								<div className="flex flex-col items-center gap-3">
									<img src={info.imagem} alt="" className="h-15 w-16 " />
									<p className="font-semibold text-xl text-white group-hover:text-[#FF9800]">
										{info.title}
									</p>
								</div>
							</a>
						))}
					</div>
				</div>

				<div className="flex justify-between w-full py-20 px-24  gap-10">
					<img
						src={aboutEvent}
						alt=""
						className="object-cover min-h-full min-w-[550px] rounded-md"
					/>

					<div className="gap-10 flex flex-col h-full w-2/4 justify-center py-12 max-w-[550px]">
						<div className="flex flex-col gap-3 text-[#010D49] ">
							<h1 className="text-3xl font-black">Sobre</h1>
							<h2 className="font-semibold text-3xl">Mesa Redonda com CEO's</h2>
							<p className="text-xl text-justify">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Explicabo maxime consequatur reprehenderit tempore ratione,
								omnis unde quisquam iusto nemo nesciunt dolores rem! Numquam
								culpa quo quas. Necessitatibus quo nostrum laudantium. omnis
								unde quisquam iusto nemo nesciunt dolores rem! Numquam culpa quo
								quas. Necessitatibus quo nostrum laudantium. omnis unde quisquam
								iusto nemo nesciunt dolores rem! Numquam culpa quo quas.
								Necessitatibus quo nostrum laudantium.
							</p>
						</div>
						<a
							href=""
							className="w-56 hover:bg-transparent hover:text-[#FF9800] bg-[#FF9800] border-[#FF9800] hover:border transition-colors duration-300 rounded-md text-white font-bold flex items-center justify-center py-2.5 px-6 h-12"
						>
							Participe do evento
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutEvent
