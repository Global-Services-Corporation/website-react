import {
	logoAecipa,
	parceiro1,
	logoEnglishAcademy,
	sistecLogo,
	logoAes,
} from "../../assets"
import { logoAEC, staSeguros } from "../../assets/events/Sponsors"

const Partners: React.FC = () => {
	return (
		<section className="h-[400px] flex flex-col items-center justify-center gap-8 w-full max-lg:px-5">
			<p className="font-extrabold text-3xl text-[#0E1937] text-center max-lg:text-2xl">
				Parceiros
			</p>

			<div className="w-2/3 marquee flex max-lg:w-full">
				<div className="flex items-center justify-between lg:marquee-content w-full gap-24 overflow-x-auto">
					<img src={logoEnglishAcademy} alt="" className="w-36" />
					<img src={parceiro1} alt="" className="w-32" />
					<img src={logoAes} alt="" className="w-40" />
					<img src={logoAecipa} alt="" className="w-40" />
					<img src={logoAEC} alt="" className="w-40" />
					<img src={staSeguros} alt="" className="w-40" />
					<img src={sistecLogo} alt="" className="w-40" />
				</div>
			</div>
		</section>
	)
}

export default Partners
