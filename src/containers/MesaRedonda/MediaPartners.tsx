import { logoRna, logoTpa, logoTvZimbo, logoPlatinaLine } from "../../assets"

const MediaPartners: React.FC = () => {
	return (
		<section className="h-[400px] flex flex-col items-center justify-center gap-8 w-full max-lg:px-5">
			<p className="font-extrabold text-3xl text-[#0E1937] text-center max-lg:text-2xl">
				Parceiros de Mídia
			</p>

			<div className="w-4/5 marquee flex">
				<div className="flex items-center justify-between marquee-content space-x-8 w-full">
					<img src={logoRna} alt="" className="h-38 w-40" />
					<img src={logoTpa} alt="" className="h-38 w-40" />
					<img src={logoTvZimbo} alt="" className="h-36" />
					<img src={logoPlatinaLine} alt="" className="" />
				</div>
			</div>
		</section>
	)
}

export default MediaPartners
