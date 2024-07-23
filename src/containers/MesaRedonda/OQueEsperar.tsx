import { OQueEsperarImg } from "../../assets";

const OQueEsperar: React.FC = () => {
  return (
    <section className="h-[550px] bg-[#1b1a1acb] text-white flex justify-between gap-36 py-24 px-36 items-center">
      <img src={OQueEsperarImg} alt="" />
      <div className="flex flex-col gap-9 w-[550px]">
        <h1 className="text-3xl font-bold text-[#FEC503]">O que esperar deste evento</h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          maxime consequatur reprehenderit tempore ratione, omnis unde quisquam
          iusto nemo nesciunt dolores rem! Numquam culpa quo quas.
          Necessitatibus quo nostrum laudantium. omnis unde quisquam iusto nemo
          nesciunt dolores rem! Numquam culpa quo quas. Necessitatibus quo
          nostrum laudantium. omnis unde quisquam iusto nemo nesciunt dolores
          rem! Numquam culpa quo quas. Necessitatibus quo nostrum laudantium.
        </p>
      </div>
    </section>
  );
};

export default OQueEsperar;
