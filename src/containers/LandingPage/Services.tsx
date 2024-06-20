import { seguros, eventosicon, academiaicon, elipse2 } from "../../assets";

const Services: React.FC = () => {
  return (
    <section className="w-[1446px] h-[354px] relative flex flex-col gap-[23px]">
      <p className="font-bold text-[22px]">Adira já aos nossos serviços!</p>
      <marquee>
      <div className=" w-[1185px] h-screen flex gap-8">
        <div className="w-[363px] h-[187px] flex relative p-8 bg-[#0E1937] rounded-[24px]">
          <img src={seguros} alt="" className="absolute object-none" />
          <div className="flex flex-col absolute start-28">
            <p className="text-[#30CBE8] font-semibold text-[20.88px]">
              Seguros
            </p>
            <p className="text-[#C5C5C5] text-[16.71px]">
              Começa aderindo o serviço.
            </p>
          </div>

          <button className="bg-[#30CBE8] w-[116px] h-[39px] end-10 bottom-8 absolute rounded-[8px] font-semibold">
            Solicitar
          </button>
        </div>
        <div className="w-[363px] h-[187px] flex relative p-8 bg-[#0E1937] rounded-[24px]">
          <img src={eventosicon} alt="" className="absolute object-none" />
          <div className="flex flex-col absolute start-28">
            <p className="text-[#30CBE8] font-semibold text-[20.88px]">
              Eventos
            </p>
            <p className="text-[#C5C5C5] text-[16.71px]">
              Começa aderindo o serviço.
            </p>
          </div>

          <button className="bg-[#30CBE8] w-[116px] h-[39px] end-10 bottom-8 absolute rounded-[8px] font-semibold">
            Solicitar
          </button>
        </div>
        <div className="w-[363px] h-[187px] flex relative p-8 bg-[#0E1937] rounded-[24px]">
          <img src={academiaicon} alt="" className="absolute object-none" />
          <div className="flex flex-col absolute start-28">
            <p className="text-[#30CBE8] font-semibold text-[20.88px]">
              Academia
            </p>
            <p className="text-[#C5C5C5] text-[16.71px]">
              Começa aderindo o serviço.
            </p>
          </div>

          <button className="bg-[#30CBE8] w-[116px] h-[39px] end-10 bottom-8 absolute rounded-[8px] font-semibold">
            Solicitar
          </button>
        </div>
      </div>
      </marquee>
     {/*  <img src={elipse2} className=" h-[500px] w-[] absolute end-0 object-cover bottom-1" alt="" /> */}
    </section>
  );
};

export default Services;
