import { aboutEvent } from "../../assets"
import { fundoWhite } from "../../assets/mesa-redonda"

const OQueEsperar: React.FC = () => {
	return (
		<div className="w-full justify-center flex items-center flex-col relative h-[43rem] max-lg:h-[30rem]">
			<img src={fundoWhite} alt="" className="object-cover w-full h-full" />
			<section className="flex w-full py-20 px-24 gap-16 justify-center items-center absolute top-0 left-0 h-full  max-lg:flex-col max-lg:px-8 max-lg:py-16 ">
				<div className="flex flex-col gap-12 max-lg:gap-4 max-w-[550px]">
					<h2 className="font-extrabold text-3xl text-[0E1937] max-lg:text-2xl max-lg:text-center">
						O que esperar deste evento?
					</h2>
					<p className="text-lg max-lg:text-sm text-justify max-lg:text-center">
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

				<img
					src={aboutEvent}
					alt=""
					className="object-cover h-full lg:max-w-[500px] rounded-md max-lg:hidden "
				/>
			</section>
		</div>
	)
}

export default OQueEsperar
