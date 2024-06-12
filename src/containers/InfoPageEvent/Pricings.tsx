import React, { useState, useEffect } from "react";
import PriceCard from "../../components/prices-card";

type PriceCardProps = {
  type: string;
  title: string;
  subtitle: string;
  initialPrice: string;
  fetchDetails: () => Promise<string[]>;
};

const Pricings: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [priceCards, setPriceCards] = useState<any[]>([]);

  useEffect(() => {
    // Simulação de dados
    const fakeData = [
      {
        type: "pro",
        title: "Individual",
        subtitle: "Adquira o seu ticket com o plano individual",
        initialPrice: "150.000",
      },
      {
        type: "pro",
        title: "Empresarial X3",
        subtitle: "Com até 3 participantes adquira o seu ticket Empresarial",
        initialPrice: "420.000",
      },
      {
        type: "pro",
        title: "Empresarial X5",
        subtitle: "Com até 5 participantes adquira o seu ticket Empresarial",
        initialPrice: "650.000",
      },
	  {
        type: "pro",
        title: "Empresarial X8",
        subtitle: "Com até 8 participantes adquira o seu ticket Empresarial",
        initialPrice: "900.000",
      },
      // Adicione outros PriceCards conforme necessário
    ];
    setPriceCards(fakeData);
  }, []);

  const fetchDetails = async (type: string): Promise<string[]> => {
    // Simulação de detalhes específicos para cada tipo
    switch (type) {
      case "starter":
        return ["Starter Detail 1", "Starter Detail 2", "Starter Detail 3"];
      case "pro":
        return ["Pro Detail 1", "Pro Detail 2", "Pro Detail 3"];
      case "premium":
        return ["Premium Detail 1", "Premium Detail 2", "Premium Detail 3"];
      case "platinum":
        return ["Platinum Detail 1", "Platinum Detail 2", "Platinum Detail 3"];
      default:
        return ["Default Detail 1", "Default Detail 2", "Default Detail 3"];
    }
  };

 /* 
  const totalPages = Math.ceil(priceCards.length / 4);
  
     const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };
 */
  return (
    <section className="flex flex-col justify-center items-center gap-[80px] my-[100px] max-sm:m-0 relative w-full z-20 py-[20px]">
      <h1 className="text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text font-semibold text-[45px] max-sm:text-[25px]  max-2xl:text-[35px]">
        Planos de Ingresso
      </h1>

      <div className="flex gap-12 max-w-[1500px] max-sm:flex-col max-sm:items-center w-full justify-center relative">
        {priceCards
          .slice(currentPage * 4, currentPage * 4 + 4)
          .map((price, index) => (
            <PriceCard
              key={index}
              type={price.type}
              title={price.title}
              subtitle={price.subtitle}
              initialPrice={price.initialPrice}
              fetchDetails={() => fetchDetails(price.type)}
            />
          ))}

       {/*  <div className="flex justify-between mt-4 px-10 absolute inset-x-auto w-full h-full">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            className="bg-white p-4 rounded-full h-fit my-auto max-md:hidden"
          >
            Anterior
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            className="bg-white p-4 rounded-full h-fit my-auto max-md:hidden"
          >
            Próximo
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Pricings;
