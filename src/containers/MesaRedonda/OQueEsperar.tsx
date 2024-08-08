import { aboutEvent } from "../../assets"
import { fundoWhite } from "../../assets/mesa-redonda"

const OQueEsperar: React.FC = () => {
	return (
		<div className="w-full justify-center flex items-center flex-col relative h-[43rem] max-lg:h-[30rem]">
			<img src={fundoWhite} alt="" className="object-cover w-full h-full" />
			<section className="flex w-full py-20 px-24 gap-16 justify-center items-center absolute top-0 left-0 h-full  max-lg:flex-col max-lg:px-8 max-lg:py-16 ">
				<div className="flex flex-col gap-12 max-lg:gap-4 max-w-[550px]">
					<h2 className="font-extrabold text-3xl text-[0E1937] max-lg:text-2xl max-lg:text-center">
						O que esperar deste evento?
					</h2>
					<p className="text-lg max-lg:text-sm text-justify max-lg:text-center">
						A 4ª Edição da Mesa Redonda Com CEOS reunirá líderes influentes da
						economia angolana e internacional, para discutir o impacto da
						inovação nas cadeias de produção, e como esse vetor, pode
						transformar a maneira e a orientação dos lideres de modo que
						posicionem diante dos desafios imposto pelos seus mercado. A
						inovação é um mecanismo de sobrevivência das organizações, as
						lideranças são obrigadas a inovar para não perder a competitividade,
						enfrentar os desafios e aproveitar as oportunidades do
						mercado local e global.
					</p>
				</div>

				<img
					src={aboutEvent}
					alt=""
					className="object-cover h-full lg:max-w-[500px] rounded-md max-lg:hidden "
				/>
			</section>
		</div>
	)
}

export default OQueEsperar
