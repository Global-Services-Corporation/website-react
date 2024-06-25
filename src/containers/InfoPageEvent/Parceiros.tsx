import {
  parceiro1,
  parceiro2,
  espacos,
  tanqueray,
  superbock,
} from "../../assets";

const Parceiros: React.FC = () => {
  return (
    <section className="w-full  flex flex-col justify-center items-center py-[80px] max-sm:py-0 gap-12   max-sm:m-0 max-sm:h-[950px] z-40">
      <h1 className="font-bold text-[45px] max-sm:text-[25px]   max-2xl:text-[35px] text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text">
        Parceiros
      </h1>

      <div className="flex gap-[64px] w-full max-sm:flex-col justify-center items-center">
        <img
          src={parceiro1}
          alt=""
          className="object-contain max-2xl:h-[100px] max-2xl:w-[100px] max-sm:w-[200px]"
        />
        <img
          src={parceiro2}
          alt=""
          className="object-contain h-[150px] w-[150px] max-2xl:h-[100px]  max-2xl:w-[100px]"
        />
        <img
          src={espacos}
          alt=""
          className="object-contain h-[150px] w-[150px] max-2xl:h-[100px]  max-2xl:w-[100px]"
        />
        <img
          src={tanqueray}
          alt=""
          className="object-contain h-[150px] w-[150px] max-2xl:h-[100px]  max-2xl:w-[100px]"
        />
        <img
          src={superbock}
          alt=""
          className="object-contain h-[150px] w-[150px] max-2xl:h-[100px]  max-2xl:w-[100px]"
        />
      </div>
    </section>
  );
};

export default Parceiros;
