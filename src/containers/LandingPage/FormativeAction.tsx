import Slider from "react-slick";
import FormativeActionCard from "../../components/formative-action-card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { elipse2 } from "../../assets";

const FormativeAction: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000, // Tempo em milissegundos entre as mudanças de slide
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
  };

  const cardInfo = [
    {
      img: "",
      title: "Consultoria de Marketing",
      description:
        " Criação de um plano estratégico de marketing que pode incluir posicionamento de marca, segmentação de mercado, definição de público-alvo, definição de objetivos e metas de marketing.",
    },  {
        img: "",
        title: "Consultoria de Marketing",
        description:
          " Criação de um plano estratégico de marketing que pode incluir posicionamento de marca, segmentação de mercado, definição de público-alvo, definição de objetivos e metas de marketing.",
      },  {
        img: "",
        title: "Consultoria de Marketing",
        description:
          " Criação de um plano estratégico de marketing que pode incluir posicionamento de marca, segmentação de mercado, definição de público-alvo, definição de objetivos e metas de marketing.",
      },
  ];

  return (
    <section className="w-full flex flex-col justify-center gap-12 py-24 items-center z-40">
      <div className="w-full flex flex-col items-center gap-5 justify-center">
        <p className="font-bold text-4xl"> Ação Formativa</p>
        <p className="text-[#c5c5c5]"> {" "}
          Veja as soluções que a
          <span className="text-[#30CBE8]">Global Services Corporation</span> {" "}
          tem para a sua empresa.
        </p>
      </div>

      <div className="w-4/5 flex justify-center items-center gap-2 h-fit">
        {" "}
        <Slider {...settings} className="w-full flex">
          {cardInfo.map((info, index) => (
            <FormativeActionCard
              key={index}
              img={info.img}
              title={info.title}
              description={info.description}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default FormativeAction;
