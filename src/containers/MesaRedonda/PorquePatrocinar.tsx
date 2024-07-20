const PorquePatrocinar: React.FC = () => {
	return (
		<section className="h-[700px] bg-[#6c6c6c32] text-white flex justify-between gap-36 py-24 px-36 items-center">
			<video
				src=""
				className="object-cover w-[650px] h-[530px] rounded-2xl"
				autoPlay={false}
				muted={true}
			></video>

			<div className="flex flex-col gap-9 w-[550px]">
				<h1 className="text-3xl font-bold text-[#D7AF26]">Porque patrocinar e expor?</h1>

				<p className="text-black">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
					maxime consequatur reprehenderit tempore ratione, omnis unde quisquam
					iusto nemo nesciunt dolores rem! Numquam culpa quo quas.
					Necessitatibus quo nostrum laudantium. omnis unde quisquam iusto nemo
					nesciunt dolores rem! Numquam culpa quo quas. Necessitatibus quo
					nostrum laudantium. omnis unde quisquam iusto nemo nesciunt dolores
					rem! Numquam culpa quo quas. Necessitatibus quo nostrum laudantium.
				</p>
			</div>
		</section>
	)
}

export default PorquePatrocinar
