import { useEffect, useState } from "react"
import { logoNoLyrics, menu } from "../assets"
import { Link } from "react-router-dom"

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
		},
		{
			title: "Atividades",
			link: "/events",
		},
	]

	return (
		<header
			className={`fixed h-[80px]
      top-0 flex w-full justify-between items-center px-[55px] max-lg:px-8 box-border ${
				isScrolled
					? "bg-[#0000009f] transition duration-[0.5s] backdrop-blur-sm max-lg:fixed"
					: "transition duration-[0.5s] lg:invert"
			} z-50`}
		>
			<a href={"/"} className="max-lg:w-[75px]">
				<img
					src={logoNoLyrics}
					alt="Logotipo GSC com as letras"
					className="w-10 invert"
				/>
			</a>

			<div className="flex gap-8 max-lg:hidden h-14 items-center">
				{menuInfo.map((menu, index) => (
					<Link
						key={index}
						to={menu.link}
						className="text-white hover:border-b-4 hover:border-[#30CBE8] hover:text-[#30CBE8] "
					>
						{menu.title}
					</Link>
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
				href="https://www.businessafterwork.globalsc.ao"
				className="hover:bg-[#ffffff] rounded-lg px-4 py-2 max-lg:hidden transition-colors bg-black text-white hover:text-black duration-300"
			>
				Inscreva-se
			</a>
		</header>
	)
}
