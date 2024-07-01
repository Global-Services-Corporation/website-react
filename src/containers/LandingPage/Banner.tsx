import { seguro, academia, saude, mundo } from "../../assets"

const Banner: React.FC = () => {
	return (
		<section className="w-4/5 max-sm:w-full h-[554px] flex gap-32 max-sm:h-96 justify-between max-sm:relative">
			<div className="w-[427px] max-sm:w-full max-sm:text-center max-sm:items-center h-[395px] max-sm:h-72 flex flex-col gap-8 max-sm:absolute max-sm:z-40 ">
				<h1 className="w-full leading-none text-4xl max-sm:text-[40px] max-sm:z-40 font-bold">
					Dar poder às <span className="text-[#30CBE8]">suas escolhas</span> de
					<span className="text-[#30CBE8]">seguros</span>
				</h1>
				<p className="text-[#C5C5C5] max-sm:text-base text-[20px] font-bold max-sm:opacity-100">
					Explore o poder de proteger o seu futuro com escolhas inteligentes em
					seguros.
				</p>
				<button className="w-[219px] h-[45px] bg-[#30CBE8] opacity-60 max-sm:opacity-100 rounded-[10px] animate-pulse hover:opacity-100 max-sm:rounded-full">
					Começar
				</button>
			</div>
			<div className="w-[772px] max-sm:w-full h-[554px] max-sm:h-[600px] relative max-sm:absolute max-sm:-top-16">
				<img src={mundo} alt="" className="absolute max-sm:object-cover  max-sm:top-0 max-sm:h-full max-sm:z-0" />
				<img src={seguro} alt="" className="absolute start-10 max-sm:hidden" />
				<img
					src={academia}
					alt=""
					className="absolute start-10 top-64 max-sm:hidden"
				/>
				<img
					src={saude}
					alt=""
					className="absolute start-[340px] top-28 max-sm:hidden"
				/>
			</div>
		</section>
	)
}

export default Banner
