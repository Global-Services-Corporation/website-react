import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  bg,
  Pauloportas,
  Anabela,
  Pedroramos,
  Edsondossantos,
} from "../../assets";

// Definindo o componente Slider
const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "flex gap-5 flex-col",
  };

  return <Slider {...settings}></Slider>;
};

const Oradores = () => {
  const orador = [
    {
      foto: Pedroramos,
      nome: "Pedro Ramos",
      cargo: `PhD em Economia de Empresa`,
      sobre: `CEO da KEEPTALENT Portugal | Vice-Presidente da Lusofonia Digital É
    PhD em Economia de Empresa, Mestre em Sociologia do Emprego e
    Licenciado na área das Ciências da Educação. É atualmente um dos
    consultores de maior referência em Portugal e nos países de Língua
    Portuguesa nas temáticas de Gestão de Pessoas e Organizações, tendo
    anteriormente desempenhado o cargo de Administrador Executivo e de
    Diretor de Recursos Humanos em grandes empresas nos últimos 30 anos.`,
    },
    {
      foto: Pauloportas,
      nome: "Paulo Portas",
      cargo: `Ex Vice-primeiro-Ministro de Portugal`,
      sobre: `Paulo Portas é licenciado em Direito pela Universidade Católica de
    Lisboa e lecionou História do Pensamento Político. Dá aulas de
    Geoeconomia e Relações Internacionais na Universidade Nova. Ministrou
    cursos na Emirates Diplomatic Academy (Abu Dhabi) e seminários diretos
    sobre Diplomacia Económica para empresas multinacionais.`,
    },
    {
      foto: Anabela,
      nome: "Anabela Chastre",
      cargo: `Presidente da Cimeira Lusófona de Liderança`,
      sobre: `É CEO da Chastre Consulting, empresa especializada na formação e
      coaching para Líderes. É Docente Universitária em Lisboa e Coimbra e
      Oradora Internacional na área da Gestão de Pessoas e Liderança.`,
    },
    {
      foto: Edsondossantos,
      nome: "Edson R. Dos Santos",
      cargo: `PCA da Etu Energias`,
      sobre: ` CEO da KEEPTALENT Portugal | Vice-Presidente da Lusofonia Digital É
      PhD em Economia de Empresa, Mestre em Sociologia do Emprego e
      Licenciado na área das Ciências da Educação. É atualmente um dos
      consultores de maior referência em Portugal e nos países de Língua
      Portuguesa nas temáticas de Gestão de Pessoas e Organizações, tendo
      anteriormente desempenhado o cargo de Administrador Executivo e de
      Diretor de Recursos Humanos em grandes empresas nos últimos 30 anos.`,
    },
  ];

  return (
    <section className="flex justify-center w-full max-sm:h max-sm:my-0 max-2xl:px-[100px] max-sm:px-4 text-white flex-col py-16 gap-8">
      <h1 className="text-[45px] max-sm:text-[25px]  font-bold max-2xl:text-[35px] text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text text-center">
        Oradores
      </h1>

      <div className="grid grid-cols-4 p-4 max-sm:grid-cols-1 gap-8">
        {orador.map((dados, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <img
              className="rounded-[50%] border-[#00A7E1] border-4 w-32 max-sm:w-28 mx-auto"
              src={dados.foto}
              alt=""
            />

            <div className="w-[80%] mx-auto">
              <h2 className="text-[20px] max-2xl:text-[25px] max-sm:text-xl font-semibold text-center mb-2 mt-2">
                {dados.nome}
              </h2>

              <h3 className="text-[18px] max-2xl:text-[15px] max-sm:text-lg  mb-2">
                {dados.cargo}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Oradores;
