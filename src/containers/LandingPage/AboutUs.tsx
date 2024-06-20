import { sobrenos } from "../../assets";

const AboutUs: React.FC = () => {
  return (
    <section className="w-full items-center mb-10 justify-center bg-[#0E1937] h-[593px] flex relative gap-[50px]">
      <div className="w-[588px] h-[395px] flex flex-col gap-[50px]">
        <p className="font-extrabold text-[40px]">Sobre Nós</p>
        <p className="text-[20px] text-[#C5C5C5]">
          We currently support Facebook, Instagram, LinkedIn and Twitter. More
          to come. Felix is purpose built for ease of use and complete
          flexability. We currently support Facebook, Instagram, LinkedIn and
          Twitter. More to come. Felix is purpose built for ease of use and
          complete flexability. We currently support Facebook, Instagram,
          LinkedIn and Twitter. More to come. Felix is purpose built for ease of
          use and complete flexability.
        </p>
      </div>
      <img src={sobrenos} alt="" />
    </section>
  );
};

export default AboutUs;
