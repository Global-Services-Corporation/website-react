import { eventosicon } from "../../assets"

const EnterpriseSolution: React.FC = () => {
	const CardInfo = [
		{
			cardIcon: eventosicon,
			title: "Consultoria de Seguros",
			description: `Oferecemos serviços especializados para ajudar indivíduos e empresas a escolherem e gerenciarem planos de seguro adequados às suas necessidades..`,
		},
		{
			cardIcon: eventosicon,
			title: "Consultoria Empresarial",
			description: `Oferecemos serviços especializados para melhorar o desempenho organizacional através de estratégias personalizadas em áreas como operações, finanças, recursos humanos e tecnologia, visando a otimização, crescimento e competitividade no mercado.`,
		},
		{
			cardIcon: eventosicon,
			title: "Consultoria Jurídica",
			description: `Oferecemos uma orientação especializada em questões legais para indivíduos e empresas, abrangendo áreas como direito civil, comercial, trabalhista e regulatório, com o objetivo de assegurar conformidade legal, minimizar riscos e resolver conflitos de maneira eficaz e estratégica.`,
		},
		{
			cardIcon: eventosicon,
			title: "Consultoria em Marketing",
			description: `Oferecemos serviços especializados para empresas melhorarem sua presença e desempenho no mercado.`,
		},
		{
			cardIcon: eventosicon,
			title: "Consultoria em RH",
			description: `Oferecemos soluções especializadas para empresas gerenciarem eficientemente seus recursos humanos.`,
		},
		{
			cardIcon: eventosicon,
			title: "Consultoria Financeira",
			description: `Oferecemos serviços especializados para ajudar indivíduos e empresas a gerenciar seus recursos financeiros de forma eficiente.`,
		},
	]
	return (
		<section className="w-full flex flex-col justify-center gap-12 py-24  items-center">
			<div className="w-full flex flex-col items-center gap-5 justify-center">
				<p className="font-bold text-4xl max-sm:text-2xl">
					{" "}
					Soluções Empresariais
				</p>
				<p className="text-[#c5c5c5] max-sm:text-sm text-center w-2/3">
					Veja as soluções que a{" "}
					<span className="text-[#30CBE8]">Global Services Corporation</span>{" "}
					tem para a sua empresa.
				</p>
			</div>
			<div className="w-4/5 grid grid-cols-3 max-sm:grid-cols-1 grid-rows-2 gap-5">
				{CardInfo.map((info, index) => (
					<div
						key={index}
						className=" w-full h-56 flex flex-col p-6 gap-2.5  rounded-lg bg-[#0E1937]"
					>
						<img
							src={info.cardIcon}
							alt=""
							className="h-16 w-16 max-sm:h-10 max-sm:w-10"
						/>
						<p className="text-[#30CBE8] max-sm:text-sm">{info.title}</p>
						<p className="text-[#C5C5C5] text-xs max-sm:text-[11px]">
							{info.description}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default EnterpriseSolution
