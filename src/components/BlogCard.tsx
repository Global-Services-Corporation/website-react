interface Props {
	img: string
	title: string
	description: string
	data: string
	navigateTo: string
}

const BlogCard: React.FC<Props> = ({
	img,
	title,
	description,
	data,
	navigateTo,
}) => {
	function limitText(text: string, limit: number) {
		if (text.length <= limit) return text
		else return text.substring(0, limit) + "..."
	}

	return (
		<a
			href={navigateTo} target='_blank'
			className="w-80 flex flex-col bg-[#ffffff] rounded-xl"
		>
			<img src={img} alt="" className="h-56 object-cover rounded-t-xl" />
			<div className="w-full  px-7 py-7 flex flex-col gap-2.5">
				{" "}
				<h1 className="text-xl">{limitText(title, 50)}</h1>
				<p className="text-sm"> {limitText(description, 150)}</p>
				<p className="text-xs">{data}</p>
			</div>
		</a>
	)
}

export default BlogCard
