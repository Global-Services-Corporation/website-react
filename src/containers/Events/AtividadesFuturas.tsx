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
			website: "",
		},
		{
			imagem: FIB,
			title: "Business After Work",
			description:
				"Write an amazing description in this dedicated card section. Each word counts.Holles an amazing description in this dedicated card section. Each word counts.An amazing description in this dedicated card section. Each word counts.Write an amazing description in this dedicated card section. Each word counts.",
			Data: "10/05/2024",
			tipo: "Publico",
			website: "https://businessafterwork.globalsc.ao",
		},
	]

	function limitText(text: string, limit: number) {
		if (text.length <= limit) return text
		else return text.substring(0, limit) + "..."
	}
	return (
		<div className="w-full flex flex-col justify-center items-center gap-8 px-[100px] py-11">
			<div className="flex justify-center w-full items-center">
				<h1 className="text-[45px] max-2xl:text-[35px] max-sm:text-[25px] font-bold">
					Atividades Futuras
				</h1>
				<form action="" className=" gap-3 hidden">
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
					<div className="flex items-center ">
						<div
							key={index}
							className="flex flex-col items-center max-sm:w-[370px] max-2xl:w-[300px] w-[350px] max-2xl:h-[450px] h-[500px]  rounded-[16px] bg-[#1B223C] max-2xl:gap-0"
						>
							<img
								src={info.imagem}
								alt=""
								className="object-cover w-full h-56 rounded-[16px]"
							/>
							<div className="flex flex-col h-[300px] px-7 py-5 gap-2 justify-between">
								<div className="flex flex-col gap-2">
									<p className="text-white text-[22px] max-2xl:text-[18px] font-bold">
										{info.title}
									</p>
									<p className="text-xs text-[#c5c5c5]">
										{limitText(info.description, 150)}
									</p>
								</div>

								<div className="flex flex-col gap-2">
									<div className="flex justify-between items-center">
										<p className="bg-[#1c1c1c5e] text-xs flex justify-center items-center rounded-[200px] w-20 h-9">
											{info.tipo}
										</p>

										<a
											href={info.website}
											className="hover:bg-white hover:text-black text-white bg-[#30CBE8] flex justify-center items-center font-semibold text-xs rounded-full w-28 h-8 transition-colors duration-300 "
										>
											Saiba mais
										</a>
									</div>
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
