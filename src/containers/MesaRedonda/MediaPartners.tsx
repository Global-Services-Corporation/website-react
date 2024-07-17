import {
  logoZap,
  logoRna,
  logoTpa,
  logoTvZimbo,
  logoPlatinaLine,
} from "../../assets";

const MediaPartners: React.FC = () => {
  return (
    <section className="h-[542px] flex flex-col items-center justify-center w-full">
      <p className="font-bold text-4xl">Parceiros de Mídia</p>
      <marquee behavior="" direction="">
        <div className="w-[1303px] flex items-center justify-center h-56">
          <img src={logoRna} alt="" className="h-36 w-36" />
          <img src={logoTpa} alt="" className="h-38 w-40" />
          <img src={logoTvZimbo} alt="" className="h-36" />
          <img src={logoPlatinaLine} alt="" className="h-38 w-40" />
          {/* <img src={logoZap} alt="" className="h-52" /> */}
        </div>
      </marquee>
    </section>
  );
};

export default MediaPartners;
