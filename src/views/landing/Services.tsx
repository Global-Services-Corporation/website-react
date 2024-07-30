import { useState } from "react"
import { elipse2 } from "../../assets"
import {
	acidenteIcon,
	assaltoIcon,
	aviaoIcon,
	camiaoIcon,
	carroIcon,
	coneIcon,
	saudeIcon,
	searchIcon,
	studentsIcon,
} from "../../assets/insurance"

import "./landing.css"

const InsurancePage: React.FC = () => {
	const [view, setView] = useState("particular")
	const [modalOpen, setModalOpen] = useState(false)

	const insuranceCard = [
		{ icon: saudeIcon, title: "Saúde" },
		{ icon: aviaoIcon, title: "Viagem" },
		{ icon: carroIcon, title: "Automóvel" },
		{ icon: acidenteIcon, title: "Acidentes Pessoais" },
		{ icon: coneIcon, title: "Acidentes de Trabalho" },
		{ icon: assaltoIcon, title: "Proteção Contra Assaltos" },
		{ icon: studentsIcon, title: "Escolar" },
		{ icon: camiaoIcon, title: "Transporte de Cargas/Mercadorias" },
	]

	const renderParticular = () => {
		return (
			<div className="w-full grid grid-cols-4 gap-x-8 h-screen">
				{insuranceCard.map((card, index) => (
					<div
						key={index}
						className="text-white h-60 w-48 bg-[#1B223C] hover:bg-[rgba(27,34,60,0.61)] flex flex-col rounded-xl px-8 items-center justify-center gap-3 mx-auto cursor-pointer"
					>
						<img src={card.icon} alt="Icon" className="w-16" />
						<p className="text-center">{card.title}</p>
					</div>
				))}
			</div>
		)
	}

	const renderEmpresarial = () => {
		return (
			<div className="w-full grid grid-cols-4 gap-x-8 h-screen">
				{insuranceCard.map((card, index) => (
					<div
						key={index}
						onClick={() => setModalOpen(true)}
						className="text-white h-60 w-48 bg-[#065CAB] hover:bg-[#065baba8] flex flex-col rounded-xl px-8 items-center justify-center gap-3 mx-auto cursor-pointer"
					>
						<img src={card.icon} alt="Icon" className="w-16" />
						<p className="text-center">{card.title}</p>
					</div>
				))}
			</div>
		)
	}

	return (
		<div
			className="font-interTight bg-[#001032] 
         text-white flex flex-col justify-center items-center relative py-28"
		>
			<img
				src={elipse2}
				className="absolute start-0 -top-[750px] object-cover z-0 rotate-180 animate-pulse"
				alt=""
			/>

			<div className="w-4/5 flex flex-col gap-4 z-40">
				<nav className="flex justify-between p-2">
					<div className="flex w-52 justify-between items-center">
						<button
							className={`text-xl cursor-pointer ${
								view === "particular" && "border-b-4 border-b-[#30CBE8]"
							}`}
							onClick={() => setView("particular")}
						>
							Particular
						</button>
						<button
							className={`text-xl cursor-pointer ${
								view === "empresarial" && "border-b-4 border-b-[#30CBE8]"
							}`}
							onClick={() => setView("empresarial")}
						>
							Empresarial
						</button>
					</div>

					<div className="bg-[rgba(197,197,197,0.2)] rounded-3xl h-11 flex items-center w-96 px-5">
						<input
							type="search"
							name="pesquisa"
							id="pesquisa"
							placeholder="Pesquisar seguros..."
							className="bg-transparent w-full"
						/>

						<button className="pl-4">
							{" "}
							<img src={searchIcon} alt="" />
						</button>
					</div>
				</nav>

				<div className="py-4 h-screen overflow-y-auto flex w-full items-center overflow-x-hidden scrollbar-custom">
					{view === "particular" && renderParticular()}
					{view === "empresarial" && renderEmpresarial()}
				</div>
			</div>

			<img
				src={elipse2}
				className="absolute end-0 object-cover z-0 -bottom-[300px] animate-pulse"
				alt=""
			/>

			{/*
			<img
				src={elipse2}
				className="absolute start-0 object-cover z-0 top-[1470px] rotate-180 animate-pulse"
				alt=""
			/>

			<img
				src={elipse2}
				alt=""
				className="absolute end-0 top-[2470px] object-cover animate-pulse"
			/>

			<img
				src={elipse2}
				className="absolute start-0 object-cover z-0 top-[3470px] rotate-180 animate-pulse"
				alt=""
			/> */}

			{modalOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<form className="w-4/5 h-4/5 bg-[#001032]"></form>
				</div>
			)}
		</div>
	)
}

export default InsurancePage
