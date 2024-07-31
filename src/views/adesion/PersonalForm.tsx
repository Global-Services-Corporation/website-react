
import React, { useEffect } from "react"
import { useForm, Controller, FieldError } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { mesaRedonda } from "../../assets"
import BannerMR from "../../../public/BannerMRGSC.png"

const PersonalForm: React.FC = () => {
	const navigate = useNavigate()
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm()

	useEffect(() => {
		localStorage.clear()
	}, [])
	
	const onSubmit = async (data: object) => {
		try {
			const formData = { ...data }
			console.log("Dados enviados com sucesso", formData)
			localStorage.setItem("personalFormData", JSON.stringify(formData))
			navigate(`/tickets-datas`)
		} catch (error) {
			console.error("Erro ao enviar formulário:", error)
		}
	}

	return (
		<section className="flex h-screen">
			<div className="flex flex-col w-1/2 h-full">
				<nav className="px-8 py-4 w-full">
					<a href="/">
						<img src={mesaRedonda} alt="logo-mesa-redonda" className="w-18" />
					</a>
				</nav>
				<div className="flex flex-col gap-10 py-10 px-28">
					<div className="flex flex-col">
						<h1 className="font-semibold text-[30px] text-[#FF9800]">
							Formulário de Adesão
						</h1>
						<p className="text-[#000000] text-[16px]">
							Preparado para o evento?
						</p>
					</div>
					<form
						className="text-white flex flex-col gap-10 py-9 items-center"
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="flex flex-col gap-3">
							<label
								htmlFor="nome"
								className="font-semibold text-[15px] text-[#000000]"
							>
								Nome
							</label>
							<Controller
								name="nome"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<input
										{...field}
										type="text"
										className={`w-[400px] h-[50px] max-lg:w-auto max-sm:w-auto flex p-4 bg-[#6c6c6c0f] rounded-[4px] text-[#9E9E9E] ${
											errors.nome ? "border-red-500" : ""
										}`}
										placeholder="Insira o seu nome"
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
							<label
								htmlFor="email"
								className="font-semibold text-[15px] text-[#000000]"
							>
								Email
							</label>
							<Controller
								name="email"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<input
										{...field}
										type="email"
										className={`w-[400px] max-sm:w-auto max-lg:w-auto h-[50px] flex p-4 bg-[#6c6c6c0f] rounded-[4px] text-[#9E9E9E] ${
											errors.email ? "border-red-500" : ""
										}`}
										placeholder="Insira o seu email"
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
							<label
								htmlFor="contacto"
								className="font-semibold text-[15px] text-[#000000]"
							>
								Contacto Telefónico
							</label>
							<Controller
								name="contacto"
								control={control}
								defaultValue=""
								render={({ field }) => (
									<input
										{...field}
										type="number"
										className={`w-[400px] h-[50px] max-sm:w-auto max-lg:w-auto flex p-4 bg-[#6c6c6c0f] rounded-[4px] text-[#4F4F4F] ${
											errors.contacto ? "border-red-500" : ""
										}`}
										placeholder="Insira o seu contacto telefónico"
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
								className="max-sm:mb-[100px] font-bold w-[300px] h-[56px] rounded-[4px] bg-[#FF9800] hover:cursor-pointer flex justify-center items-center"
							>
								Enviar formulário
							</button>
						</div>
					</form>
				</div>
			</div>
			<div className="flex flex-col bg-yellow-700 w-1/2 h-full items-center">
				<img src={BannerMR} alt="banner-mesa-redonda " className=""/>
			</div>
		</section>
	)
}

export default PersonalForm
