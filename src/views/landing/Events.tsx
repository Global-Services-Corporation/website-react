import BannerBaw from "../../containers/LandingPage/BannerBaws"
import AtividadesRecentes from "../../containers/InfoPageEvent/AtividadesRecentes"
import {  FIB } from "../../assets"

const Events: React.FC = () => {
	const cardInfo = [
		{
		  imagem: FIB,
		  title: "Mesa Redonda com os Ceo's",
		  description: "Write an amazing description in this dedicated card section. Each word counts.Holles an amazing description in this dedicated card section. Each word counts.An amazing description in this dedicated card section. Each word counts.Write an amazing description in this dedicated card section. Each word counts.",
		  Data: "29/04/2024",
		  tipo: "Privado"
		},
		{
			imagem: FIB,
			title: "Business After Work",
			description: "Write an amazing description in this dedicated card section. Each word counts.Holles an amazing description in this dedicated card section. Each word counts.An amazing description in this dedicated card section. Each word counts.Write an amazing description in this dedicated card section. Each word counts.",
			Data: "10/05/2024",
			tipo: "Publico"
		  },
		  {
			imagem: FIB,
			title: "Business After Work",
			description: "Write an amazing description in this dedicated card section. Each word counts.Holles an amazing description in this dedicated card section. Each word counts.An amazing description in this dedicated card section. Each word counts.Write an amazing description in this dedicated card section. Each word counts.",
			Data: "10/05/2024",
			tipo: "Publico"
		  },
		  {
			imagem: FIB,
			title: "Mesa Redonda com os Ceo's",
			description: "Write an amazing description in this dedicated card section. Each word counts.Holles an amazing description in this dedicated card section. Each word counts.An amazing description in this dedicated card section. Each word counts.Write an amazing description in this dedicated card section. Each word counts.",
			Data: "29/04/2024",
			tipo: "Privado"
		  },
		  {
			  imagem: FIB,
			  title: "Business After Work",
			  description: "Write an amazing description in this dedicated card section. Each word counts.Holles an amazing description in this dedicated card section. Each word counts.An amazing description in this dedicated card section. Each word counts.Write an amazing description in this dedicated card section. Each word counts.",
			  Data: "10/05/2024",
			  tipo: "Publico"
			},
			{
			  imagem: FIB,
			  title: "Business After Work",
			  description: "Write an amazing description in this dedicated card section. Each word counts.Holles an amazing description in this dedicated card section. Each word counts.An amazing description in this dedicated card section. Each word counts.Write an amazing description in this dedicated card section. Each word counts.",
			  Data: "10/05/2024",
			  tipo: "Publico"
			},
		
	  ];
	return (
		<main className="bg-[#001032] text-white">
			<BannerBaw/>
			<AtividadesRecentes/>
			<div className="w-full flex flex-col justify-center items-center h-[1200px] gap-8">
				<div className="flex gap-96">
				<h1 className=" font-bold text-4xl">Atividades Futuras</h1>
				<form action="" className="flex gap-3">
					<input type="date" name="" id="" className="bg-[#00A7E1] w-40 h-11 rounded-3xl flex justify-center" />
					<select name="Categoria" id="" className="w-40 h-11 rounded-3xl bg-[#1C1C1C]">
						<option value="corporate">Corporativo</option>
						<option value="Party">Festa</option>
						<option value="feira">Feira</option>
					</select>
				</form>
				</div>
				
				<div className="grid grid-cols-3 gap-4">
				{cardInfo.map((info, index) => (
					
					<div
					  key={index}
					  className="w-80 bg-[#0B0B0C] h-[480px] rounded-2xl"
					>
					  <img src={info.imagem} alt="" className="h-52 rounded-2xl w-80 p-1"/>
					  <div className="h-80 w-full flex flex-col p-3 gap-4">
						<p className="font-semibold text-lg">
						  {info.title}
						</p>
						<p className="text-[#425466] text-xs">
						  {info.description}
						</p>
					  <p className="font-bold text-xs"> Data: <span className=" text-transparent bg-gradient-to-r from-[#30CBE8] to-[#FFF] bg-clip-text">{info.Data}</span> </p>
					  <div className="flex justify-between">
							<a href="#" className="bg-[#00A7E1] flex justify-center items-center font-semibold text-xs rounded-md w-28 h-9 ">Saiba mais</a>
							<p className="bg-[#1C1C1C] text-xs flex justify-center items-center rounded-[200px] w-20 h-9">{info.tipo}</p>
					  </div>
							</div>
					  
					</div>
				  ))}	
				</div>
				
					

			
					
			
			</div>
		</main>
	)
}

export default Events