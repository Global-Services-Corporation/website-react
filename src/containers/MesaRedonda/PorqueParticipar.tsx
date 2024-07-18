import { porqueParticipar } from "../../assets";

const PorqueParticipar: React.FC = () => {
  return (
    <section className="w-full  flex gap-20 justify-center items-center py-16 px-10">
      <div className="flex flex-col p-11 gap-8 w-[530px] ">
        <h1 className="font-bold text-3xl">Por que participar?</h1>
        <p className="text-lg">
          Este evento único destaca a convergência entre liderança visionária e
          avanços tecnológicos que estão transformando o setor de óleo e gás. Ao
          longo da exposição, você explorará como líderes do setor estão
          utilizando tecnologias de ponta para enfrentar desafios complexos,
          aumentar a eficiência operacional, promover a sustentabilidade e
          garantir a segurança.
        </p>
      </div>
      <img src={porqueParticipar} alt="" className="w-[550px] object-contain" />
    </section>
  );
};

export default PorqueParticipar;
