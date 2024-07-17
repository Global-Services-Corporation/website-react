const Speakers: React.FC = () => {
  const cardInfo = [
    {
      imagem: "",
      title: "",
    },
    {
      imagem: "",
      title: "",
    },
    {
      imagem: "",
      title: "",
    },
  ];

  return (
    <section className="flex flex-col w-[1514px] justify-center items-center gap-24">
      <p className="font-bold text-4xl">Speakers do Evento</p>
      <div className="flex pb-4 ">
        <div className="h-[424px] items-center justify-center w-[1314px] flex gap-4">
          {cardInfo.map((info, index) => (
            <div key={index} className="h-full w-[309px] bg-[#5F5F5F]">
              <p>{info.title}</p>
              <p>{info.imagem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
