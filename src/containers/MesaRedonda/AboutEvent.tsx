import {
  aboutEvent,
  agenda,
  participar,
  expor,
  patrocinar,
  speaker,
} from "../../assets";

const AboutEvent: React.FC = () => {
  const cardInfo = [
    {
      imagem: agenda,
      title: "Agenda",
    },
    {
      imagem: participar,
      title: "Participar",
    },
    {
      imagem: expor,
      title: "Expor",
    },
    {
      imagem: patrocinar,
      title: "Patrocinar",
    },
    {
      imagem: speaker,
      title: "Speaker",
    },
  ];
  return (
    <section className="w-full h-[1000px] justify-between flex items-center flex-col px-16 py-28">
      <div className="flex gap-16">
        {cardInfo.map((info, index) => (
          <a key={index} href="">
            <div className="flex flex-col items-center gap-3">
              <img src={info.imagem} alt="" className="h-16 w-16" />
              <p className="font-semibold text-xl text-[#1355E9]">
                {info.title}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="flex justify-between h-[530px] w-full ">
        <img
          src={aboutEvent}
          alt=""
          className="object-cover w-[650px] h-full rounded-2xl"
        />
        <div className="gap-5 flex flex-col h-full justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-3xl">Sobre</h1>
            <h2 className="font-semibold text-3xl">Mesa Redonda com CEO's</h2>
            <p className="h-64 w-[534px] text-justify">
              Este evento único destaca a convergência entre liderança
              visionária e avanços tecnológicos que estão transformando o setor
              de óleo e gás. Ao longo da exposição, você explorará como líderes
              do setor estão utilizando tecnologias de ponta para enfrentar
              desafios complexos, aumentar a eficiência operacional, promover a
              sustentabilidade e garantir a segurança.
              <ul className="list-disc p-6">
                <li>
                  <span className="font-bold">
                    Descobrir Inovações Tecnológicas:
                  </span>{" "}
                  Ver de perto as últimas tecnologias que estão revolucionando a
                  extração, produção e distribuição de petróleo e gás.
                </li>

                <li>
                  <span className="font-bold">
                    Explorar Soluções Sustentáveis:
                  </span>{" "}
                  Ver de perto as últimas tecnologias que estão revolucionando a
                  extração, produção e distribuição de petróleo e gás.
                </li>
              </ul>
            </p>
          </div>
          <a
            href=""
            className="w-56 h-9 bg-[#1355E9] rounded-md text-white font-bold text-sm flex items-center justify-center mb-10"
          >
            Participe do evento
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutEvent;
