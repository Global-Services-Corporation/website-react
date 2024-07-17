import React, { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { logoLyrics } from "../../assets"

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
		id: "empresarial8",
		label: "Empresarial: 8 pessoas",
		price: 900000,
		available: 30,
	},
	{
		id: "empresarial5",
		label: "Empresarial: 5 pessoas",
		price: 650000,
		available: 30,
	},
	{
		id: "empresarial3",
		label: "Empresarial: 3 pessoas",
		price: 420000,
		available: 30,
	},
]

const TicketsPricesEnterprise: React.FC = () => {
	const [quantities, setQuantities] = useState<{ [key: string]: number }>(
		ticketTypes.reduce((acc, ticket) => {
			acc[ticket.id] = 0
			return acc
		}, {} as { [key: string]: number })
	)

	const { id } = useParams()
	const navigate = useNavigate()

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

	const saveToLocalStorage = (
		key: string,
		data: { [key: string]: number },
		total: number,
		totalQuantity: number
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

		const selectedTickets = ticketTypes
			.filter((ticket) => data[ticket.id] > 0)
			.map((ticket) => ({
				id: ticket.id,
				label: ticket.label,
				quantity: data[ticket.id],
				totalPrice: data[ticket.id] * ticket.price,
			}))

		updatedData.total = (updatedData.total || 0) + total
		updatedData.totalQuantity = (updatedData.totalQuantity || 0) + totalQuantity
		updatedData.selectedTickets = selectedTickets

		localStorage.setItem(key, JSON.stringify(updatedData))
	}

	const handleAdvance = () => {
		const totalQuantity = Object.values(quantities).reduce(
			(sum, qty) => sum + qty,
			0
		)
		if (totalQuantity > 0) {
			saveToLocalStorage(
				"accumulatedTicketData",
				quantities,
				total,
				totalQuantity
			)
			navigate(`/confirm-adesion-enterprise/`)
		} else {
			alert("Selecione algum ticket!")
		}
	}

	return (
		<main className="max-sm:h-full relative h-full bg-[#001032] flex flex-col items-center max-sm:overflow-y-auto">
			<header className="w-full py-4 px-6 z-10 flex justify-between items-center ">
				<a href={"/"}>
				<img
					src={logoLyrics}
					alt="Logotipo GSC com as letras"
					className="w-32"
				/>
				</a>

				<Link
					to={"/enterprise"}
					className="text-white font-bold"
					onClick={() => {
						localStorage.removeItem("accumulatedTicketData")
					}}
				>
					Cancelar
				</Link>
			</header>

			<div className="text-white max-sm:text-sm flex flex-col z-50 w-2/3 gap-4 my-12 rounded-md justify-between p-10 bg-[#1B223C] max-sm:gap-2 max-sm:w-full max-sm:h-auto max-sm:m-0">
				<h1 className="font-semibold text-center text-3xl text-white">
					TICKETS
				</h1>
				{ticketTypes.map((ticket) => (
					<div
						key={ticket.id}
						className="flex w-full max-sm:flex-col justify-between items-center shadow-inner shadow-black rounded-md p-4 max-sm:gap-3 mb-3"
					>
						<p className="font-bold text-[#00A7E1] text-lg">{ticket.label}</p>

						<p className="font-bold">
							{ticket.price.toLocaleString("pt-PT", {
								style: "currency",
								currency: "AOA",
							})}
						</p>

						<div className="flex items-center justify-center h-8">
							<button
								onClick={() => handleDecrease(ticket.id)}
								className="bg-[#00A7E1] px-4 h-full"
							>
								-
							</button>

							<p className="bg-white text-black flex justify-center items-center px-4 h-full">
								{quantities[ticket.id]}
							</p>

							<button
								onClick={() => handleIncrease(ticket.id)}
								className="bg-[#00A7E1] px-4 h-full"
							>
								+
							</button>
						</div>
					</div>
				))}

				<div className="flex flex-col w-full justify-between items-center h-1/4 max-sm:gap-7 max-sm:mt-5 gap-2">
					<div className="flex gap-2 flex-col">
						<p className="flex font-bold gap-1">
							Quantidade de Tickets:
							<span className="font-medium">
								{Object.values(quantities).reduce((sum, qty) => sum + qty, 0)}
							</span>
						</p>

						<p className="flex font-bold gap-1">
							Total:
							<span className="font-medium">
								{total.toLocaleString("pt-PT", {
									style: "currency",
									currency: "AOA",
								})}
							</span>
						</p>
					</div>

					<button
						onClick={handleAdvance}
						className="font-bold w-[300px] h-14 rounded-[4px] bg-[#00A7E1] hover:cursor-pointer flex justify-center items-center"
					>
						Avançar
					</button>
				</div>
			</div>
		</main>
	)
}

export default TicketsPricesEnterprise
