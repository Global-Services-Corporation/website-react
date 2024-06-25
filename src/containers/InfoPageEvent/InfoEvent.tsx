import { CardInfo } from "../../components/event-info-card";

const EventInfo: React.FC = () => {
  return (
    <section className="flex flex-col items-center max-sm:my-0 max-sm:h-[750px] my-[50px] max-sm:gap-10 w-full ">
      <h1 className="font-bold text-[45px] max-sm:text-[25px] max-2xl:text-[35px] text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text">
        Horários
      </h1>
      <div className="max-sm:flex-col max-sm:gap-8 flex w-full justify-between items-center px-6 h-[462px] max-sm:h-full max-w-[1500px]">
        <CardInfo type="local" local="HCTA" />
        <CardInfo type="date" date="18 de Julho de 2024" />
        <CardInfo type="time" time="16h30" />
      </div>
    </section>
  );
};

export default EventInfo;
