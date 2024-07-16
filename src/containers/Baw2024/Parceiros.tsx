import {
	parceiro1,
	parceiro2,
	espacos,
	tanqueray,
	superbock,
	acadBai,
	gdaLogo,
	dimbo,
	logoTda,
	logoEnglishAcademy,
	logoAecipa,
	logoIsptec,
} from "../../assets"

const Parceiros: React.FC = () => {
	return (
		<section className="w-full  flex flex-col justify-center items-center py-[80px] max-sm:py-0 gap-12  max-sm:m-0  z-40">
			<h1 className="font-bold text-[45px] max-sm:text-[25px] max-2xl:text-[35px] text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text">
				Parceiros
			</h1>
			<marquee
				behavior=""
				direction="right"
				className="w-3/5 max-sm:w-4/5"
				loop="2"
			>
				<div className="flex gap-[64px] w-full justify-center items-center">
					<img
						src={parceiro1}
						alt=""
						className="object-contain max-2xl:h-[100px] max-2xl:w-[100px] max-sm:w-[200px]"
					/>
					<img
						src={parceiro2}
						alt=""
						className="object-contain h-[150px] w-[150px] max-2xl:h-[100px]  max-2xl:w-[100px]"
					/>
					<img
						src={espacos}
						alt=""
						className="object-contain h-[150px] w-[150px] max-2xl:h-[100px]  max-2xl:w-[100px]"
					/>
					<img
						src={tanqueray}
						alt=""
						className="object-contain h-[100px] w-[100px] max-2xl:h-[100px]  max-2xl:w-[100px]"
					/>
					<img
						src={superbock}
						alt=""
						className="object-contain h-[150px] w-[150px] max-2xl:h-[100px]  max-2xl:w-[100px]"
					/>

					<img
						src={acadBai}
						alt=""
						className="object-contain h-[150px] w-[150px] max-2xl:h-[100px]  max-2xl:w-[100px]"
					/>

					<img
						src={gdaLogo}
						alt=""
						className="object-contain h-[100px] w-[100px] max-2xl:h-[100px]  max-2xl:w-[100px]"
					/>
					<img
						src={dimbo}
						alt=""
						className="object-contain h-[100px] w-[100px] max-2xl:h-[100px]  max-2xl:w-[100px]"
					/>
					<img
						src={logoTda}
						alt=""
						className="object-contain h-[100px] w-[100px] max-2xl:h-[100px]  max-2xl:w-[100px]"
					/>
					<img
						src={logoEnglishAcademy}
						alt=""
						className="object-contain h-[100px] w-[100px] max-2xl:h-[100px]  max-2xl:w-[100px]"
					/>
					<img
						src={logoAecipa}
						alt=""
						className="object-contain h-[100px] w-[100px] max-2xl:h-[100px]  max-2xl:w-[100px]"
					/>
					<img
						src={logoIsptec}
						alt=""
						className="object-contain w-[400px] max-2xl:h-[100px]  max-2xl:w-[100px]"
					/>
				</div>
			</marquee>
		</section>
	)
}

export default Parceiros
