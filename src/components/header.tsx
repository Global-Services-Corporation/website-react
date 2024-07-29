import { useEffect, useState } from "react"
import { logoGSC } from "../assets/mesa-redonda"

export const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY
			const scrollThreshold = 10

			if (scrollTop > scrollThreshold) setIsScrolled(true)
			else setIsScrolled(false)
		}

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const menuInfo = [
		{
			title: "Início",
			link: "/",
			open: "",
		},
		{
			title: "Sobre",
			link: "/",
			open: "sobre",
		},
		{
			title: "Eventos",
			link: "/events",
			open: "",
		},
		{
			title: "Serviços",
			link: "/",
			open: "services",
		},
		{
			title: "Contactos",
			link: "/",
			open: "contact",
		},
	]

	const scrollTo = (e: React.MouseEvent, to: string) => {
		e.preventDefault()
		const section = document.getElementById(to)
		if (section) {
			section.scrollIntoView({ behavior: "smooth" })
		}
	}

	return (
		<header
			className={`fixed h-[80px]
      top-0 flex w-full justify-between items-center px-[55px] max-lg:px-8 box-border ${
				isScrolled
					? "bg-[#0000009f] transition duration-[0.5s] backdrop-blur-sm max-lg:fixed"
					: "transition duration-[0.5s]"
			} z-50`}
		>
			<a href={"/"} className="max-lg:w-[75px]">
				<img src={logoGSC} alt="Logotipo GSC com as letras" className="w-10" />
			</a>

			<div className="flex gap-8 max-lg:hidden h-14 items-center">
				{menuInfo.map((menu, index) => (
					<a
						key={index}
						href={menu.link}
						onClick={menu.open ? (e) => scrollTo(e, menu.open) : undefined}
						className="text-white hover:border-b-4 hover:border-[#30CBE8] hover:text-[#30CBE8]"
					>
						{menu.title}
					</a>
				))}
			</div>

			<div className="hidden max-lg:flex relative">
				<img
					src={menu}
					alt=""
					className=""
					onClick={() => {
						setMenuOpen(true)
					}}
				/>

				{menuOpen && (
					<div
						className="bg-white absolute gap-2 top-12 right-0 rounded-lg flex flex-col py-2 px-4 w-[150px] items-center"
						onMouseLeave={() => {
							setMenuOpen(false)
						}}
					>
						<div>
							{menuInfo.map((menu, index) => (
								<a
									key={index}
									href={menu.link}
									onClick={
										menu.open ? (e) => scrollTo(e, menu.open) : undefined
									}
									className="hover:bg-[#30CBE8] py-2 px-4 rounded-md flex justify-center items-center hover:text-white text-sm"
								>
									{menu.title}
								</a>
							))}

							<a
								href="https://www.businessafterwork.globalsc.ao"
								className="hover:bg-[#30CBE8] py-2 px-4 rounded-md flex justify-center items-center hover:text-white text-sm"
							>
								Inscreva-se
							</a>
						</div>
					</div>
				)}
			</div>

			<a
				href="https://www.mesaredonda.globalsc.ao"
				className="max-lg:hidden duration-300 text-sm font-bold flex items-center justify-center px-[20px] max-lg:px-4 py-[25px] max-lg:py-2 w-[150px] max-lg:w-[110px] h-[40px] max-lg:h-8 max-lg:text-xs bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] transition-colors hover:from-[#000000] hover:to-[#000000] hover:text-white rounded-[10px]"
			>
				Inscreva-se
			</a>
		</header>
	)
}
