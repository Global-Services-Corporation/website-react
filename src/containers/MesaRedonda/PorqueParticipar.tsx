import { porqueParticipar } from "../../assets"
import { fundoWhite } from "../../assets/mesa-redonda"

const PorqueParticipar: React.FC = () => {
	return (
		<div className="w-full justify-center flex items-center flex-col relative h-[50rem]">
			<img src={fundoWhite} alt="" className="object-cover w-full h-full" />
			<section className="flex w-full py-20 px-24 gap-12 justify-between items-center absolute top-0 left-0 h-full">
				<div className="flex flex-col gap-12 max-w-[550px]">
					<h2 className="font-extrabold text-3xl text-[#FF9800]">
						Por que participar?
					</h2>
					<p className="text-xl text-justify">
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
					src={porqueParticipar}
					alt=""
					className="object-cover min-h-full min-w-[550px] rounded-md"
				/>
			</section>
		</div>
	)
}

export default PorqueParticipar
