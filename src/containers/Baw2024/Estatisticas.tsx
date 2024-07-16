import { useState, useEffect } from 'react';
import { edicoes, empresas, oradores, participantes } from "../../assets";

const Estatisticas = () => {
  const statistic = [
    {
      number: 5,
      title: "Edições",
      image: edicoes,
    },
    {
      number: 5000,
      title: "Participantes",
      image: participantes,
    },
    {
      number: 50,
      title: "Oradores",
      image: oradores,
    },
    {
      number: 250,
      title: "Empresas",
      image: empresas,
    },
  ];

  const [countedNumbers, setCountedNumbers] = useState(statistic.map(stat => 0));

  useEffect(() => {
    const handleScroll = () => {
      // Reinicia a contagem sempre que o usuário rolar a página
      setCountedNumbers(statistic.map(_stat => 0));

      // Obtém a posição do topo da janela de visualização
      const scrollTop = window.scrollY;
      // Obtém a altura da janela de visualização
      const windowHeight = window.innerHeight;
      // Itera sobre cada estatística
      statistic.forEach((stat, index) => {
        // Verifica se o elemento correspondente está visível na tela
        if (document.getElementById(`statistic-${index}`)) {
          const elementOffsetTop = document.getElementById(`statistic-${index}`).offsetTop;
          // Se o elemento estiver visível, atualiza o número contado
          if (scrollTop + windowHeight > elementOffsetTop) {
            const interval = Math.ceil(stat.number / 9000);
            // Define um intervalo de 10ms para animar o contador
            const timer = setInterval(() => {
              setCountedNumbers(prevCountedNumbers => {
                const newCountedNumbers = [...prevCountedNumbers];
                if (newCountedNumbers[index] < stat.number) {
                  newCountedNumbers[index] += interval;
                  return newCountedNumbers;
                } else {
                  clearInterval(timer);
                  return prevCountedNumbers;
                }
              });
            }, 10);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="flex justify-center w-full py-[80px] max-sm:p-0 z-20">
      <div className="flex flex-col items-center max-sm:gap-10 gap-[65px] max-w-[1500px] justify-center w-full">
        <h1 className="text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text max-sm:text-center font-bold max-sm:text-[25px] text-[45px] max-2xl:text-[35px]">
          Estatísticas de Conferência
        </h1>

        <div className="flex w-[75%] max-sm:flex-col max-sm:gap-16 justify-around">
          {statistic.map((card, index) => (
            <div className="flex flex-col items-center gap-2" key={index} id={`statistic-${index}`}>
              <div className="max-sm:w-8 max-sm:h-8 w-[50px] h-[50px]">
                <img src={card.image} alt="" />
              </div>

              <p className="text-[30px] max-2xl:text-[20px] font-bold text-[#30CBE8]">
                +{countedNumbers[index]}
              </p>

              <p className="text-[25px] max-2xl:text-[20px] text-white">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Estatisticas;
