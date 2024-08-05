import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { logoDoc, mesaRedonda } from "../../assets"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import { fundoBlue2, logoMRWhite } from "../../assets/mesa-redonda"

interface PersonalData {
	nome: string
	email: string
	contacto: string
	nif: string
}

interface Ticket {
	label: string
}

interface TicketData {
	total: number
	totalQuantity: number
	selectedTickets: Ticket[]
}

const FinalizatedAdesion: React.FC = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const [personalData, setPersonalData] = useState<PersonalData | null>(null)
	const [ticketData, setTicketData] = useState<TicketData | null>(null)
	const [pedidoEnviado, setPedidoEnviado] = useState(false)
	const [okClicked, setOkClicked] = useState(false)

	useEffect(() => {
		const personalFormData = localStorage.getItem("personalFormData")
		const ticketFormData = localStorage.getItem("accumulatedTicketData")

		console.log("personalFormData:", personalFormData)
		console.log("ticketFormData:", ticketFormData)

		if (personalFormData) {
			setPersonalData(JSON.parse(personalFormData))
		}

		if (ticketFormData) {
			setTicketData(JSON.parse(ticketFormData))
		}
	}, [id])

	const handleFinalizar = async () => {
		console.log("handleFinalizar called")
		console.log("personalData:", personalData)
		console.log("ticketData:", ticketData)

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
			gerarPDF()
			console.log("Data prepared for PDF generation:", data)
			setPedidoEnviado(true)
		} else {
			console.error("personalData or ticketData is null")
		}
	}

	const gerarPDF = () => {
		const doc = new jsPDF()

		if (personalData && ticketData) {
			doc.addImage(logoDoc, "PNG", 15, 20, 35, 15)
			doc.setFontSize(10)

			const pageWidth = doc.internal.pageSize.width
			doc.text(`NIF: ${personalData.nif}`, pageWidth - 20, 25, {
				align: "right",
			})
			doc.text(`Nome: ${personalData.nome}`, pageWidth - 20, 30, {
				align: "right",
			})
			doc.text(`Contacto: ${personalData.contacto}`, pageWidth - 20, 35, {
				align: "right",
			})
			doc.text(`Email: ${personalData.email}`, pageWidth - 20, 40, {
				align: "right",
			})

			const ticketList =
				ticketData.selectedTickets?.map((ticket) => ticket.label) || []

			autoTable(doc, {
				startY: 50,
				head: [["Evento", "Plano", "Qtd de Tickets", "Total"]],
				body: [
					[
						"Mesa Redonda com os CEO's",
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

			doc.setFontSize(11)
			doc.setFont("helvetica", "bold")
			doc.text(
				"PASSO A PASSO PARA O PAGAMENTO:",
				15,
				(doc as any).autoTable.previous.finalY + 10
			)

			doc.setFontSize(10)
			doc.setFont("helvetica", "normal")
			const linkText = "https://api.whatsapp.com/send/?phone=244941064919"
			doc.text(
				"1. Após submeter a sua inscrição, terá que efetuar a transferência Bancária, enviar o comprovativo para o seguinte \n número do WhatsApp (Clique no número):",
				15,
				(doc as any).autoTable.previous.finalY + 20
			)
			doc.setFontSize(10)
			doc.setTextColor(0, 0, 255)
			doc.textWithLink(
				"+244941064919",
				15,
				(doc as any).autoTable.previous.finalY + 30,

				{ url: linkText }
			)

			doc.setTextColor(0, 0, 0)
			doc.text(
				"2. Após o pagamento efetuado com sucesso o participante irá se dirigir ao HCTA (Hotel de Convenções Talatona) \n para obter a credencial  de acesso ao evento, deverá fazer-se acompanhar do NIF ou BI cadastrado no formulário.",
				15,
				(doc as any).autoTable.previous.finalY + 37
			)
			doc.text(
				"3.  A credencial poderá ser levantada apenas no local indicado, no dia 18 de Julho de 2024 ou ainda duas horas \n antes do evento no balcão.",
				15,
				(doc as any).autoTable.previous.finalY + 50
			)

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
		}
	}

	const handleOkClick = () => {
		localStorage.removeItem("accumulatedTicketData")
		setOkClicked(true)
		navigate(`/personal-form`)
	}

	return (
		<main className="max-sm:h-screen relative ">
			<img src={fundoBlue2} alt="" className="w-full h-full object-cover" />
			<div className="flex flex-col items-center overflow-hidden max-sm:overflow-y-auto absolute top-0 left-0 w-full h-full">
				<header className="w-full py-4 px-6 z-10 flex items-center justify-between">
					<a href={"/"}>
						<img
							src={logoMRWhite}
							alt="Logotipo da Global Services Corporation"
							className="w-8/12"
						/>
					</a>

					<Link
						to={`/tickets-datas`}
						className="font-bold"
						onClick={() => {
							localStorage.removeItem("accumulatedTicketData")
						}}
					>
						Cancelar
					</Link>
				</header>

				<section className="flex flex-col z-50 h-3/4 w-2/3 max-sm:w-full rounded-md justify-around p-10 bg-[#000760] my-auto items-center">
					<h1 className="text-[35px] text-[#FF9800] font-semibold text-center max-sm:text-[25px]">
						FINALIZAR RESERVA
					</h1>

					<div className="flex items-center flex-col gap-1 w-2/3 text-center">
						<p className="text-lg text-white">
							Após confirmada a reserva, clique em{" "}
							<span className="font-bold">FINALIZAR</span> para receber as
							instruções de pagamento.
						</p>
					</div>

					<div className="w-[60%] flex flex-col items-center gap-8">
						<button
							className="max-sm:w-full font-bold w-[300px] h-14 rounded-[4px] bg-[#FF9800] hover:bg-[#ff990072] text-white hover:cursor-pointer flex justify-center items-center"
							onClick={handleFinalizar}
						>
							Finalizar
						</button>
					</div>
				</section>

				{pedidoEnviado && (
					<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
						<div className="bg-[#000760] p-6 rounded-md w-1/4 h-1/3 text-center flex items-center justify-center flex-col gap-8 max-lg:h-1/2 max-lg:w-4/5">
							<p className=" text-white text-xl">
								Seu pedido foi enviado, {personalData?.nome}.
							</p>
							<button
								className="px-4 py-2 bg-[#FF9800] rounded hover:bg-[#ff99007f] text-white w-1/2 h-12"
								onClick={handleOkClick}
							>
								OK
							</button>
						</div>
					</div>
				)}
			</div>
		</main>
	)
}

export default FinalizatedAdesion
