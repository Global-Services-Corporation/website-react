import { FIB } from "../../assets"

const AtividadesFuturas: React.FC = () => {
	const cardInfo = [
		{
			imagem: FIB,
			title: "Mesa Redonda com os Ceo's",
			description:
				"Write an amazing description in this dedicated card section. Each word counts.Holles an amazing description in this dedicated card section. Each word counts.An amazing description in this dedicated card section. Each word counts.Write an amazing description in this dedicated card section. Each word counts.",
			Data: "29/04/2024",
			tipo: "Privado",
		},
		{
			imagem: FIB,
			title: "Business After Work",
			description:
				"Write an amazing description in this dedicated card section. Each word counts.Holles an amazing description in this dedicated card section. Each word counts.An amazing description in this dedicated card section. Each word counts.Write an amazing description in this dedicated card section. Each word counts.",
			Data: "10/05/2024",
			tipo: "Publico",
		},
	]

	function limitText(text: string, limit: number) {
		if (text.length <= limit) return text
		else return text.substring(0, limit) + "..."
	}
	return (
		<div className="w-full flex flex-col justify-center items-center gap-8 px-24 h-[650px]">
			<div className="flex gap-96">
				<h1 className="text-[45px] max-2xl:text-[35px] max-sm:text-[25px] font-bold">
					Atividades Futuras
				</h1>
				<form action="" className="flex gap-3">
					<input
						type="date"
						name=""
						id=""
						className="bg-[#00A7E1] w-40 h-11 rounded-3xl flex justify-center"
					/>
					<select
						name="Categoria"
						id=""
						className="w-40 h-11 rounded-3xl bg-[#1C1C1C]"
					>
						<option value="corporate">Corporativo</option>
						<option value="Party">Festa</option>
						<option value="feira">Feira</option>
					</select>
				</form>
			</div>

			<div className="grid grid-cols-3 max-lg:grid-cols-1 gap-x-4 gap-y-4 w-full">
				{cardInfo.map((info, index) => (
					<div className="flex items-center justify-center">
						<div
							key={index}
							className="flex flex-col items-center max-sm:w-[370px] max-2xl:w-[300px] w-[350px] max-2xl:h-[450px] h-[500px]  rounded-[16px] bg-[#1B223C] max-2xl:gap-0"
						>
							<img
								src={info.imagem}
								alt=""
								className="w-full rounded-2xl"
							/>
							<div className="h-80 w-full flex flex-col p-3 gap-4">
								<p className="text-white text-[22px] max-2xl:text-[18px] font-bold">
									{info.title}
								</p>
								<p className="text-[#425466] text-xs">
									{limitText(info.description, 150)}
								</p>
								<p className="font-bold text-xs">
									{" "}
									Data:{" "}
									<span className=" text-transparent bg-gradient-to-r from-[#30CBE8] to-[#FFF] bg-clip-text">
										{info.Data}
									</span>{" "}
								</p>
								<div className="flex justify-between">
									<a
										href="#"
										className="bg-[#00A7E1] flex justify-center items-center font-semibold text-xs rounded-md w-28 h-9 "
									>
										Saiba mais
									</a>
									<p className="bg-[#1C1C1C] text-xs flex justify-center items-center rounded-[200px] w-20 h-9">
										{info.tipo}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default AtividadesFuturas
