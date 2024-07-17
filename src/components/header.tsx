import { useEffect, useState } from "react"
import { logoLyrics } from "../assets" // Importe o ícone do menu

export const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)

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
      top-0 flex w-full justify-between items-center px-[55px] max-lg:px-8 box-border ${
				isScrolled
					? "bg-[#0000009f] transition duration-[4s] backdrop-blur-sm max-lg:fixed"
					: "transition duration-[4s]"
			} z-50`}
		>
			<a href={"/"} className="max-lg:w-[75px]">
				<img
					src={logoLyrics}
					alt="Logotipo GSC com as letras"
					className="w-32"
				/>
			</a>

			<a
				href="/personal"
				className="text-sm font-bold flex items-center justify-center px-[20px] max-lg:px-4 py-[25px] max-lg:py-2 w-[150px] max-lg:w-[110px] h-[40px] max-lg:h-8 max-lg:text-xs bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] transition-colors hover:from-[#ffffff] hover:to-[#ffffff] hover:text-black rounded-[10px]"
			>
				Inscreva-se
			</a>
		</header>
	)
}
