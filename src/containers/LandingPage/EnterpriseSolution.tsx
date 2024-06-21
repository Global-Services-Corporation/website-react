import { eventosicon } from "../../assets";

const EnterpriseSolution: React.FC = () => {
  const CardInfo = [
    {
      cardIcon: eventosicon,
      title: "Consultoria de Seguros",
      description: `Avaliação detalhada das necessidades de seguro do cliente com base
            em sua situação financeira, pessoal ou empresarial.`,
    },
    {
      cardIcon: eventosicon,
      title: "Consultoria de Seguros",
      description: `Avaliação detalhada das necessidades de seguro do cliente com base
              em sua situação financeira, pessoal ou empresarial.`,
    },
    {
      cardIcon: eventosicon,
      title: "Consultoria de Seguros",
      description: `Avaliação detalhada das necessidades de seguro do cliente com base
              em sua situação financeira, pessoal ou empresarial.`,
    },
    {
      cardIcon: eventosicon,
      title: "Consultoria de Seguros",
      description: `Avaliação detalhada das necessidades de seguro do cliente com base
              em sua situação financeira, pessoal ou empresarial.`,
    },
    {
      cardIcon: eventosicon,
      title: "Consultoria de Seguros",
      description: `Avaliação detalhada das necessidades de seguro do cliente com base
              em sua situação financeira, pessoal ou empresarial.`,
    },
    {
      cardIcon: eventosicon,
      title: "Consultoria de Seguros",
      description: `Avaliação detalhada das necessidades de seguro do cliente com base
              em sua situação financeira, pessoal ou empresarial.`,
    },
  ];
  return (
    <section className="w-4/5 flex flex-col justify-center gap-12 py-24 px-12  items-center">
      <div className="w-full flex flex-col items-center gap-5 justify-center">
        <p className="font-semibold text-4xl"> Soluções Empresariais</p>
        <p>
          Veja as soluções que a{" "}
          <span className="text-[#30CBE8]">Global Services Corporation</span>{" "}
          tem para a sua empresa.
        </p>
      </div>
      <div className="w-4/5 grid grid-cols-3 grid-rows-2 gap-5">
        {CardInfo.map((info, index) => (
          <div
            key={index}
            className=" w-full h-56 justify-center flex flex-col p-6 gap-2.5  rounded-lg bg-[#0E1937]"
          >
            <img src={info.cardIcon} alt="" className="h-16 w-16" />
            <p className="text-[#30CBE8]">{info.title}</p>
            <p className="text-[#C5C5C5] text-xs">{info.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EnterpriseSolution;
