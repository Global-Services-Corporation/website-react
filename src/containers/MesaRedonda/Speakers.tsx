import { mesaRedonda } from "../../assets"
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
		<section className="flex flex-col w-full p-6 justify-center items-center gap-24 h-[750px] bg-[#6c6c6c32]">
			<p className="font-semibold text-3xl">Speakers do Evento</p>
			<div className="flex pb-4 ">
				<div className="h-[424px] items-center justify-center w-[1314px] flex gap-4">
					{cardInfo.map((info, index) => (
						<div
							key={index}
							className="h-[400px] w-[350px] relative rounded-lg bg-[#065CAB] flex items-end justify-center"
						>
							<div className="flex flex-col absolute top-0 left-0 w-full text-[#ffff]">
								<div className="flex justify-between py-2 pr-4">
									<img src={mesaRedonda} alt="" className="w-20" />

									<div className="flex flex-col  py-2">
										<p className="font-semibold text-sm">
											Nov. 2024 - Luanda, Angola.
										</p>
										<p className="text-xs">Hotel de convenções Talatona</p>
									</div>
								</div>

								<p className="text-[10px] ml-4 w-[90px]">
									Leadership innovation Tech In Oil Gas Sector
								</p>
							</div>

							<div className="bg-[#ffffff] h-1/2 w-full rounded-b-lg relative">
								<img
									src={info.imagem}
									alt=""
									className="absolute bottom-0 right-0 rounded-br-lg"
								/>
								<p className="text-3xl font-bold w-32 absolute -top-9 left-3 text-[#D7AF26]">
									{info.name}
								</p>

								<p className="w-32 mt-9 ml-4 text-[10px]">{info.title}</p>

								<button className="text-[10px] border rounded-lg border-[#000000] h-6 px-2 absolute bottom-4 left-4 flex justify-center items-center hover:bg-[#000000] hover:text-white transition-colors duration-300">
									Ver biografia
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Speakers
