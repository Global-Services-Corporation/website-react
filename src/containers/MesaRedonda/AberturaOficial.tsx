import pauloPortas from "../../assets/mesa-redonda/aberturaOficial/pauloPortas.png"

const AberturaOficial: React.FC = () => {
	return (
		<section className=" flex justify-center relative">
			<div className="flex flex-col w- h-full justify-center px-12 gap-8 absolute top-0 right-1/2">
				<div className="w-full">
					<h1 className="text-4xl text-[#FF9800] font-extrabold">
						Abertura oficial
					</h1>
					<p className="text-4xl text-[#FF9800] font-extrabold">Novembro de 2024</p>
				</div>
				<div className="w-full flex flex-col gap-2">
					<h1 className="text-3xl text-white font-bold">Paulo Portas</h1>
					<p className="text- text-white font-light w-2/3">
						Ex. Vice-Primeiro Ministro de Portugal
					</p>
				</div>
				<a
					href=""
					className="flex justify-center items-center p-2 w-32 border border-white text-[#FF9800] font-semibold rounded-xl bg-[#ffff] hover:bg-transparent hover:text-[#FF9800] transition-colors duration-300"
				>
					Ver mais
				</a>
			</div>

			<img src={pauloPortas} alt="" className="w-full object-cover" />
		</section>
	)
}

export default AberturaOficial
