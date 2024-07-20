import { downloadIcon } from "../../assets"

const BaixarAgenda: React.FC = () => {
	return (
		<section className="h-64 text-white flex w-full justify-between bg-[#065CAB] px-52 py-12 items-center">
			<h1 className="font-bold text-3xl">Baixar agenda do evento</h1>

			<a
				href=""
				className="flex bg-[#9E9E9E] text-sm items-center h-11 pr-3 pl-2 rounded-md gap-2 hover:bg-[rgba(53,41,16,0.62)] transition-colors duration-300"
			>
				<img src={downloadIcon} alt="" />
				Clique aqui para o download
			</a>
		</section>
	)
}

export default BaixarAgenda
