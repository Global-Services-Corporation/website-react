import { superbock, espacos, logoAecipa, parceiro1 } from "../../assets"

const SponsorsAndPartners: React.FC = () => {
	return (
		<section className="h-[542px] flex flex-col items-center justify-center gap-8 w-full ">
			<p className="font-extrabold text-3xl text-[#FF9800]">
				Patrocinadores e Parceiros
			</p>

			<div className="w-4/5 flex items-center justify-around">
				<img src={superbock} alt="" className="h-40 w-40" />
				<img src={espacos} alt="" className="h-38 w-40" />
				<img src={logoAecipa} alt="" className="h-40 w-40" />
				<img src={parceiro1} alt="" className="h-38 w-40 invert" />
			</div>
		</section>
	)
}

export default SponsorsAndPartners
