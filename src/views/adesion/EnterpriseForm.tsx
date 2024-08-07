import axios from "axios"
import React, { useEffect, useState } from "react"
import { useForm, Controller, FieldError } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { User } from "../../services/utils/types"

const EnterpriseForm: React.FC = () => {
	const { id } = useParams()
	const [user, setUser] = useState<User | null>(null)
	const navigate = useNavigate()
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm()

	useEffect(() => {
		localStorage.clear()
	}, [])

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

	useEffect(() => {
		fetchUserData(id)
	}, [id])

	const onSubmit = async (data: any) => {
		const formData = { ...data }
		console.log("Dados enviados com sucesso", formData)
		localStorage.setItem("enterpriseFormData", JSON.stringify(formData))
		navigate(`/tickets-datas-enterprise/${user?.uuid}`)
	}

	return (
		<form
			className="text-white flex flex-col gap-10 py-12"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="flex flex-col">
				<h1 className="font-semibold text-[30px]">Formulário de Adesão</h1>
				<p className="text-[#9E9E9E] text-[16px]">Preparado para o evento?</p>
			</div>

			<div className="flex flex-col gap-3">
				<label htmlFor="Nome" className="font-semibold text-[15px]">
					Nome da Empresa
				</label>
				<Controller
					name="nome"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<input
							{...field}
							type="text"
							className={`w-[400px] h-[50px] max-lg:w-auto max-sm:w-auto flex p-4 bg-[#1B223C] rounded-[4px] text-[#9E9E9E] ${
								errors.nome ? "border-red-500" : ""
							}`}
							placeholder="Insira o nome da sua empresa"
						/>
					)}
					rules={{
						required: "Campo obrigatório",
						minLength: { value: 2, message: "Mínimo de 2 caracteres" },
						maxLength: { value: 50, message: "Máximo de 50 caracteres" },
					}}
				/>
				{errors.nome !== undefined && (
					<span className="text-red-500 text-xs">
						{typeof errors.nome === "string"
							? errors.nome
							: (errors.nome as FieldError).message}
					</span>
				)}
			</div>

			<div className="flex flex-col gap-3">
				<label htmlFor="email" className="font-semibold text-[15px]">
					Email da Empresa
				</label>
				<Controller
					name="email"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<input
							{...field}
							type="email"
							className={`w-[400px] max-sm:w-auto max-lg:w-auto h-[50px] flex p-4 bg-[#1B223C] rounded-[4px] text-[#9E9E9E] ${
								errors.email ? "border-red-500" : ""
							}`}
							placeholder="Insira o email da sua empresa"
						/>
					)}
					rules={{
						required: "Campo obrigatório",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: "Email inválido",
						},
					}}
				/>
				{errors.email !== undefined && (
					<span className="text-red-500 text-xs">
						{typeof errors.email === "string"
							? errors.email
							: (errors.email as FieldError).message}
					</span>
				)}
			</div>

			<div className="flex flex-col gap-3">
				<label htmlFor="contacto" className="font-semibold text-[15px]">
					Contacto Telefónico da Empresa
				</label>
				<Controller
					name="contacto"
					control={control}
					defaultValue=""
					render={({ field }) => (
						<input
							{...field}
							type="number"
							className={`w-[400px] h-[50px] max-sm:w-auto max-lg:w-auto flex p-4 bg-[#1B223C] rounded-[4px] text-[#9E9E9E] ${
								errors.contacto ? "border-red-500" : ""
							}`}
							placeholder="Insira o contacto telefónico da sua empresa"
						/>
					)}
					rules={{
						required: "Campo obrigatório",
						min: { value: 100000000, message: "Número inválido" },
						max: { value: 999999999, message: "Número inválido" },
					}}
				/>
				{errors.contacto !== undefined && (
					<span className="text-red-500 text-xs">
						{typeof errors.contacto === "string"
							? errors.contacto
							: (errors.contacto as FieldError).message}
					</span>
				)}
			</div>

			<div className="flex justify-center items-center w-full">
				<button
					type="submit"
					className="max-sm:mb-[100px] font-bold w-[300px] h-[56px] rounded-[4px] bg-[#00A7E1] hover:cursor-pointer flex justify-center items-center"
				>
					Enviar formulário
				</button>
			</div>
		</form>
	)
}

export default EnterpriseForm
