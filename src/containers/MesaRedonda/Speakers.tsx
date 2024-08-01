import { fundoWhite } from "../../assets/mesa-redonda"
import {
	AdrianoBastos,
	DuraoBarroso,
	NJAyuk,
	OrlandoMata,
} from "../../assets/mesa-redonda/speakers"

const Speakers: React.FC = () => {
	const cardInfo = [
		{
			imagem: DuraoBarroso,
			name: "Durão Barroso",
			title: "Ex-Primeiro  Ministro de Portugal",
		},
		{
			imagem: OrlandoMata,
			name: "Orlando Mata",
			title: `Reitor da Universidade Mandume Ya Ndemufayo de Angola e Presidente da AULP`,
		},
		{
			imagem: AdrianoBastos,
			name: "Adriano Bastos",
			title: `CEO da Galp Vice-Presidente da BP & Grupo Azule Energy`,
		},
		{
			imagem: NJAyuk,
			name: "NJ Ayuk JD MBA",
			title: `Executive Chairman at African Energy Chamber`,
		},
	]

	return (
		<section className="relative h-[45rem] max-lg:h-[120rem]">
			<img
				src={fundoWhite}
				alt=""
				className="w-full h-full object-cover opacity-50"
			/>
			<div className="absolute top-0 flex flex-col w-full py-20 justify-around items-center lg:px-24 max-lg:px-12 h-full">
				<p className="font-extrabold text-3xl text-[#FF9800] text-center max-lg:text-2xl">
					Speakers do Evento
				</p>
				<div className="flex pb-4 ">
					<div className=" items-center justify-center grid grid-cols-4 gap-10 max-lg:grid-cols-1">
						{cardInfo.map((info, index) => (
							<img
								key={index}
								src={info.imagem}
								alt=""
								className="object-contain hover:-translate-y-3 transition-all duration-700 hover:shadow-2xl shadow-md"
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Speakers
