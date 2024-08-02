import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { logoMRWhite } from "../../assets/mesa-redonda"

const Banner: React.FC = () => {
	const calculateTimeLeft = () => {
		const eventDate = new Date("2024-11-27T16:30:00") // data do evento
		const currentTime = new Date()
		const difference = eventDate.getTime() - currentTime.getTime()

		let timeLeft = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		}

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			}
		}

		return timeLeft
	}

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft())
		}, 1000)

		return () => clearTimeout(timer)
	}, [timeLeft])

	return (
		<main className="h-[700px] max-lg:h-[500px] relative flex justify-center items-center">
			<iframe
				src="https://youtube.com/embed/hYnsGwY_f2U?autoplay=1&controls=0&mute=1&loop=1&playlist=hYnsGwY_f2U&modestbranding=1&showinfo=0&iv_load_policy=3"
				title="YouTube video player"
				className=" w-full h-full pointer-events-none object-cover"
				frameBorder="0"
				allow="autoplay; encrypted-media"
				allowFullScreen
			/>

			<div className="absolute w-full h-full top-0 left-0 flex flex-col p-10 bg-[#0000009c] ">
				<nav className="w-full">
					<img src={logoMRWhite} alt="Logo Mesa Redonda" className="w-20 max-lg:w-16" />
				</nav>

				<div className="flex flex-col justify-center items-center mx-auto my-auto text-white gap-20 lg:p-12 max-lg:p-0">
					<div className="flex flex-col h-3/4 gap-10 w-3/5 max-lg:w-full justify-between items-center">
						<h1 className="font-extrabold text-5xl text-center max-lg:text-2xl">
							Leadership <span className="text-[#FF9800]">Innovation</span><span className="font-light"> Tech
							In Oil Gas Sector</span>
						</h1>

						<Link
							to="/personal-form"
							className="hover:bg-[#FF9800] hover:text-[#ffffff] bg-[#065CAB00] border-[3px] border-[#FF9800] py-2.5 px-6 font-semibold rounded-lg transition-colors duration-300 w-56 max-lg:w-36 max-lg:text-sm flex justify-center items-center"
						>
							Participar
						</Link>
					</div>

					<div className="flex gap-5 w-3/5 justify-between max-lg:w-full max-lg:justify-around max-lg:px-3">
						<div className="flex flex-col items-center">
							<span className="text-[#ffffff] text-4xl max-lg:text-2xl">{timeLeft.days}</span>
							<span className="text-lg max-lg:text-sm font-bold">Dias</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="text-[#ffffff] text-4xl max-lg:text-2xl">{timeLeft.hours}</span>
							<span className="text-lg max-lg:text-sm font-bold">Horas</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="text-[#ffffff] text-4xl max-lg:text-2xl">
								{timeLeft.minutes}
							</span>
							<span className="text-lg max-lg:text-sm font-bold">Minutos</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="text-[#ffffff] text-4xl max-lg:text-2xl">
								{timeLeft.seconds}
							</span>
							<span className="text-lg max-lg:text-sm font-bold">Segundos</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Banner
