import { logoRna, logoTpa, logoTvZimbo, logoPlatinaLine, logoZap } from "../../assets"

const MediaPartners: React.FC = () => {
	return (
		<section className="h-[542px] flex flex-col items-center justify-center gap-8 w-full ">
			<p className="font-extrabold text-3xl text-[#FF9800]">Parceiros de Mídia</p>

			<div className="w-4/5 flex items-center justify-around">
				<img src={logoRna} alt="" className="h-38 w-40" />
				<img src={logoTpa} alt="" className="h-38 w-40" />
				<img src={logoTvZimbo} alt="" className="h-36" />
				<img src={logoPlatinaLine} alt="" className="" />
				<img src={logoZap} alt="" className="h-52" />
			</div>
		</section>
	)
}

export default MediaPartners
