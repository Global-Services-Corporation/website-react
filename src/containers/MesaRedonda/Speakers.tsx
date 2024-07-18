import { mesaRedonda } from "../../assets";

const Speakers: React.FC = () => {
  const cardInfo = [
    {
      nome: "",
      imagem: "",
      title: "",
    },
    {
      nome: "",
      imagem: "",
      title: "",
    },
    {
      nome: "",
      imagem: "",
      title: "",
    },
    {
      nome: "",
      imagem: "",
      title: "",
    },
  ];

  return (
    <section className="flex flex-col w-full p-6 justify-center items-center gap-24">
      <p className="font-bold text-4xl">Speakers do Evento</p>
      <div className="flex pb-4 ">
        <div className="h-[424px] items-center justify-center w-[1314px] flex gap-4">
          {cardInfo.map((info, index) => (
            <div
              key={index}
              className="h-full w-[335px] rounded-xl bg-[#5F5F5F]"
            >
              <div className="h-48 w-full flex text-white bg-[#065CAB] rounded-xl">
                <div>
                  <img src={mesaRedonda} alt="" className="h-20" />
                  <p className="px-5 w-24 h-8 text-[8px]">Leadership inovation tech in oil gas sector</p>
                </div>
                <div className="py-4 px-5">
                  <p className="font-bold text-sm">Nov.2024 - Luanda.Angola</p>
                  <p className="text-xs">Hotel de convenções Talatona</p>
                </div>
              </div>
              <p>{info.title}</p>
              <p>{info.imagem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
