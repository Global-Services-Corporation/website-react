import { Edivania, manuelHomem, ruiMiguens } from "../../assets";

const KeynoteSpeaker: React.FC = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center">
      <div className="w-full gap-8 max-sm:gap-0 max-sm:flex-col-reverse bg-[#1B223C] justify-center hidden">
        <img src={manuelHomem} alt="" className="w-96 max-sm:w-80" />

        <div className="flex flex-col w-1/3 max-sm:w-full max-sm:items-center gap-2 h-96 max-sm:h-80 justify-center">
          <h1 className="font-bold text-[45px] max-sm:text-[25px] max-2xl:text-[35px] text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text">
            Keynote Speaker
          </h1>
          <p className="text-white text-2xl font-bold">Manuel Homem</p>
          <p className="text-white font-semibold">
            Governador da Província de Luanda
          </p>
          <p className="text-white max-sm:text-center max-sm:text-sm max-sm:w-3/4">
            Manuel Gomes da Conceição Homem é um engenheiro e político angolano.
            É, desde setembro de 2022, o Governador Provincial de Luanda. É,
            também, o 1º Secretário Provincial do Movimento Popular de
            Libertação de Angola (MPLA) em Luanda.
          </p>
        </div>
      </div>
      <div className="w-full gap-8 max-sm:gap-0 flex max-sm:flex-col-reverse items-end bg-[#1B223C] justify-center max-sm:items-center">
        <img
          src={ruiMiguens}
          alt=""
          className="w-80 h-80 object-cover object-bottom max-sm:w-80"
        />

        <div className="flex flex-col w-1/3 max-sm:w-full max-sm:items-center gap-2 h-96 max-sm:h-80 justify-center">
          <h1 className="font-bold text-[45px] max-sm:text-[25px] max-2xl:text-[35px] text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text">
            Convidado Especial
          </h1>
          <p className="text-white text-2xl font-bold">
            Rui Miguêns De Oliveira
          </p>
          <p className="text-white font-semibold">
            Ministro da Indústria e do Comércio
          </p>
          <p className="text-white max-sm:text-center max-sm:text-sm max-sm:w-3/4">
            Natural da Gabela, província do Cuanza Sul, o ministro angolano
            da Indústria e Comércio tem uma licenciatura em Economia, pela
            Universidade de Havana, Cuba.
          </p>
        </div>
      </div>

      <div className="w-full flex max-sm:flex-col justify-center max-sm:items-center">
        <div className="flex flex-col w-1/3 gap-2 h-96  justify-center max-sm:w-full max-sm:items-center max-sm:px-4">
          <h1 className="font-bold text-[45px] max-sm:text-[25px] max-2xl:text-[35px] text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text">
            Apresentadora
          </h1>
          <p className="text-white text-2xl font-bold">Edivania Do Carmo</p>
          <p className="text-white font-semibold max-sm:text-center">
            Apresentadora de TV e Mentora do projecto Social Comece Master
          </p>
          <p className="text-white max-sm:text-center max-sm:text-sm max-sm:w-3/4">
            Edivania do Carmo, é apresentadora de TV, além de apresentadora,
            hoje representa uma das vozes mais audíveis da juventude angolana,
            mentora e fundadora do Projecto Social #comecemaster, tem mais de 08
            anos de televisão e acredita que a resiliência é a chave do sucesso.
          </p>
        </div>
        <img src={Edivania} alt="" className=" h-96 max-sm:w-80 object-contain" />
      </div>
    </section>
  );
};

export default KeynoteSpeaker;
