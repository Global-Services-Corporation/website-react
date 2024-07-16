import { porqueParticipar } from "../../assets"

const PorqueParticipar: React.FC = () => {
	return (
		<section className="w-full h-[800px] flex gap-20 justify-center p-16">
			<div className="flex flex-col p-11 gap-12 ">
				<p className="font-bold text-4xl">Porquê participar?</p>
				<p className="text-xl">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
					maxime consequatur reprehenderit tempore ratione, omnis unde quisquam
					iusto nemo nesciunt dolores rem! Numquam culpa quo quas.
					Necessitatibus quo nostrum laudantium. omnis unde quisquam iusto nemo
					nesciunt dolores rem! Numquam culpa quo quas. Necessitatibus quo
					nostrum laudantium. omnis unde quisquam iusto nemo nesciunt dolores
					rem! Numquam culpa quo quas. Necessitatibus quo nostrum laudantium.
				</p>
				<p className="text-xl">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
					maxime consequatur reprehenderit tempore ratione, omnis unde quisquam
					iusto nemo nesciunt dolores rem! Numquam culpa quo quas.
					Necessitatibus quo nostrum laudantium. omnis unde quisquam iusto nemo
					nesciunt dolores rem! Numquam culpa quo quas. Necessitatibus quo
					nostrum laudantium.
				</p>
			</div>
			<img src={porqueParticipar} alt="" className="h-[650px]" />
		</section>
	)
}

export default PorqueParticipar
