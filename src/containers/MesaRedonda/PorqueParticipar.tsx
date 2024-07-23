import { porqueParticipar } from "../../assets";

const PorqueParticipar: React.FC = () => {
	return (
		<section className="w-full  flex gap-20 justify-center items-center py-16 px-10">
			<div className="flex flex-col p-11 gap-8 w-[530px] ">
				<h1 className="font-bold text-3xl">Por que participar?</h1>
				<p className="text-lg">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
					maxime consequatur reprehenderit tempore ratione, omnis unde quisquam
					iusto nemo nesciunt dolores rem! Numquam culpa quo quas.
					Necessitatibus quo nostrum laudantium. omnis unde quisquam iusto nemo
					nesciunt dolores rem! Numquam culpa quo quas. Necessitatibus quo
					nostrum laudantium. omnis unde quisquam iusto nemo nesciunt dolores
					rem! Numquam culpa quo quas. Necessitatibus quo nostrum laudantium.
				</p>
			</div>
			<img src={porqueParticipar} alt="" className="object-cover w-[650px] h-[530px] rounded-2xl" />
		</section>
	)
}

export default PorqueParticipar;
