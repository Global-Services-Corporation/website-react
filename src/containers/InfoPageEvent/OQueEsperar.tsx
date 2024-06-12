import { bgOqueEsperar } from "../../assets";

const OQueEsperar: React.FC = () => {
  return (
    <section className="w-full flex flex-col gap-[10px] justify-center items-center relative h-[645px] z-20 my-[100px] max-sm:m-0 max-sm:h-[500px]">
      <img
        src={bgOqueEsperar}
        alt=""
        className="w-full h-[725px] max-sm:h-[400px] object-cover"
      />

      <div className="absolute mx-auto flex flex-col justify-around items-center min-h-[250px] max-sm:px-4">
        <h1 className="text-[45px] max-2xl:text-[35px] max-sm:text-[25px] text-white font-bold max-sm:text-center">
          O que Esperar do Evento?
        </h1>
        <div className="w-[989px] flex text-white justify-center items-center text-center text-[25px] max-2xl:text-[19px] max-sm:text-[16px] max-sm:w-full ">
          O The Business After Work em Julho, se propõe a analisar o perfil do
          Lider Tech, e introduzirá a 4 Edição da Mesa Redonda com os CEOS, que
          tem como tema: LEADERSHIP INNOVATION TECH.
        </div>
      </div>
    </section>
  );
};

export default OQueEsperar;
