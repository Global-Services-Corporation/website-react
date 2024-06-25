import { imageCard, logoBackground } from "../../assets";
import NextEvents from "../../components/next-events";
import ProgramCard from "../../components/program-card";

const ProgramEvent: React.FC = () => {
  return (
    <section className="flex w-full bg-[#1B223C] justify-center">
      <div
        className="flex w-full max-w-[1500px] items-center relative max-sm:min-h-[500px] h-[750px] max-sm:h-[500px] gap-20 max-2xl:px-[80px] 
       max-sm:px-10"
      >
        <ProgramCard
          image={imageCard}
          description="Com a revolução da tecnologia, a liderança enfrenta desafios enormes. A rápida evolução e crescimento tecnológico transformou os processos das organizações, e os seus modos de operação e comunicação.
        "
        />

        <div className="flex flex-col w-[539px] max-sm:w-full py-[60px] max-sm:justify-center max-sm:py-0 box-border max-sm:gap-2 h-[610px]">
          <h1 className="text-[45px] max-sm:text-[25px] max-sm:mb-5 font-bold text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text max-2xl:text-[35px]">
            Programa
          </h1>

          <div className="w-full flex flex-col">
            <NextEvents data="1º" title="Pré-Inscrição" />
            <NextEvents data="2º" title="Abertura" />
            <NextEvents data="3º" title="Boas Vindas" />
            <NextEvents data="4º" title="Intervenção" />
            <NextEvents data="5º" title="Últimas Considerações" />
          </div>
        </div>

        <img
          src={logoBackground}
          alt="Logo"
          className="absolute max-sm:hidden right-0 bottom-0"
        />
      </div>
    </section>
  );
};

export default ProgramEvent;
