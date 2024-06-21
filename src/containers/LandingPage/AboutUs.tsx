import { sobrenos } from "../../assets";

const AboutUs: React.FC = () => {
  return (
    <section className="w-full items-center justify-center bg-[#0E1937] h-[593px] flex relative gap-12">
      <div className="w-4/5 flex gap-16 items-center justify-center">
        <div className="w-2/5 flex flex-col gap-8">
          <p className="font-semibold text-4xl">Sobre Nós</p>
          <p className="text-[20px] text-[#C5C5C5]">
            We currently support Facebook, Instagram, LinkedIn and Twitter. More
            to come. Felix is purpose built for ease of use and complete
            flexability. We currently support Facebook, Instagram, LinkedIn and
            Twitter. More to come. Felix is purpose built for ease of use and
            complete flexability. We currently support Facebook, Instagram,
            LinkedIn and Twitter. More to come. Felix is purpose built for ease
            of use and complete flexability.
          </p>
        </div>
        <img src={sobrenos} alt="" />
      </div>
    </section>
  );
};

export default AboutUs;
