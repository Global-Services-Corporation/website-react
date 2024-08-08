import { fundoWhite } from "../../assets/mesa-redonda"

const PorquePatrocinar: React.FC = () => {
	return (
		<section className="relative flex w-full bg-[#CCCCCC] h-[45rem]">
			<img src={fundoWhite} alt="" className="w-full h-full object-cover opacity-70	" />
			<div className="absolute w-full h-full top-0 left-0 flex py-20 px-24 gap-16 justify-center items-center max-lg:flex-col max-lg:px-8 max-lg:py-16">
				<iframe
					src="https://youtube.com/embed/hYnsGwY_f2U?autoplay=0&controls=1&mute=1&loop=1&playlist=hYnsGwY_f2U&modestbranding=1&showinfo=0&iv_load_policy=3"
					title="YouTube video player"
					className="object-cover lg:min-h-full lg:min-w-[550px] lg:h-[500px] rounded-md max-lg:h-[500px] max-lg:w-full"
					frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen
				/>

				<div className="flex flex-col gap-9 max-lg:gap-4 w-[550px] h-full justify-center max-lg:w-full">
					<h1 className="font-extrabold text-3xl text-[#010D49] max-lg:text-2xl max-lg:text-center">
						Porque patrocinar e expor?
					</h1>

					<p className="text-lg text-justify text-[#010D49] max-lg:text-sm max-lg:text-center">
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
