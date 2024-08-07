import { sobrenos } from "../../assets"

const AboutUs: React.FC = () => {
	return (
		<section
			id="sobre"
			className="w-full items-center justify-center bg-[#0C2A42] h-[593px] text-white max-lg:h-full max-lg:py-20 flex relative gap-12 z-40"
		>
			<div className="w-[80%] flex items-center max-lg:justify-center justify-between gap-[35px]">
				<div className="w-2/4 max-lg:w-full flex justify-between flex-col gap-4">
					<p className="font-semibold max-lg:text-2xl text-4xl">Sobre nós</p>
					<div className="w-full flex  max-lg:text-md text-[20px] flex-col gap-2">
						<p className="text-[20px] max-lg:text-md">
							<span className="font-semibold max-lg:text-md">
								Global Services Corporation
							</span>
							, empresa angolana de multisserviços, com sede na{" "}
							<i className="font-semibold max-lg:text-md">
								Rua Dr. Aleixo de Abreu, Ingombotas, Luanda, Angola.
							</i>
						</p>
						<p className="max-lg:text-md">
							Actuamos em três áreas fundamentais nomeadamente:
						</p>

						<ul className="list-disc ml-8 max-lg:text-md ">
							<li>Gestão de Riscos (Seguros);</li>
							<li>Consultoria Empresarial;</li>
							<li>Formação do Capital Humano.</li>
						</ul>

						<p className="text-[20px] max-lg:text-md">
							O nosso objectivo fundamental é contribuir no alcance dos
							objectivos estrátegicos dos nossos clientes, oferecendo Serviços
							de Consultoria.
						</p>
					</div>
				</div>
				<img
					src={sobrenos}
					alt=""
					className="max-lg:hidden rounded-2xl w-[500px]"
				/>
			</div>
		</section>
	)
}

export default AboutUs
