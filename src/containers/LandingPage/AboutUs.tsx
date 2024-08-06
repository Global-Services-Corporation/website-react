import { sobrenos } from "../../assets"

const AboutUs: React.FC = () => {
	return (
		<section
			id="sobre"
			className="w-full items-center justify-center bg-[#00C7FF] h-[593px] text-white max-sm:h-full max-sm:py-20 flex relative gap-12 z-40"
		>
			<div className="w-[80%] flex items-center max-sm:justify-center justify-between gap-[35px]">
				<div className="w-2/4 max-sm:w-full flex justify-between flex-col gap-4">
					<p className="font-semibold max-sm:text-2xl text-4xl">Sobre nós</p>
					<div className="w-full flex max-sm:w-80 max-sm:text-md text-[20px] flex-col gap-2">
						<p className="text-[20px] max-sm:text-md">
							<span className="font-semibold max-sm:text-md">
								Global Services Corporation
							</span>
							, empresa angolana de multisserviços, com sede na{" "}
							<i className="font-semibold max-sm:text-md">
								Rua Dr. Aleixo de Abreu, Ingombotas, Luanda, Angola.
							</i>
						</p>
						<p className="max-sm:text-md">
							Actuamos em três áreas fundamentais nomeadamente:
						</p>

						<ul className="list-disc ml-8 max-sm:text-md ">
							<li>Gestão de Riscos (Seguros);</li>
							<li>Consultoria Empresarial;</li>
							<li>Formação do Capital Humano.</li>
						</ul>

						<p className="text-[20px] max-sm:text-md">
							O nosso objectivo fundamental é contribuir no alcance dos
							objectivos estrátegicos dos nossos clientes, oferecendo Serviços
							de Consultoria.
						</p>
					</div>
				</div>
				<img
					src={sobrenos}
					alt=""
					className="max-sm:hidden rounded-2xl w-[500px]"
				/>
			</div>
		</section>
	)
}

export default AboutUs
