import { useEffect, useState } from "react"
import { mesaRedonda } from "../../assets"

const Banner: React.FC = () => {
	const calculateTimeLeft = () => {
		const eventDate = new Date("2024-07-25T00:00:00") // data do evento
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
		<main className="bg-[#00000079] h-screen relative flex justify-center items-center">
			<video src="" className="h-full w-full" autoPlay muted={true}></video>

			<div className="absolute w-full h-full top-0 left-0 flex flex-col p-10">
				<nav className="w-full">
					<img src={mesaRedonda} alt="Logo Mesa Redonda" className="w-32" />
				</nav>

				<div className="flex flex-col justify-center items-center mx-auto my-auto text-white gap-20 p-12">
					<div className="flex flex-col gap-5 w-4/5 justify-center items-center">
						<h1 className="font-bold text-4xl text-center">
							CEOs TECH REVELAM O PRÓXIMO GRANDE SALTO CORPORATIVO
						</h1>

						<a href="/personalForm" className="hover:bg-[#ffff] hover:text-[#0000FF] bg-[#0000FF] py-2.5 px-6 font-semibold rounded-md transition-colors duration-300 w-56">
							Inscrever-se
						</a>
					</div>

					<div className="flex gap-5 w-3/5 justify-between">
						<div className="flex flex-col items-center">
							<span className="text-[#D7AF26] text-4xl">{timeLeft.days}</span>
							<span className="text-lg font-bold">Dias</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="text-[#D7AF26] text-4xl">{timeLeft.hours}</span>
							<span className="text-lg font-bold">Horas</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="text-[#D7AF26] text-4xl">{timeLeft.minutes}</span>
							<span className="text-lg font-bold">Minutos</span>
						</div>
						<div className="flex flex-col items-center">
							<span className="text-[#D7AF26] text-4xl">{timeLeft.seconds}</span>
							<span className="text-lg font-bold">Segundos</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default Banner
