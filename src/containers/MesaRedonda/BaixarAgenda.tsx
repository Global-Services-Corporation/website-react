import { downloadIcon } from "../../assets"

const BaixarAgenda: React.FC = () => {
	return (
		<section className="h-64 text-white flex w-full justify-between bg-gradient-to-r from-[#010D29] to-[#032087] px-52 py-12 items-center">
			<h1 className="font-bold text-3xl">
				Baixar <span className="text-[#FF9800]">agenda</span> do evento
			</h1>

			<a
				href=""
				className="flex hover:border border-[#FF9800] hover:bg-transparent text-sm items-center h-11 px-4 rounded-md gap-2 bg-[#FF9800] transition-colors duration-300"
			>
				<img src={downloadIcon} alt="" />
				Clique aqui para o download
			</a>
		</section>
	)
}

export default BaixarAgenda
