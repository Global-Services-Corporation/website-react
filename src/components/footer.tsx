import {
	facebookIcon,
	instagramIcon,
	linkedinIcon,
	logoLyrics,
} from "../assets"

const Footer: React.FC = () => {
	return (
		<footer className="h-[417px] w-full  max-sm:h-auto flex flex-col bg-[#000000]  justify-between">
			<div className="flex text-[#fff] max-sm:gap-7 px-[50px] max-sm:px-10 max-sm:flex-col py-[60px] justify-around">
				<div className="flex flex-col gap-[34px] max-sm:gap-5 max-sm:w-full max-sm:h-full w-[350px] h-[203px] box-border">
					<img
						src={logoLyrics}
						alt="Logotipo da Global Services Corporation"
						className="w-[87px]"
					/>

					<p className="max-sm:text-[16px] ">
						Siga-nos nas nossas redes sociais.
					</p>

					<div className="flex gap-4">
						<a href="https://web.facebook.com/people/Global-Services-Corporation/100094301594638/">
							<img src={facebookIcon} alt="Facebook" />
						</a>
						<a href="https://www.instagram.com/globalservicescorporation/">
							<img src={instagramIcon} alt="Instagram" />
						</a>
						<a href="https://www.linkedin.com/company/global-service-corporations/">
							<img src={linkedinIcon} alt="LinkedIn" />
						</a>
					</div>
				</div>

				<div className="flex max-sm:flex-col max-sm:gap-7 gap-[80px]">
					<div className="max-sm:flex max-sm:justify-between flex gap-20 max-sm:gap-2">
						<div className="box-border h-[202px] max-sm:h-fit flex flex-col gap-[10px] ">
							<h1 className="font-bold  ">Consultoria</h1>

							<ul className="flex max-sm:text-[#656666] flex-col max-sm:text-[12px] gap-3 max-sm:w-[150px]">
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

						<div className="box-border h-[202px] max-sm:h-fit flex flex-col gap-[10px]">
							<h1 className="font-bold">Linha de Apoio</h1>

							<ul className="flex max-sm:text-[#656666] flex-col gap-3 max-sm:text-[12px]">
								<li>
									<a href="tel:+244222731031">(+244) 222 731 031</a>
								</li>
								<li>
									<a href="tel:+244925835848">(+244) 925 835 848</a>
								</li>
								<li>
									<a href="tel:+244941064919">(+244) 941 064 919</a>
								</li>
								<li>
									<a href="mailto:geral@globalsc.ao">geral@globalsc.ao</a>
								</li>
								<li>
									<a href="mailto:sinistros@globalsc.ao">
										sinistros@globalsc.ao
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="box-border max-sm:h-fit h-[202px] flex flex-col gap-[10px]">
						<h1 className="font-bold ">Outras Soluções</h1>

						<ul className="flex flex-col max-sm:text-[#656666] max-sm:text-[12px] gap-3">
							<li>
								<a href="https://www.globalsc.ao">GSC</a>
							</li>
							<li>
								<a href="/">GSC Academy</a>
							</li>
						</ul>
					</div>
				</div>
				<hr />
			</div>
			<div className="bg-[#000020] max-sm:pb-6 max-sm:bg-[#000000] max-sm:text-[14px] max-sm:flex-col text-[#ffff] h-[80px] max-sm:text-[#A0A0AA] flex items-center justify-between px-[50px] box-border">
				Copyright © 2024 GSC{" "}
				<span className="max-sm:text-[12px] max-sm:text-[#656666]">
					Global Service Corporation - 2024
				</span>
			</div>
		</footer>
	)
}

export default Footer
