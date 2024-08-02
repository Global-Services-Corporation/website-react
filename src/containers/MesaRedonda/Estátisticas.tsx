import React, { useRef, useState, useEffect } from "react"
import CountUp from "react-countup"
import { fundoBlue } from "../../assets/mesa-redonda"

const Estatisticas: React.FC = () => {
	const statisticDatas = [
		{ number: 600, title: "Participantes" },
		{ number: 60, title: "Expositores" },
		{ number: 70, title: "Speakers" },
		{ number: 25, title: "Apresentações" },
	]
	const [isVisible, setIsVisible] = useState(false)
	const sectionRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true)
					observer.disconnect()
				}
			},
			{ threshold: 0.5 }
		)
		if (sectionRef.current) {
			observer.observe(sectionRef.current)
		}
		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current)
			}
		}
	}, [])

	return (
		<section
			ref={sectionRef}
			className="relative h-80 max-lg:h-96 text-white flex flex-col w-full justify-around bg-gradient-to-r from-[#010D29] to-[#032087]  items-center"
		>
			<img src={fundoBlue} alt="" className="h-full w-full animate-pulse" />
			<div className="absolute w-full h-full flex flex-col justify-around px-40 py-12 items-center max-lg:py-6 max-lg:px-10">
				<h1 className="font-bold text-3xl max-lg:text-xl">Estatística do Evento</h1>

				<div className="flex justify-between w-4/5 max-lg:flex-col max-lg:gap-4">
					{statisticDatas.map((statistic, index) => (
						<div
							key={index}
							className="flex flex-col gap-2 items-center font-bold"
						>
							<p className="text-3xl max-lg:text-xl text-[#FF9800]">
								+
								{isVisible ? (
									<CountUp end={statistic.number} duration={2} />
								) : (
									0
								)}
							</p>
							<p className="texl-xl max-lg:text-xs">{statistic.title}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Estatisticas
