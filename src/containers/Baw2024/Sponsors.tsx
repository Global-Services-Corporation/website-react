import { tisWhiteLogo, sistecLogo } from "../../assets";

const Sponsors: React.FC = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-[80px] max-sm:py-0 gap-12 max-sm:m-0 ">
      <h1 className="font-bold text-[45px] max-sm:text-[25px]   max-2xl:text-[35px] text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text">
        Patrocinadores
      </h1>

      <div className="flex max-sm:flex-col gap-20 max-sm:gap-2 w-full max-sm:flex justify-center items-center">
        <img
          src={tisWhiteLogo}
          alt=""
          className="object-contain h-[150px] w-[150px] max-sm:w-28"
        />
        <img
          src={sistecLogo}
          alt=""
          className="object-contain h-[200px] w-[200px] max-sm:w-32"
        />
      
      </div>
    </section>
  );
};

export default Sponsors;
