import { facebookIcon, instagramIcon, linkedinIcon } from "../assets"
import { logoLyricsTwo } from "../assets/mesa-redonda"

const Footer: React.FC = () => {
	return (
		<footer
			className="h-[417px] w-full  max-lg:h-auto flex flex-col bg-[#000000] justify-between"
			id="footer"
		>
			<div className="flex text-[#fff] max-lg:gap-7 px-[50px] max-lg:px-10 max-lg:flex-col py-[60px] justify-between w-full">
				<div className="flex flex-col gap-[34px] max-lg:gap-5 max-lg:w-full max-lg:h-full w-[350px] h-[203px] box-border">
					<img
						src={logoLyricsTwo}
						alt="Logotipo da Global Services Corporation"
						className="w-[80px]"
					/>

					<p className="max-lg:text-xs text-sm ">
						Global Services Corporation, empresa angolana de multisserviços.
					</p>

					<div className="flex gap-4">
						<a
							href="https://web.facebook.com/people/Global-Services-Corporation/100094301594638/"
							className="hover:invert hover:brightness-0"
						>
							<img src={facebookIcon} alt="Facebook" />
						</a>
						<a
							href="https://www.instagram.com/globalservicescorporation/"
							className="hover:invert hover:brightness-0"
						>
							<img src={instagramIcon} alt="Instagram" />
						</a>
						<a
							href="https://www.linkedin.com/company/global-service-corporations/"
							className="hover:invert hover:brightness-0"
						>
							<img src={linkedinIcon} alt="LinkedIn" />
						</a>
					</div>
				</div>

				<div className="lg:flex max-lg:flex-col max-lg:gap-7 gap-[80px] w-3/5 justify-end max-lg:w-full">
					<div className=" max-lg:justify-between flex gap-20 max-lg:gap-2 w-full justify-around max-lg:grid max-lg:grid-cols-2">
						<div className="box-border h-[202px] max-lg:h-fit flex flex-col gap-[10px] ">
							<h1 className="font-bold  ">Consultoria</h1>

							<ul className="flex max-lg:text-[#656666] flex-col max-lg:text-[12px] gap-3 max-lg:w-[150px]">
								<li>
									<a href="/">Consultoria de Seguros</a>
								</li>
								<li>
									<a href="/">Consultoria Empresarial</a>
								</li>
								<li>
									<a href="/">Consultoria de Marketing</a>
								</li>
								<li>
									<a href="/">Consultoria e Finanças</a>
								</li>
							</ul>
						</div>

						<div className="box-border h-[202px] max-lg:h-fit flex flex-col gap-[10px]">
							<h1 className="font-bold">Linha de Apoio</h1>

							<ul className="flex max-lg:text-[#656666] flex-col gap-3 max-lg:text-[12px]">
								<li>
									<a href="tel:+244222731031">(+244) 222 731 031</a>
								</li>
								<li>
									<a href="tel:+244941064919">(+244) 941 064 919</a>
								</li>
							</ul>
						</div>

						<div className="box-border max-lg:h-fit h-[202px] flex flex-col gap-[10px]">
						<h1 className="font-bold ">Outras Soluções</h1>

						<ul className="flex flex-col max-lg:text-[#656666] max-lg:text-[12px] gap-3">
							<li>
								<a href="/">GSC</a>
							</li>
							<li>
								<a href="/">GSC Academy</a>
							</li>
						</ul>
					</div>
				</div>
					</div>

					
				
			</div>
			<div className="bg-[#000020] max-lg:pb-6 max-lg:bg-[#000000] max-lg:text-[14px] max-lg:flex-col text-[#ffff] h-[80px] max-lg:text-[#A0A0AA] flex items-center justify-end px-[50px] box-border">
				
				<span className="max-lg:text-[12px] max-lg:text-[#656666]">
					Global Service Corporation - 2024
				</span>
			</div>
		</footer>
	)
}

export default Footer
