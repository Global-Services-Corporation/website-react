import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { mesaRedonda } from "../../assets"

const ConfirmAdesionPersonal: React.FC = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [personalData, setPersonalData] = useState<any>(null)
	const [ticketsData, setTicketsData] = useState<any>(null)

	useEffect(() => {
		const personalFormData = localStorage.getItem("personalFormData")
		const personalTicketsData = localStorage.getItem("accumulatedTicketData")

		if (personalFormData) {
			setPersonalData(JSON.parse(personalFormData))
		}

		if (personalTicketsData) {
			setTicketsData(JSON.parse(personalTicketsData))
		}
	}, [id])

	const handleAvancar = () => {
		navigate(`/finalizated`)
	}

	const handleCancelar = () => {
		localStorage.removeItem("accumulatedTicketData")
		navigate(`/tickets-datas`)
	}

	return (
		<main className="relative bg-[#ffffff] flex flex-col items-center max-sm:overflow-y-auto">
			<header className="w-full py-4 px-6 z-10 flex items-center justify-between">
				<a href={"/"}>
					<img
						src={mesaRedonda}
						alt="Logotipo da Global Services Corporation"
					/>
				</a>

				<button onClick={handleCancelar} className=" font-bold">
					Cancelar
				</button>
			</header>

			<section className=" max-sm:text-sm flex flex-col z-50 w-2/3 gap-4 my-12 rounded-md justify-between items-center p-10 bg-[#EEEDED] max-sm:gap-2 max-sm:w-full max-sm:h-auto max-sm:m-0">
				<h1 className="text-[35px] font-semibold text-center max-sm:text-[25px] ">
					CONFIRMAR DADOS
				</h1>

				<form className="w-[90%] max-sm:w-[95%] grid grid-cols-2 grid-rows-2 max-sm:flex max-sm:flex-col gap-4">
					<div className="flex flex-col gap-3 items-center">
						<label htmlFor="" className="text-lg font-bold text-[#FF9800]">
							Nome
						</label>

						<p className="bg-transparent bg-[#171818] h-[50px]  text-[14px] w-full shadow-inner shadow-black rounded-md flex justify-center items-center px-4 font-bold">
							{personalData?.nome || ""}
						</p>
					</div>

					<div className="flex flex-col gap-3 items-center">
						<label htmlFor="" className="text-lg font-bold text-[#FF9800]">
							Email
						</label>

						<p className="bg-transparent bg-[#171818] h-[50px]  text-[14px] w-full shadow-inner shadow-black rounded-md flex justify-center items-center px-4 font-bold">
							{personalData?.email || ""}
						</p>
					</div>

					<div className="flex flex-col gap-3 items-center ">
						<label htmlFor="" className="text-lg font-bold text-[#FF9800]">
							Número telefónico
						</label>
						<p className="bg-transparent bg-[#171818] h-[50px]  text-[14px] w-full shadow-inner shadow-black rounded-md flex justify-center items-center px-4 font-bold">
							{personalData?.contacto || ""}
						</p>
					</div>

					<div className="flex flex-col gap-3 items-center ">
						<label htmlFor="" className="text-lg font-bold text-[#FF9800]">
							Quantidade de Tickets
						</label>
						<p className="bg-transparent bg-[#171818] h-[50px]  text-[14px] w-full shadow-inner shadow-black rounded-md flex justify-center items-center px-4 font-bold">
							{ticketsData?.totalQuantity || ""}
						</p>
					</div>

					<div className="flex flex-col gap-3 items-center col-span-2">
						<label htmlFor="" className="text-lg font-bold text-[#FF9800]">
							Detalhes dos Tickets
						</label>
						<ul className="bg-transparent bg-[#171818]  text-[14px] w-full shadow-inner shadow-black rounded-md p-4 list-disc h-12 overflow-y-auto">
							{ticketsData?.selectedTickets?.length > 0 ? (
								ticketsData.selectedTickets.map((ticket: any) => (
									<li key={ticket.id} className="flex justify-between">
										<span>{ticket.label}</span>
										<span>{`Quantidade: ${ticket.quantity}`}</span>
									</li>
								))
							) : (
								<li>Nenhum ticket selecionado</li>
							)}
						</ul>
					</div>

					<div className="flex flex-col gap-3 items-center col-span-2">
						<label htmlFor="" className="text-lg font-bold text-[#FF9800]">
							Total
						</label>
						<p className="bg-transparent bg-[#171818] h-[50px]  text-[14px] w-full shadow-inner shadow-black rounded-md flex justify-center items-center px-4 font-bold">
							{`${ticketsData?.total.toLocaleString("pt-PT", {
								style: "currency",
								currency: "AOA",
							})}` || "Nenhum"}
						</p>
					</div>
				</form>

				<div className="w-[60%] flex flex-col items-center gap-8 max-sm:p-4">
					<button
						className="max-sm:mb-[100px] font-bold w-[300px] max-sm:w-[220px] max-sm:h-[50px] h-[56px] rounded-[4px] bg-[#FF9800] hover:cursor-pointer flex justify-center items-center"
						onClick={handleAvancar}
					>
						Avançar
					</button>
				</div>
			</section>
		</main>
	)
}

export default ConfirmAdesionPersonal
