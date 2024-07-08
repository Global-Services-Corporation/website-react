import { linkIcon } from "../assets"

interface Props {
	img: string
	title: string
	description: string
	navigateTo: string
}

const FormativeActionCard: React.FC<Props> = ({
	img,
	title,
	description,
	navigateTo,
}) => {
	function limitText(text: string, limit: number) {
		if (text.length <= limit) return text
		else return text.substring(0, limit) + "..."
	}
	return (
		<div className="mr-3 w-80 flex flex-col bg-[#0E1937] rounded-xl items-center">
			<img src={img} alt="" className="h-56 w-full object-cover rounded-t-xl " />
			<div className="w-full h-60  px-7 py-7 flex flex-col gap-2.5">
				{" "}
				<h1 className="text-xl">{title}</h1>
				<p className="text-sm text-[#c5c5c5]"> {limitText(description, 150)}</p>
				<a href={`${navigateTo}`} className="flex gap-1 text-xs text-[#30CBE8]">
					Saber mais sobre o curso{" "}
					<span>
						<img src={linkIcon} alt="" />
					</span>
				</a>
			</div>
		</div>
	)
}

export default FormativeActionCard
