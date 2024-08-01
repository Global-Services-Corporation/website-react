import { fundoWhite } from "../../assets/mesa-redonda"

const PorquePatrocinar: React.FC = () => {
	return (
		<section className="relative flex w-full bg-[#CCCCCC] h-[45rem]">
			<img src={fundoWhite} alt="" className="w-full h-full object-cover opacity-70	" />
			<div className="absolute w-full h-full top-0 left-0 flex py-20 px-24 gap-12 justify-between items-center">
				<iframe
					src="https://www.youtube.com/embed/v5BqqI3I95s?autoplay=1&controls=0&mute=1&loop=1&playlist=v5BqqI3I95s"
					title="YouTube video player"
					className="object-cover min-h-full min-w-[650px] pointer-events-none h-[550px] rounded-md"
					frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen
				/>

				<div className="flex flex-col gap-9 w-[550px] h-full justify-center">
					<h1 className="font-extrabold text-3xl text-[#010D49]">
						Porque patrocinar e expor?
					</h1>

					<p className="text-xl text-justify text-[#010D49]">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
						maxime consequatur reprehenderit tempore ratione, omnis unde
						quisquam iusto nemo nesciunt dolores rem! Numquam culpa quo quas.
						Necessitatibus quo nostrum laudantium. omnis unde quisquam iusto
						nemo nesciunt dolores rem! Numquam culpa quo quas. Necessitatibus
						quo nostrum laudantium. omnis unde quisquam iusto nemo nesciunt
						dolores rem! Numquam culpa quo quas. Necessitatibus quo nostrum
						laudantium.
					</p>
				</div>
			</div>
		</section>
	)
}

export default PorquePatrocinar
