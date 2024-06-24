import { seguros, eventosicon, academiaicon } from "../../assets";

const Services: React.FC = () => {
  const cardInfo = [
    {
      icon: seguros,
      title: "Seguros",
      description: "Começa aderindo o serviço.",
      buttonTitle: "Solicitar",
    },
    {
      icon: eventosicon,
      title: "Eventos",
      description: "Começa aderindo o serviço.",
      buttonTitle: "Aderir",
    },
    {
      icon: academiaicon,
      title: "Academia",
      description: "Começa aderindo o serviço.",
      buttonTitle: "Inscreva-se",
    },
  ];

  return (
    <section className="w-4/5 pb-32 relative flex flex-col gap-12 z-40">
      <p className="font-bold text-4xl">Adira já aos nossos serviços!</p>
      <marquee>
        <div className="w-full h-full flex gap-8">
          {cardInfo.map((info, index) => (
            <div
              key={index}
              className="w-[363px] h-[187px] flex relative p-8 bg-[#0E1937] rounded-[24px]"
            >
              <img src={info.icon} alt="" className="absolute object-none" />
              <div className="flex flex-col absolute start-28">
                <p className="text-[#30CBE8] font-semibold text-[20.88px]">
                  {info.title}
                </p>
                <p className="text-[#C5C5C5] text-[16.71px]">
                  {info.description}
                </p>
              </div>

              <button className="bg-[#30CBE8] w-[116px] h-[39px] end-10 bottom-8 absolute rounded-[8px] font-semibold">
                {info.buttonTitle}
              </button>
            </div>
          ))}
        </div>
      </marquee>
    </section>
  );
};

export default Services;
