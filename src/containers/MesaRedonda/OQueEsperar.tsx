import { aboutEvent } from "../../assets"

const OQueEsperar: React.FC = () => {
	return (
		<section className="flex w-full py-20 px-24 gap-12 justify-between items-center bg-[rgba(204,204,204,0.2)]">
			<div className="flex flex-col gap-12 max-w-[550px]">
				<h2 className="font-extrabold text-3xl text-[#FF9800]">
					O que esperar deste evento?
				</h2>
				<p className="text-xl text-justify">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
					maxime consequatur reprehenderit tempore ratione, omnis unde quisquam
					iusto nemo nesciunt dolores rem! Numquam culpa quo quas.
					Necessitatibus quo nostrum laudantium. omnis unde quisquam iusto nemo
					nesciunt dolores rem! Numquam culpa quo quas. Necessitatibus quo
					nostrum laudantium. omnis unde quisquam iusto nemo nesciunt dolores
					rem! Numquam culpa quo quas. Necessitatibus quo nostrum laudantium.
				</p>
			</div>

			<img
				src={aboutEvent}
				alt=""
				className="object-cover min-h-full min-w-[550px] rounded-md"
			/>
		</section>
	)
}

export default OQueEsperar
