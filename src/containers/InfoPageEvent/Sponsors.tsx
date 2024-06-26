import { tisWhiteLogo, acadBai, sistecLogo, gdaLogo } from "../../assets";

const Sponsors: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-[80px] max-sm:py-0 gap-12 max-sm:m-0 max-sm:h-[400px]">
      <h1 className="font-bold text-[45px] max-sm:text-[25px]   max-2xl:text-[35px] text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text">
        Patrocinadores
      </h1>

      <div className="flex gap-[64px] w-full max-sm:flex justify-center items-center">
        <img
          src={tisWhiteLogo}
          alt=""
          className="object-contain max-2xl:h-[100px] max-2xl:w-[100px] max-sm:w-[200px]"
        />
        <img
          src={sistecLogo}
          alt=""
          className="object-contain h-[150px] w-[150px] max-2xl:h-[100px]  max-2xl:w-[100px]"
        />
       
      </div>
    </section>
  );
};

export default Sponsors;
