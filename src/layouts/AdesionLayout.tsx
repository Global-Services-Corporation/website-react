import React from "react"
import {
	bannerIllustration,

	logoLyrics,
} from "../assets"
import { useLocation, useNavigate } from "react-router-dom"

const AdesionLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const scrollContainerRef = React.useRef<HTMLDivElement>(null)
	const location = useLocation()

	React.useEffect(() => {
		const scrollContainer = scrollContainerRef.current
		if (scrollContainer) {
			scrollContainer.style.scrollbarWidth = "thin"
			scrollContainer.style.scrollbarColor = "#6b7280 #1f1f21"
		}
	}, [])

	const navigate = useNavigate()

	const onParticular = () => {
		navigate(`/personal`)
	}

	const onEnterprise = () => {
		navigate(`/enterprise`)
	}

	return (
		<>
			<section className="h-screen flex bg-[#001032]">
				<main
					className="w-1/2 max-sm:w-screen overflow-y-auto max-sm:overflow-x-hidden box-border flex flex-col"
					style={{
						scrollbarWidth: "thin",
						scrollbarColor: "#6b7280 #1f1f21",
					}}
				>
					<header className="text-white max-sm:w-screen flex p-6 justify-between items-center w-full box-border h-[100px]">
						<a href={"/"}>
							<img src={logoLyrics} alt="" className="w-[100px]" />
						</a>

						<nav className="flex gap-3 text-[20px] max-2xl:text-[18px]">
							<div>
								<button
									onClick={onParticular}
									className={`${
										location.pathname === `/personal/` ||
										location.pathname === "/personal"
											? "active"
											: ""
									}`}
								>
									Particular
								</button>
								{(location.pathname === `/personal/` ||
									location.pathname === `/personal`) && (
									<hr className="w-full border-[2px] rounded-full border-[#0399CD]" />
								)}
							</div>

							<div>
								<button
									onClick={onEnterprise}
									className={`${
										location.pathname === `/enterprise/` ||
										location.pathname === "/enterprise"
											? "active"
											: ""
									}`}
								>
									Empresa
								</button>
								{(location.pathname === `/enterprise/` ||
									location.pathname === "/enterprise") && (
									<hr className="w-full border-[2px] rounded-full border-[#0399CD]" />
								)}
							</div>
						</nav>
					</header>

					<div className="w-full flex justify-center">{children}</div>
				</main>
				<img
					src={bannerIllustration}
					alt=""
					className="w-1/2 h-full max-sm:hidden object-cover"
				/>
			</section>
		</>
	)
}

export default AdesionLayout
