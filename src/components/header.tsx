import { useEffect, useState } from "react"
import { logoLyrics, menu } from "../assets" // Importe o ícone do menu

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

	return (
		<header
			className={`fixed h-[80px]
      top-0 flex w-full justify-between items-center px-[55px] max-sm:px-8 box-border ${
				isScrolled
					? "bg-[#0000009f] transition duration-[4s] backdrop-blur-sm max-sm:fixed"
					: "transition duration-[4s]"
			} z-50`}
		>
			<a href={"/"} className="max-sm:w-[75px]">
				<img
					src={logoLyrics}
					alt="Logotipo GSC com as letras"
					className="w-full"
				/>
			</a>

			<div className="flex gap-4 max-sm:hidden">
				<a href="/" className="text-white">
					Início
				</a>

				<a href="/landing-events" className="text-white">
					Eventos
				</a>
			</div>

			<div className="hidden max-sm:flex relative">
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
						className="bg-white absolute gap-2 top-12 right-0 rounded-lg flex flex-col py-2 px-4"
						onMouseLeave={() => {
							setMenuOpen(false)
						}}
					>
						<a
							href="/"
							className="hover:bg-[#30CBE8] py-2 px-4 rounded-md flex justify-center items-center hover:text-white"
						>
							<img src="" alt="" /> Início
						</a>

						<a
							href="/landing-events"
							className="hover:bg-[#30CBE8] py-2 px-4 rounded-md flex justify-center items-center hover:text-white"
						>
							<img src="" alt="" /> Eventos
						</a>
					</div>
				)}
			</div>
		</header>
	)
}
