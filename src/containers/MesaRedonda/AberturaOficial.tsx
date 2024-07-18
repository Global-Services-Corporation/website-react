import pauloPortas from "../../assets/mesa-redonda/aberturaOficial/pauloPortas.png"

const AberturaOficial: React.FC = () => {
	return (
		<section className="bg-[#0000FF] flex h-[650px] gap-24 px-40 pt-12 ">
			<div className="flex flex-col w-[400px] h-full justify-center px-12 gap-5">
				<h1 className="text-4xl text-[#D7AF26] font-bold">Abertura oficial</h1>
				<p className="text-lg text-white font-medium">Novembro de 2024</p>
				<h1 className="text-4xl text-[#D7AF26] font-bold">Paulo Portas</h1>
				<p
					className="
				text-lg text-white font-medium"
				>
					Ex. Vice-Primeiro Ministro de Portugal
				</p>

				<a
					href=""
					className="flex justify-center items-center p-3 w-36 border border-white text-white font-semibold rounded-lg hover:bg-[#ffff] hover:text-[#0000FF] transition-colors duration-300"
				>
					Ver biografia
				</a>
			</div>

			<img src={pauloPortas} alt="" className="w-[500px] object-cover"/>
		</section>
	)
}

export default AberturaOficial
