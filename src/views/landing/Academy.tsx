import { academy1, elipse2 } from "../../assets"
const Academy: React.FC = () => {
    const cardInfo = [
        {
            imagem:academy1,
            title:"Elaboração de Plano de Negócio",
            modalidade: "Presencial | Online",
            tempo: "10h",
        },
        {
            imagem:academy1,
            title:"Elaboração de Plano de Negócio",
            modalidade: "Presencial | Online",
            tempo: "10h",
        },
        {
            imagem:academy1,
            title:"Elaboração de Plano de Negócio",
            modalidade: "Presencial | Online",
            tempo: "10h",
        },
        {
            imagem:academy1,
            title:"Elaboração de Plano de Negócio",
            modalidade: "Presencial | Online",
            tempo: "10h",
        },
        {
            imagem:academy1,
            title:"Elaboração de Plano de Negócio",
            modalidade: "Presencial | Online",
            tempo: "10h",
        },
        {
            imagem:academy1,
            title:"Elaboração de Plano de Negócio",
            modalidade: "Presencial | Online",
            tempo: "10h",
        },
        {
            imagem:academy1,
            title:"Elaboração de Plano de Negócio",
            modalidade: "Presencial | Online",
            tempo: "10h",
        },
        {
            imagem:academy1,
            title:"Elaboração de Plano de Negócio",
            modalidade: "Presencial | Online",
            tempo: "10h",
        },
        {
            imagem:academy1,
            title:"Elaboração de Plano de Negócio",
            modalidade: "Presencial | Online",
            tempo: "10h",
        },
    ]

return(
    <section className="bg-[#001032] flex flex-col p-28 gap-10 justify-center items-center h-auto text-white">
        <img
				src={elipse2}
				className="absolute start-0 -top-[750px] object-cover z-0 rotate-180 animate-pulse"
				alt=""
			/>
            <img
				src={elipse2}
				className="absolute end-0 object-cover z-0 top-[200px] animate-pulse"
				alt=""
			/>
            
        <h1 className="font-semibold text-4xl">Área de Formação</h1>
        <div className="grid grid-cols-3 gap-3">
        {cardInfo.map((info, index) => (
            <div
            key={index}
            className="w-[330px] relative h-[370px] bg-[#0E1937] rounded-2xl">
            <img src={info.imagem} alt="" />
            <div className="w-72 h-32 p-4">
                <p className="font-bold text-xl">{info.title}</p>
                <p className="font-medium text-sm">Modalidade</p>
                <p className="font-light text-gray-500 text-xs"> {info.modalidade} </p>
                <p className="font-medium text-sm">Duração</p>
                <p className="font-light text-xs text-gray-500"> {info.tempo} </p>
            </div>
        <a href="#" className="bg-[#30CBE8] absolute flex items-center justify-center end-5 bottom-4 rounded-xl w-20 h-7 text-xs">Saber mais</a>
        </div>

        ))}
            
        </div>
    </section>
)
}
export default Academy