import { sobrenos } from "../../assets";

const AboutUs: React.FC = () => {
  return (
    <section className="w-full items-center justify-center bg-[#0E1937] h-[593px] flex relative gap-12 z-50">
      <div className="w-4/5 flex items-center justify-between gap-5">
        <div className="w-2/4 flex justify-between flex-col gap-4">
          <p className="font-semibold text-4xl">Sobre nós</p>
          <div className="w-full flex text-[20px] text-[#C5C5C5] flex-col gap-2">
            <p className="text-[20px] text-[#C5C5C5]">
              Somos a{" "}
              <span className="text-[#30CBE8] font-semibold">
                Global Services Corporation
              </span>
              , empresa angolana de multisserviços, com sede na{" "}
              <i className="font-semibold">
                Rua Dr. Aleixo de Abreu, Ingombotas, Luanda, Angola.
              </i> 
            </p>
            <p className="">
            Actuamos em três áreas fundamentais nomeadamente:
            </p>
            <ul className="list-disc ml-8 ">
              <li>Gestão de Riscos (Seguros);</li>
              <li>Consultoria Empresarial;</li>
              <li>Formação do Capital Humano.</li>
            </ul>{" "}
            <p className="text-[20px] text-[#C5C5C5]">
              O nosso objectivo fundamental é contribuir no alcance dos
              objectivos estrátegicos dos nossos clientes, oferecendo Serviços
              de Consultoria.
            </p>
          </div>
        </div>
        <img src={sobrenos} alt="" />
      </div>
    </section>
  );
};

export default AboutUs;
