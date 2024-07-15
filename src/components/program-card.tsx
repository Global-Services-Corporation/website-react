interface Props {
	image: string
	title?: string
	description: string
	link?: string
}

const ProgramCard: React.FC<Props> = ({ image, description, title, link }) => {
	function limitText(text: string, limit: number) {
		if (text.length <= limit) return text
		else return text.substring(0, limit) + "..."
	}
	return (
		<div
			className={`flex flex-col ${
				!title && "max-sm:hidden"
			} items-center max-sm:w-[370px] max-2xl:w-[300px] w-[350px] max-2xl:h-[450px] h-[500px]  rounded-[16px] bg-[#1B223C] max-2xl:gap-0`}
		>
			<div className={`w-full ${title ? "h-56" : "h-full"} `}>
				<img
					src={image}
					alt="Illustration Card"
					className="object-cover w-full h-56 rounded-[16px]"
				/>
			</div>

			<div
				className={`${
					title ? "flex flex-col h-[272px] px-7 py-5 gap-2 justify-between" : "hidden"
				}`}
			>
				<div className="flex flex-col justify-between gap-2">
					{title ? (
						<h1 className="text-white text-[22px] max-2xl:text-[18px] font-bold">
							{title}
						</h1>
					) : (
						<></>
					)}
					<p className="text-xs text-[#c5c5c5]">
						{limitText(description, 150)}
					</p>
				</div>
				{link ? (
					<a href={link} className=" text-xs text-[#30CBE8]">
						Saiba Mais...
					</a>
				) : (
					<></>
				)}
			</div>
		</div>
	)
}

export default ProgramCard
