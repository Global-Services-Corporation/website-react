import React, { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { User } from "../../services/utils/types"
import { logoLyrics, bgConfirmAdesion } from "../../assets"

type TicketType = {
	id: string
	label: string
	price: number
	available: number | string
}

const ticketTypes: TicketType[] = [
	{
		id: "individual",
		label: "Participação: Individual",
		price: 150000,
		available: 30,
	},
	{
		id: "student",
		label: "Participação: Estudante (Cartão válido)",
		price: 100000,
		available: 30,
	},
	{
		id: "delegation3",
		label: "Participação: Delegação - 3 pax",
		price: 500000,
		available: 30,
	},
	{
		id: "delegation6",
		label: "Participação: Delegação - 6 pax",
		price: 900000,
		available: 30,
	},
	{ id: "lunch", label: "Almoço", price: 100000, available: "Unlimited" },
]

const TicketsPrices: React.FC = () => {
	const [quantities, setQuantities] = useState<{ [key: string]: number }>(
		ticketTypes.reduce((acc, ticket) => {
			acc[ticket.id] = 0
			return acc
		}, {} as { [key: string]: number })
	)

	const { id } = useParams()
	const navigate = useNavigate()
	const [user, setUser] = useState<User | null>(null)

	const fetchUserData = async (userId: string | undefined) => {
		try {
			const response = await axios.get(
				`https://gsc.api.unocura.ao/user/${userId}`,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					},
				}
			)
			setUser(response.data)
		} catch (error) {
			console.error("Erro ao carregar dados do usuário:", error)
		}
	}

	const handleIncrease = (id: string) => {
		setQuantities((prev) => ({
			...prev,
			[id]: prev[id] + 1,
		}))
	}

	const handleDecrease = (id: string) => {
		setQuantities((prev) => ({
			...prev,
			[id]: prev[id] > 0 ? prev[id] - 1 : 0,
		}))
	}

	const total = ticketTypes.reduce(
		(sum, ticket) => sum + quantities[ticket.id] * ticket.price,
		0
	)

	useEffect(() => {
		fetchUserData(id)
	}, [id])

	const saveToLocalStorage = (
		key: string,
		data: { [key: string]: number },
		total: number
	) => {
		const existingData = localStorage.getItem(key)
		const parsedData = existingData ? JSON.parse(existingData) : {}
		const updatedData = { ...parsedData }

		Object.keys(data).forEach((ticketId) => {
			if (updatedData[ticketId] !== undefined) {
				updatedData[ticketId] += data[ticketId]
			} else {
				updatedData[ticketId] = data[ticketId]
			}
		})

		updatedData.total = (updatedData.total || 0) + total

		localStorage.setItem(key, JSON.stringify(updatedData))
		navigate(`/confirm-adesion-personal/${user?.uuid}`)
	}

	return (
		<main className="w-screen h-screen relative bg-[#141416] flex flex-col items-center overflow-hidden max-sm:overflow-y-auto">
			<header className="w-full py-4 px-6 z-10 flex justify-between items-center">
				<a href={user ? `/${user?.uuid}` : "/"}>
					<img src={logoLyrics} alt="Logotipo da Global Services Corporation" />
				</a>

				<Link
					to={user ? `/enterprise/${user?.uuid}` : "/enterprise"}
					className="text-white font-bold"
				>
					Cancelar
				</Link>
			</header>

			<img
				src={bgConfirmAdesion}
				alt=""
				className="absolute w-full h-full object-cover top-0"
			/>

			<div className="text-white flex flex-col z-50 h-full">
				<h1>Tickets</h1>
				{ticketTypes.map((ticket) => (
					<div key={ticket.id}>
						<span>{ticket.label}</span>
						<span>
							{" "}
							{ticket.price.toLocaleString("pt-PT", {
								style: "currency",
								currency: "AOA",
							})}
						</span>
						<div>
							<button onClick={() => handleDecrease(ticket.id)}>-</button>
							<span>{quantities[ticket.id]}</span>
							<button onClick={() => handleIncrease(ticket.id)}>+</button>
						</div>
					</div>
				))}
				<div>
					<button
						onClick={() => {
							saveToLocalStorage("accumulatedTicketData", quantities, total)
							console.log(localStorage.getItem("accumulatedTicketData"))
						}}
					>
						Get Tickets
					</button>
					<span>
						{" "}
						Quantity:{" "}
						{Object.values(quantities).reduce((sum, qty) => sum + qty, 0)}{" "}
					</span>
					<span>
						{" "}
						Total:{" "}
						{total.toLocaleString("pt-PT", {
							style: "currency",
							currency: "AOA",
						})}
					</span>
				</div>
			</div>
		</main>
	)
}

export default TicketsPrices
