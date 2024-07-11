import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";
import { Pagination } from "swiper/modules";

import ProgramCard from "../../components/program-card";
import { FIB, post2, post3, post4 } from "../../assets";

const AtividadesRecentes = () => {
  const [slidesPerView, setSlidePerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidePerView(1);
      } else {
        setSlidePerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dataCard = [
    {
      id: 1,
      image: FIB,
      description:
        "Fazer parte da FIB 2024, não é participar de um simples evento, é estar ao lado daqueles que constroem soluções e influenciam as decisões da segunda maior região de Angola e da Ecónomia no Geral.",
      title: "13ª Edição - FIB 2024",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7191771837997969409/",
    },
    {
      id: 2,
      image: post2,
      description:
        "É com grande satisfação que anunciamos, que hoje, dia 18 de Outubro, a GLOBAL SERVICES CORPORATION e a AECIPA - Associação das Empresas Prestadoras de Serviço da Indústria Petrolífera Angolana, assinaram o Protocolo de Cooperação. O referido protocolo, tem como objectivo, o desenvolvimento e estreitamento das relações em áreas de interesse comum, nomeadamente; no Sector Energético, Formação do Capital Humano, Finanças, Liderança, entre outras. O Evento contou com a presença dos membros das duas organizações, com destaque do Eng. Jorge Segadães Duarte Director Comercial e Desenvolvimento de Negócios da SISTEC. A parceria ja colocou para o mercado o seu primeiro produto, a 3ª Edição da Mesa Redonda com os CEOs, que tem como convidado especial o Dr hashtag#Paulo Portas, Ex vice Primeiro Ministro de Portugal e Consultor Internacioal, além das entidades públicas angolanas S.E Dr Mario A. Caetano Joao Ministro da Economia e Planeamento e S.E Eng. Diamantino Pedro Azevedo Ministro dos Petroleos e Recursos Minerais.",
      title: " Protocolo de Cooperação",
      link: "https://www.linkedin.com/posts/global-service-corporations_paulo-lideranaexa-mesaredondacomceos2023-activity-7120518714579431425-RVzg?utm_source=share&utm_medium=member_desktop",
    },
    {
      id: 3,
      image: post3,
      description:
        "As Organizações do Futuro, preparam hoje os seus Liderados para se tornarem embaixadores dos seus produtos e serviços, e multiplicadores de performance do Capital Humano. No dia 16 de Novembro, a Global Academy, apresenta o maior Seminário de Angola, sobre Liderança de Alta Performance, com uma das mentes mais brilhantes do Mundo, Prof Dr. Paulo Portas.",
      title: "Líder do Futuro",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7121182641155915776/",
    },
    {
      id: 4,
      image: post4,
      description:
        "Com a revolução da tecnologia, a liderança enfrenta desafios enormes. A rápida evolução e crescimento tecnológico transformou os processos das organizações, e os seus modos de operação e comunicação. Essas mudanças na esturura das organizações e dos mercados, forma um novo contexto nos modelos organizacionais e nos negócios, em que os líderes são chamados a desenvolver habilidades adaptativas e estratégias que respondam as necessidades de um mundo cada vez mais digital.",
      title: "Business After Work",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7188216250450276352/",
    },
  ];

  return (
    <section className="w-full h-[650px] bg-[#001032] flex justify-center flex-col items-center gap-14 z-20 mt-[100px] max-sm:m-0 max-sm:p-0 px-[100px]">
      <h1 className="text-[45px] max-2xl:text-[35px] max-sm:text-[25px] font-bold text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text">
        Atividades Recentes
      </h1>

      <div
        className={`max-2xl:min-w-[1024px] max-sm:min-w-[380px] min-w-[1350px] max-sm:w-[380px] w-[990px] max-2xl:max-w-[1024px]`}
      >
        <Swiper slidesPerView={slidesPerView} modules={[Pagination]}>
          {dataCard.map((card, index) => (
            <SwiperSlide key={index}>
              <ProgramCard
                image={card.image}
                description={card.description}
                title={card.title}
                link={card.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AtividadesRecentes;
