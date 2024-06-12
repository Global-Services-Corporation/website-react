import React, { useState, useEffect } from "react"
import { backgroundCard, icon, listIcon } from "../assets"
import { useNavigate } from "react-router-dom"

interface Props {
	type: string
	title: string
	subtitle: string
	initialPrice: string
	fetchDetails: () => Promise<string[]>
}

const PriceCard: React.FC<Props> = ({
	type,
	subtitle,
	title,
	initialPrice,
	fetchDetails,
}) => {
	const [price, setPrice] = useState(initialPrice)
	const [details, setDetails] = useState<string[]>([])
	const navigate = useNavigate()

	useEffect(() => {
		fetchDetails()
			.then((details) => setDetails(details))
			.catch((error) => console.error("Erro ao buscar detalhes:", error))
	}, [fetchDetails])

	const onSubmit = async (price: string) => {
		localStorage.setItem("price", JSON.stringify(price))
		console.log(localStorage.getItem("price"))

		navigate(`/personal/`)
	}

	return (
		<div
			className={`w-[400px] z-50 max-2xl:w-[300px] min-h-[600px] max-2xl:min-h-[500px] bg-[#FFFFFF] flex flex-col p-10 ${
				type === "pro" && "relative"
			} gap-5 rounded-[46px] box-border hover:-translate-y-6 hover:ease-in-out hover:duration-1000`}
		>
			{type === "pro" && (
				<img
					src={backgroundCard}
					alt=""
					className="absolute top-0 left-0 rounded-[46px] h-full w-full"
				/>
			)}
			<div
				className={`flex w-full flex-col gap-5 rounded-[46px] ${
					type === "pro" && "z-20"
				} justify-between h-full`}
			>
				<img src={icon} alt="" width={56} height={56} />
				<h1 className="text-[30px] font-bold max-2xl:text-[34px]">{title}</h1>
				<p
					className={`text-[24px] max-2xl:text-[19px] ${
						type === "pro" ? "text-[#FFFFFF]" : "text-[#797878]"
					} `}
				>
					{subtitle}
				</p>
				<h1 className="flex items-center gap-3 font-semibold text-[40px] max-2xl:text-[30px] w-full">
					{price} <span className="text-[40px] max-2xl:text-[25px]">AOA</span>
				</h1>
				<hr />
				<ol className="text-[24px] max-2xl:text-[19px] list-none">
					{details.map((detail, index) => (
						<li key={index} className="flex gap-5">
							<span className="mt-3">
								<img src={listIcon} alt="" />
							</span>
							{detail}
						</li>
					))}
				</ol>
				<button
					onClick={() => onSubmit(price)}
					className={`rounded-[12px] text-[24px] flex items-center justify-center max-2xl:text-[19px] ${
						type === "pro" &&
						"bg-[#1B223C] text-[#fff] hover:bg-white hover:text-black"
					} border-2 w-full max-2xl:w-full h-[60px] border-[#1B223C]`}
				>
					Reservar Ticket
				</button>
			</div>
		</div>
	)
}

export default PriceCard
