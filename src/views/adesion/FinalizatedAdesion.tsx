import axios from "axios"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { bgConfirmAdesion, logoLyrics } from "../../assets"

import { User } from "../../services/utils/types"

const FinalizatedAdesion: React.FC = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const [user, setUser] = useState<User | null>(null)
	const [file, setFile] = useState<File | null>(null) // Adicione o estado para o arquivo

	const [personalData, setPersonalData] = useState<any>(null)
	// Remova os estados de personalData e enterpriseData se não forem usados

	useEffect(() => {
		fetchUserData(id)
		const personalFormData = localStorage.getItem("personalFormData")

		console.log("Dados Pessoais:", personalFormData)

		if (personalFormData) {
			setPersonalData(JSON.parse(personalFormData))
		}
	}, [id])
	useEffect(() => {
		fetchUserData(id)
	}, [id])

	const fetchUserData = async (userId: string | undefined) => {
		try {
			const response = await axios.get(`http://gsc.api.unocura.ao/user/${userId}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			})
			setUser(response.data)
		} catch (error) {
			console.error("Erro ao carregar dados do usuário:", error)
		}
	}

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const fileList = event.target.files
		if (fileList && fileList.length > 0) {
			setFile(fileList[0])
		}
	}

	const handleFinalizar = async () => {
		if (!file || !personalData) {
			console.error("Nenhum arquivo selecionado ou dados pessoais ausentes.")
			return
		}

		const formData = new FormData()
		formData.append("doc", file)

		// Verifique se os dados pessoais estão disponíveis e, em seguida, adicione-os ao FormData
		formData.append("name", personalData.nome)
		formData.append("email", personalData.email)
		formData.append("price", personalData.price) // Verifique se o campo correto é 'price'
		formData.append("contact", personalData.contacto)

		try {
			const response = await axios.post(
				`https://gsc.api.unocura.ao/send-email`,
				formData,
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
						"Content-Type": "multipart/form-data", // Indicando que a requisição é multipart/form-data
					},
				}
			)
			console.log("Resposta do servidor:", response.data)
			alert("Reserva enviada, responderemos o mais breve possível!")
			navigate(`/personal/${user?.uuid}`)
		} catch (error) {
			console.error("Erro ao enviar formulário:", error)
		}
	}

	return (
		<main className="w-screen h-screen relative bg-[#141416] flex flex-col items-center overflow-hidden max-sm:overflow-y-auto">
			<header className="w-full py-4 px-6 z-10">
				<a href={user ? `/${user?.uuid}` : "/"}>
					<img src={logoLyrics} alt="Logotipo da Global Services Corporation" />
				</a>
			</header>

			<img
				src={bgConfirmAdesion}
				alt=""
				className="absolute w-full h-full object-cover top-0"
			/>

			<section className="flex flex-col text-white z-50 items-center gap-6 w-[85%] max-h-[800px] h-[450px] my-auto justify-around">
				<h1 className="text-[35px] font-semibold text-center max-sm:text-[25px]">
					Finalizar reserva
				</h1>

				<p className="text-lg font-semibold text-center max-sm:text-[25px]">
					IBAN: 0000 0454 9943 1664 3
				</p>

				<form className="w-[60%] max-sm:w-[80%] flex flex-col items-center h-40 justify-around max-sm:flex max-sm:flex-col gap-4">
					<p>Descarregar Comprovativo</p>

					<input
						type="file"
						id="doc"
						onChange={handleFileChange}
						className={`w-[400px] h-[50px] max-lg:w-auto max-sm:w-auto flex p-4 bg-[#1F2126] rounded-[4px] text-[#9E9E9E]`}
					/>
				</form>

				<div className="w-[60%] flex flex-col items-center gap-8">
					<button
						className="max-sm:mb-[100px] font-bold w-[300px] h-[56px] rounded-[4px] bg-[#00A7E1] hover:cursor-pointer flex justify-center items-center"
						onClick={handleFinalizar}
					>
						Finalizar
					</button>
				</div>
			</section>
		</main>
	)
}

export default FinalizatedAdesion
