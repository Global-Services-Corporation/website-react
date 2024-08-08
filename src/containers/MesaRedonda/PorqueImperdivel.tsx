import { porqueParticipar } from "../../assets"
import { fundoWhite } from "../../assets/mesa-redonda"

const PorqueParticipar: React.FC = () => {
	return (
		<div className="w-full justify-center flex items-center flex-col relative h-[43rem] max-lg:h-[30rem]">
			<img src={fundoWhite} alt="" className="object-cover w-full h-full" />
			<section className="flex w-full py-20 px-24 gap-16 justify-center items-center absolute top-0 left-0 h-full max-lg:flex-col max-lg:px-8 max-lg:py-16 ">
				<div className="flex flex-col gap-12 max-lg:gap-4 max-w-[550px]">
					<h2 className="font-extrabold text-3xl text-[#0E1937] max-lg:text-2xl max-lg:text-center">
						Por que este evento é imperdível?
					</h2>
					<p className="text-lg max-lg:text-sm  max-lg:text-center">
						<span className="font-semibold">Insights Exclusivos:{" "}</span>Aprender com
						líderes mais influentes do setor, estar por dentro das tendências
						sobre inovação tecnológica, sustentabilidade e eficiência
						energética. <br/> <span className="font-semibold">Debates Inspiradores: </span>Participar de discussões profundas sobre estratégias de
						liderança, que estão moldar o presente e futuro.<br/> <span className="font-semibold">Networking Valioso:{" "}</span>
						Conectar -se com executivos e profissionais influentes, ampliando
						suas oportunidades de negócios.
					</p>
				</div>

				<img
					src={porqueParticipar}
					alt=""
					className="object-cover h-full lg:max-w-[500px] rounded-md max-lg:hidden "
				/>
			</section>
		</div>
	)
}

export default PorqueParticipar
