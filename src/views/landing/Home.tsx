import axios from "axios"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { User } from "../../services/utils/types"
import AboutUs from "../../containers/LandingPage/AboutUs"
import Services from "../../containers/LandingPage/Services"
import EnterpriseSolution from "../../containers/LandingPage/EnterpriseSolution"

import { elipse2 } from "../../assets"
import FormativeAction from "../../containers/LandingPage/FormativeAction"
import Blog from "../../containers/LandingPage/Blog"
import Newsletter from "../../containers/LandingPage/Newsletter"
import BannerBaw from "../../containers/LandingPage/BannerBaws"

const HomePage: React.FC = () => {
	const navigate = useNavigate()
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const token = localStorage.getItem("token")
				if (token) {
					const response = await axios.get("https://gsc.api.unocura.ao/token", {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					})
					setUser(response.data)
				}
			} catch (error) {
				localStorage.removeItem("token")
				console.error("Erro ao fazer login:", error)
			}
		}

		fetchData()
	}, [])

	useEffect(() => {
		if (user !== null) {
			navigate(`/`)
		}
	}, [user, navigate])

	return (
		<div className="font-interTight bg-[#001032] h-full text-white gap-16 flex flex-col justify-center items-center pb-48">
			<img
				src={elipse2}
				className="absolute start-0 -top-[750px] object-cover z-0 rotate-180 animate-pulse"
				alt=""
			/>
			<BannerBaw />
			<img
				src={elipse2}
				className="absolute end-0 object-cover z-0 top-[200px] animate-pulse"
				alt=""
			/>
			<Services />
			<AboutUs />
			<img
				src={elipse2}
				className="absolute start-0 object-cover z-0 top-[1470px] rotate-180 animate-pulse"
				alt=""
			/>
			<EnterpriseSolution />
			<FormativeAction />
			<img
				src={elipse2}
				alt=""
				className="absolute end-0 top-[2470px] object-cover animate-pulse"
			/>
			<Blog />
			<img
				src={elipse2}
				className="absolute start-0 object-cover z-0 top-[3470px] rotate-180 animate-pulse"
				alt=""
			/>
			<Newsletter />
		</div>
	)
}

export default HomePage
