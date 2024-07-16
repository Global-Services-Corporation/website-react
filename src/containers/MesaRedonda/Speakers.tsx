const Speakers: React.FC = () => {
    const cardInfo = [
        {
            imagem: "",
            title:"asdsaq"
        },
        {
            imagem: "",
            title:"asdsaq"
        },
         {
            imagem: "",
            title:"asdsaq"
        },
    ]
	return(
        <section className="flex flex-col w-[1514px] justify-center items-center gap-24">
            <p className="font-bold text-4xl">Speakers do Evento</p>
            <div className="flex pb-4">
            {cardInfo.map((info, index)=> (
                
				<div
				key={index}>
					<div className="h-[424px] w-[1314px]">
                    <div className="h-full w-[309px] bg-[#5F5F5F]">
                    <img src={info.imagem} alt="" />
                    <p>{info.title}</p>
                </div>
				</div>
                </div>
			))}
            </div>
           
        </section>
    )
		
}

export default Speakers