import { OQueEsperarImg } from "../../assets"

const OQueEsperar: React.FC = () => {
	return (
		<section className="h-[650px] bg-[#6c6c6c32] text-white flex justify-between gap-36 py-10 px-36 items-center">
			<img
				src={OQueEsperarImg}
				alt=""
				className="object-cover w-[650px] h-[530px] rounded-2xl"
			/>
			<div className="flex flex-col gap-9 w-[550px] ">
				<h1 className="font-semibold text-3xl text-[#FEC503]">
					O que esperar deste evento?
				</h1>

				<p className="text-black">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
					maxime consequatur reprehenderit tempore ratione, omnis unde quisquam
					iusto nemo nesciunt dolores rem! Numquam culpa quo quas.
					Necessitatibus quo nostrum laudantium. omnis unde quisquam iusto nemo
					nesciunt dolores rem! Numquam culpa quo quas. Necessitatibus quo
					nostrum laudantium. omnis unde quisquam iusto nemo nesciunt dolores
					rem! Numquam culpa quo quas. Necessitatibus quo nostrum laudantium.
				</p>
			</div>
		</section>
	)
}

export default OQueEsperar
