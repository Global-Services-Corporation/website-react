import { downloadIcon } from "../../assets"
import { fundoBlue } from "../../assets/mesa-redonda"

const BaixarAgenda: React.FC = () => {
	return (
		<section className="relative h-64 max-lg:h-48 text-white flex w-full justify-between bg-gradient-to-r from-[#010D29] to-[#032087] items-center ">
			<img src={fundoBlue} alt="" className="w-full h-full" />
			<div className="absolute w-full h-full text-white flex justify-between max-lg:flex-col max-lg:justify-around lg:px-52 lg:py-12 max-lg:py-12 items-center">
				<h1 className="font-bold text-3xl max-lg:text-xl">
					Baixar <span className="text-[#FF9800]">agenda</span> do evento
				</h1>

				<a
					href=""
					className="animate-pulse hover:animate-none flex max-lg:text-xs  text-sm items-center h-11 lg:px-4 max-lg:px-2 rounded-md gap-2 bg-[#FF9800] transition-all duration-300"
				>
					<img src={downloadIcon} alt="" className="w-5"/>
					Clique aqui para o download
				</a>
			</div>
		</section>
	)
}

export default BaixarAgenda
