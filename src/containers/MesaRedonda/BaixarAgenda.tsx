import { downloadIcon } from "../../assets"
import { fundoBlue } from "../../assets/mesa-redonda"

const BaixarAgenda: React.FC = () => {
	return (
		<section className="relative h-64 text-white flex w-full justify-between bg-gradient-to-r from-[#010D29] to-[#032087] items-center">
			<img src={fundoBlue} alt="" className="w-full h-full" />
			<div className="absolute w-full h-full text-white flex justify-between px-52 py-12 items-center">
				<h1 className="font-bold text-3xl">
					Baixar <span className="text-[#FF9800]">agenda</span> do evento
				</h1>

				<a
					href=""
					className="animate-pulse hover:animate-none flex   text-sm items-center h-11 px-4 rounded-md gap-2 bg-[#FF9800] transition-all duration-300"
				>
					<img src={downloadIcon} alt="" />
					Clique aqui para o download
				</a>
			</div>
		</section>
	)
}

export default BaixarAgenda
