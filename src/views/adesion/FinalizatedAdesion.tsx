import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate, Link } from "react-router-dom"
import { logoDoc, logoLyrics } from "../../assets"
import Loading from "./Loading"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

interface PersonalData {
	nome: string
	email: string
	contacto: string
}

interface Ticket {
	label: string
	quantity: number
}

interface TicketData {
	total: number
	totalQuantity: number
	selectedTickets: Ticket[]
}

const FinalizatedAdesion: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const navigate = useNavigate()
	const [isLoading, setIsLoading] = useState(false)
	const [personalData, setPersonalData] = useState<PersonalData | null>(null)
	const [ticketData, setTicketData] = useState<TicketData | null>(null)
	const [pedidoEnviado, setPedidoEnviado] = useState(false)
	const [okClicked, setOkClicked] = useState(false)

	useEffect(() => {
		const personalFormData = localStorage.getItem("personalFormData")
		const ticketFormData = localStorage.getItem("accumulatedTicketData")

		if (personalFormData) {
			setPersonalData(JSON.parse(personalFormData))
		}

		if (ticketFormData) {
			setTicketData(JSON.parse(ticketFormData))
		}
	}, [id])

	const handleFinalizar = async () => {
		setIsLoading(true)

		if (personalData && ticketData) {
			const data = {
				name: personalData.nome,
				email: personalData.email,
				price: ticketData.total.toLocaleString("pt-PT", {
					style: "currency",
					currency: "AOA",
				}),
				contact: personalData.contacto,
				ticketsData: JSON.stringify(ticketData),
			}

			try {
				await axios.post("https://gsc.api.unocura.ao/send-email", data)
				setPedidoEnviado(true)
			} catch (error) {
				console.error("Erro ao enviar pedido:", error)
			}

			gerarPDF()
		}

		setIsLoading(false)
	}

	const gerarPDF = () => {
		const doc = new jsPDF()

		if (personalData && ticketData) {
			doc.addImage(logoDoc, "PNG", 15, 15, 35, 15)
			doc.setFontSize(10)

			const pageWidth = doc.internal.pageSize.width

			doc.text(`Nome: ${personalData.nome}`, pageWidth - 20, 25, {
				align: "right",
			})
			doc.text(`Email: ${personalData.email}`, pageWidth - 20, 30, {
				align: "right",
			})
			doc.text(`Contacto: ${personalData.contacto}`, pageWidth - 20, 35, {
				align: "right",
			})

			const ticketList =
				ticketData.selectedTickets?.map((ticket) => ticket.label) || []

			autoTable(doc, {
				startY: 50,
				head: [["Evento", "Plano", "Qtd de Tickets", "Total"]],
				body: [
					[
						"BUSINESS AFTER WORK - Líder Tech 2024",
						ticketList.join("\n"),
						`${ticketData.totalQuantity}`,
						`${ticketData.total.toLocaleString("pt-PT", {
							style: "currency",
							currency: "AOA",
						})}`,
					],
				],
				theme: "grid",
				headStyles: { fontSize: 10, fillColor: [0, 102, 204] },
				bodyStyles: { fontSize: 10 },
			})

			doc.setFontSize(12)
			doc.setFont("helvetica", "bold")
			doc.text(
				"PASSO A PASSO PARA O PAGAMENTO:",
				15,
				(doc as any).autoTable.previous.finalY + 10
			)

			doc.setFontSize(10)
			doc.setFont("helvetica", "normal")
			doc.text(
				"1. Após o pagamento efetuado com sucesso o participante irá se dirigir ao HCTA (Hotel de Convenções Talatona) \n para obter a credencial de acesso ao evento, deverá fazer-se acompanhar do NIF ou BI cadastrado no formulário.",
				15,
				(doc as any).autoTable.previous.finalY + 20
			)
			doc.text(
				"2. A credencial poderá ser levantada apenas no local indicado, entre 10 a 12 de Junho de 2024 ou ainda no primeiro \n dia do evento no secretariado.",
				15,
				(doc as any).autoTable.previous.finalY + 30
			)

			const linkText = "https://api.whatsapp.com/send/?phone=+244941064919"
			doc.text(
				"3. Após submeter a sua inscrição, terá que efetuar a transferência Bancária, enviar o comprovativo para o seguinte \n número do WhatsApp:",
				15,
				(doc as any).autoTable.previous.finalY + 40
			)

			doc.setFontSize(10)
			doc.setTextColor(0, 0, 255)
			doc.textWithLink(
				"+244 941 064 919",
				15,
				(doc as any).autoTable.previous.finalY + 50,

				{ url: linkText }
			)
			doc.setTextColor(0, 0, 0)
			doc.setFontSize(10)

			autoTable(doc, {
				startY: (doc as any).autoTable.previous.finalY + 60,
				head: [["Forma de Pagamento:", "Transferência Bancária"]],
				body: [
					["Entidade:", "GLOBAL SC PRESTACAO SERVICOS LDA"],
					[
						"IBAN (Pagamento em Kwanza):",
						"0040.0000.0066.0285.1016.3 - Banco BAI",
					],
					[
						"Montante:",
						`${ticketData.total.toLocaleString("pt-PT", {
							style: "currency",
							currency: "AOA",
						})}`,
					],
				],
				theme: "plain",
				styles: { fontSize: 10, cellPadding: 3 },
				headStyles: { fillColor: [220, 220, 220] },
				didParseCell: function (data) {
					if (data.row.index === 1 && data.section === "body") {
						data.cell.styles.fillColor = [220, 220, 220]
					}
				},
			})

			doc.setFontSize(8)
			doc.text(
				"Documento Processado por Computador.",
				80,
				(doc as any).autoTable.previous.finalY + 10
			)

			doc.save("BusinessAfterWork2024_Ticket.pdf")
			setPedidoEnviado(true)
		}
	}

	const handleOkClick = () => {
		localStorage.removeItem("accumulatedTicketData")
		setOkClicked(true)
		navigate(`/personal/`)
	}

	if (isLoading) {
		return <Loading />
	}

	return (
		<main className="h-screen relative bg-[#001032] flex flex-col items-center overflow-hidden max-sm:overflow-y-auto">
			<header className="w-full py-4 px-6 z-10 flex items-center justify-between">
				<a href={"/"}>
					<img src={logoLyrics} alt="Logotipo da Global Services Corporation" />
				</a>

				<Link
					to={`/tickets-datas/`}
					className="text-white font-bold"
					onClick={() => {
						localStorage.removeItem("accumulatedTicketData")
					}}
				>
					Cancelar
				</Link>
			</header>

			<section className="text-white flex flex-col z-50 h-3/4 w-2/3 max-sm:w-[90%] rounded-md justify-around p-10 bg-[#1B223C] my-auto items-center">
				<h1 className="text-[35px] text-white font-semibold text-center max-sm:text-[25px]">
					FINALIZAR RESERVA
				</h1>

				<div className="flex items-center flex-col gap-1 w-2/3 text-center">
					<p className="text-lg">
						Após confirmada a reserva, clique em{" "}
						<span className="font-bold">FINALIZAR</span> para receber as
						instruções de pagamento.
					</p>
				</div>

				<div className="w-[60%] flex flex-col items-center gap-8">
					<button
						className="max-sm:w-full font-bold w-[300px] h-14 rounded-[4px] bg-[#00A7E1] hover:cursor-pointer flex justify-center items-center"
						onClick={handleFinalizar}
					>
						Finalizar
					</button>
				</div>
			</section>

			{pedidoEnviado && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="bg-white p-6 rounded-md text-center">
						<p className="mb-4">Pedido enviado!</p>
						<button
							className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
							onClick={handleOkClick}
						>
							OK
						</button>
					</div>
				</div>
			)}
		</main>
	)
}

export default FinalizatedAdesion
