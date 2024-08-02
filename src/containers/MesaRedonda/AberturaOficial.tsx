import { fundoBlue, pauloPortasPic } from "../../assets/mesa-redonda"
import pauloPortas from "../../assets/mesa-redonda/aberturaOficial/pauloPortas.png"

const AberturaOficial: React.FC = () => {
	return (
		<section className=" flex justify-center relative max-lg:h-[45rem]">
			<div className="flex flex-col w-full h-full justify-center px-16 gap-8 absolute top-0  max-lg:inset-0 max-lg:items-center max-lg:text-center max-lg:justify-end max-lg:pt-20">
				<div className="flex flex-col gap-4 max-lg:items-center max-lg:text-center">
					<div className="w-full">
						<h1 className="text-4xl max-lg:text-2xl text-[#FF9800] font-extrabold">
							Abertura oficial
						</h1>
						<p className="text-4xl max-lg:text-2xl text-[#FF9800] font-extrabold">
							Novembro de 2024
						</p>
					</div>
					<div className="w-full flex flex-col gap-2">
						<h1 className="text-3xl max-lg:text-xl text-white font-bold">Paulo Portas</h1>
						<p className="max-lg:text-sm text-white font-light w-2/3 max-lg:w-full">
							Ex. Vice-Primeiro Ministro de Portugal
						</p>
					</div>
					<a
						href=""
						className="flex justify-center items-center p-2 w-32 border border-white text-[#FF9800] font-semibold rounded-lg bg-[#ffff] hover:bg-transparent hover:text-[#FF9800] transition-colors duration-300 max-lg:text-sm"
					>
						Ver mais
					</a>
				</div>

				<img src={pauloPortasPic} alt="" className="object-contain lg:hidden" />
			</div>
			<img
				src={pauloPortas}
				alt=""
				className="w-full object-cover max-lg:hidden"
			/>
			<img src={fundoBlue} alt="" className="w-full object-cover lg:hidden" />
		</section>
	)
}

export default AberturaOficial
