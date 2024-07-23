import { AdrianoBastos } from "../../assets/mesa-redonda/speakers"

const Speakers: React.FC = () => {
	const cardInfo = [
		{
			imagem: "",
			title: "",
		},
		{
			imagem: "",
			title: "",
		},
		{
			imagem: "",
			title: "",
		},
		{
			imagem: "",
			title: "",
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
							className="h-[400px] w-[335px] relative rounded-lg"
						>
							<p>{info.title}</p>
							<p>{info.imagem}</p>
							<img
								src={AdrianoBastos}
								alt=""
								className="absolute top-0 left-0 w-full h-full"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Speakers
