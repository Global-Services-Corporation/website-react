import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {
	Pauloportas,
	Anabela,
	Pedroramos,
	Edsondossantos,
	williamOliveira,
	matuzalemSukete,
	antonioDosSantos,
} from "../../assets"
import KeynoteSpeaker from "./KeynoteSpeaker"

const Oradores = () => {
	const orador = [
		{
			foto: Pedroramos,
			nome: "Pedro Ramos",
			cargo: `PhD em Economia de Empresa`,
			sobre: `CEO da KEEPTALENT Portugal | Vice-Presidente da Lusofonia Digital É
    PhD em Economia de Empresa, Mestre em Sociologia do Emprego e
    Licenciado na área das Ciências da Educação. É atualmente um dos
    consultores de maior referência em Portugal e nos países de Língua
    Portuguesa nas temáticas de Gestão de Pessoas e Organizações, tendo
    anteriormente desempenhado o cargo de Administrador Executivo e de
    Diretor de Recursos Humanos em grandes empresas nos últimos 30 anos.`,
		},
		{
			foto: Pauloportas,
			nome: "Paulo Portas",
			cargo: `Ex Vice-primeiro-Ministro de Portugal`,
			sobre: `Paulo Portas é licenciado em Direito pela Universidade Católica de
    Lisboa e lecionou História do Pensamento Político. Dá aulas de
    Geoeconomia e Relações Internacionais na Universidade Nova. Ministrou
    cursos na Emirates Diplomatic Academy (Abu Dhabi) e seminários diretos
    sobre Diplomacia Económica para empresas multinacionais.`,
		},
		{
			foto: Anabela,
			nome: "Anabela Chastre",
			cargo: `Presidente da Cimeira Lusófona de Liderança`,
			sobre: `É CEO da Chastre Consulting, empresa especializada na formação e
      coaching para Líderes. É Docente Universitária em Lisboa e Coimbra e
      Oradora Internacional na área da Gestão de Pessoas e Liderança.`,
		},
		{
			foto: Edsondossantos,
			nome: "Edson R. Dos Santos",
			cargo: `PCA da Etu Energias`,
			sobre: ` CEO da KEEPTALENT Portugal | Vice-Presidente da Lusofonia Digital É
      PhD em Economia de Empresa, Mestre em Sociologia do Emprego e
      Licenciado na área das Ciências da Educação. É atualmente um dos
      consultores de maior referência em Portugal e nos países de Língua
      Portuguesa nas temáticas de Gestão de Pessoas e Organizações, tendo
      anteriormente desempenhado o cargo de Administrador Executivo e de
      Diretor de Recursos Humanos em grandes empresas nos últimos 30 anos.`,
		},
	]

	return (
		<section className="flex justify-center  w-full  max-sm:h max-sm:my-0 max-2xl:px-0 max-sm:px-0 text-white flex-col py-16 ">
			<KeynoteSpeaker />
			<div className="bg-[#1B223C] py-12 flex flex-col items-center">
				<h1 className="text-[45px] max-sm:text-[25px] font-bold max-2xl:text-[35px] text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text text-center">
					Oradores
				</h1>

				<div className="grid grid-cols-4 max-lg:grid-cols-1 w-4/5 p-4  gap-8 ">
					{orador.map((dados, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center text-center"
						>
							<img
								className="rounded-[50%] border-[#00A7E1] border-4 w-32 max-sm:w-28 mx-auto"
								src={dados.foto}
								alt=""
							/>

							<div className="w-[70%] mx-auto">
								<h2 className="text-[20px] max-2xl:text-[25px] max-sm:text-xl font-semibold text-center mb-2 mt-2">
									{dados.nome}
								</h2>

								<h3 className="text-[18px] max-2xl:text-[15px] max-sm:text-lg  mb-2">
									{dados.cargo}
								</h3>
							</div>
						</div>
					))}
				</div>
				<div className="flex justify-around items-center col-span-4 w-3/4 mx-auto max-lg:flex-col max-sm:grid-cols-1 max-lg:gap-8 max-lg:mt-8">
					<div className="flex flex-col items-center justify-center text-center">
						<img
							className="rounded-[50%] border-[#00A7E1] border-4 w-32 max-sm:w-28 mx-auto"
							src={williamOliveira}
							alt=""
						/>

						<div className="w-[70%] mx-auto">
							<h2 className="text-[20px] max-2xl:text-[25px] max-sm:text-xl font-semibold text-center mb-2 mt-2">
								William Oliveira
							</h2>

							<h3 className="text-[18px] max-2xl:text-[15px] max-sm:text-lg  mb-2">
								Director Geral da TIS Tech Angola
							</h3>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center text-center">
						<img
							className="rounded-[50%] border-[#00A7E1] border-4 w-32 max-sm:w-28 mx-auto"
							src={antonioDosSantos}
							alt=""
						/>

						<div className="w-[70%] mx-auto">
							<h2 className="text-[20px] max-2xl:text-[25px] max-sm:text-xl font-semibold text-center mb-2 mt-2">
								António do Santos
							</h2>

							<h3 className="text-[18px] max-2xl:text-[15px] max-sm:text-lg  mb-2">
								PCA da TAAG
							</h3>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center text-center">
						<img
							className="rounded-[50%] border-[#00A7E1] border-4 w-32 max-sm:w-28 mx-auto"
							src={matuzalemSukete}
							alt=""
						/>

						<div className="w-[70%] mx-auto">
							<h2 className="text-[20px] max-2xl:text-[25px] max-sm:text-xl font-semibold text-center mb-2 mt-2">
								Matuzalém Sukete
							</h2>

							<h3 className="text-[18px] max-2xl:text-[15px] max-sm:text-lg  mb-2">
								CEO da Angola Environmental Services
							</h3>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Oradores
