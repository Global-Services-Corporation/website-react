import React, { useRef, useState, useEffect } from "react"
import CountUp from "react-countup"

const Estatisticas: React.FC = () => {
	const statisticDatas = [
		{ number: 1000, title: "Participantes" },
		{ number: 1000, title: "Expositores" },
		{ number: 1000, title: "Oradores" },
		{ number: 1000, title: "Apresentadores" },
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
			className="h-80 text-white flex flex-col w-full justify-around bg-[#065CAB] px-52 py-12 items-center"
		>
			<h1 className="font-bold text-3xl">Estatística do evento</h1>

			<div className="flex justify-between w-4/5">
				{statisticDatas.map((statistic, index) => (
					<div
						key={index}
						className="flex flex-col gap-2 items-center font-bold"
					>
						<p className="text-3xl text-[#D7AF26]">
							+{isVisible ? <CountUp end={statistic.number} duration={2} /> : 0}
						</p>
						<p className="texl-xl">{statistic.title}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Estatisticas
