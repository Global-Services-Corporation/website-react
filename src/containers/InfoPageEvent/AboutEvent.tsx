import { aboutImage } from "../../assets";

const AboutEvent: React.FC = () => {
  return (
    <section className="z-40 flex justify-center w-full bg-[#1B223C] px-[50px] max-sm:p-0 ">
      <div className="flex w-full max-w-[1500px] justify-around items-center h-[650px] max-sm:h-[450px]">
        <div className="w-[588px] max-2xl:w-[550px] max-sm:flex max-sm:items-center text-[#fff] flex flex-col max-sm:justify-center gap-[35px]">
          <h1 className="text-[45px] font-bold max-sm:text-[25px] max-2xl:text-[35px] text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text">
            Sobre o Evento
          </h1>

          <p className="text-[20px] max-sm:text-center justify-center  max-2xl:text-[15px] max-2xl:w-[90%]">
            Com a revolução da tecnologia, a liderança enfrenta desafios
            enormes. A rápida evolução e crescimento tecnológico transformou os
            processos das organizações, e os seus modos de operação e
            comunicação. Essas mudanças na estrutura das organizações e dos
            mercados, forma um novo contexto nos modelos organizacionais e nos
            negócios, em que os líderes são chamados a desenvolver habilidades
            adaptativas e estratégias que respondam as necessidades de um mundo
            cada vez mais digital.
          </p>
        </div>

        <img
          src={aboutImage}
          alt="Foto do Evento"
          className="rounded-[30px] w-[550px] h-[550px] object-cover max-sm:hidden max-2xl:w-[500px]"
        />
      </div>
    </section>
  );
};

export default AboutEvent;
