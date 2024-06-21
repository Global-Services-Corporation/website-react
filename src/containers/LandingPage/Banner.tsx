import { seguro, academia, saude, mundo } from "../../assets";

const Banner: React.FC = () => {
  return (
    <section className="w-4/5 h-[554px] flex gap-32 justify-between">
      <div className="w-[427px] h-[395] flex flex-col gap-8">
        <h1 className="w-full h-[249] leading-none text-[69px] font-bold">
          Dar poder às <span className="text-[#30CBE8]">suas escolhas</span> de{" "}
          <span className="text-[#30CBE8]">seguros</span>
        </h1>
        <p className="text-[#C5C5C5] text-[20px] font-bold">
          Explore o poder de proteger o seu futuro com escolhas inteligentes em
          seguros.
        </p>
        <button className="w-[219px] h-[45px] bg-[#30CBE8] opacity-60 rounded-[10px] animate-pulse hover:opacity-100">
          Começar
        </button>
      </div>
      <div className="w-[772px] h-[554px] relative">
        <img src={mundo} alt="" className=" absolute -top-20" />
        <img src={seguro} alt="" className="absolute start-10" />
        <img src={academia} alt="" className="absolute start-10 top-64" />
        <img src={saude} alt="" className="absolute start-[340px] top-28" />
      </div>
    </section>
  );
};

export default Banner;
