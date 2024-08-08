import { superbock, espacos, logoAecipa, parceiro1 } from "../../assets"

const Partners: React.FC = () => {
	return (
		<section className="h-[400px] flex flex-col items-center justify-center gap-8 w-full max-lg:px-5">
			<p className="font-extrabold text-3xl text-[#0E1937] text-center max-lg:text-2xl">
				Parceiros
			</p>

			<div className="w-4/5 marquee flex">
				<div className="flex items-center justify-between marquee-content space-x-8 w-full">
					<img src={superbock} alt="" className="h-40 w-40" />
					<img src={espacos} alt="" className="h-38 w-40" />
					<img src={logoAecipa} alt="" className="h-40 w-40" />
					<img src={parceiro1} alt="" className="h-38 w-40 invert" />
				</div>
			</div>
		</section>
	)
}

export default Partners
