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
		<section className="flex flex-col w-full py-20 justify-center items-center gap-24">
			<p className="font-extrabold text-3xl text-[#FF9800]">
				Speakers do Evento
			</p>
			<div className="flex pb-4 ">
				<div className="h-[424px] items-center justify-center  flex gap-4">
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
		</section>
	)
}

export default Speakers
