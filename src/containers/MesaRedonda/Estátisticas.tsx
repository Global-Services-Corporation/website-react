const Estatisticas: React.FC = () => {
	const statisticDatas = [
		{ number: "+1000", title: "Participantes" },
		{ number: "+1000", title: "Expositores" },
		{ number: "+1000", title: "Oradores" },
		{ number: "+1000", title: "Apresentadores" },
	]
	return (
		<section className="h-80 text-white flex flex-col w-full justify-around bg-[#3D52D5] px-52 py-12 items-center">
			<h1 className="font-bold text-3xl">Estatística do evento</h1>

			<div className="flex justify-between w-4/5">
				{statisticDatas.map((statistic, index) => (
					<div key={index} className="flex flex-col gap-2 items-center font-bold">
						<p className="text-3xl">{statistic.number}</p>
						<p className="texl-xl">{statistic.title}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Estatisticas
