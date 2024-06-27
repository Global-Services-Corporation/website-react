import { calendarIcon, localIcon, timeIcon } from "../assets";

interface Props {
  type: string;
  date?: string;
  local?: string;
  time?: string;
}

export const CardInfo: React.FC<Props> = ({ type, date, local, time }) => {
  return (
    <div className="w-[425px] max-2xl:w-[300px] max-sm:w-[300px] max-sm:h-[200px] max-2xl:h-[200px] h-[263px] bg-[#1B223C] shadow-sm hover:-translate-y-2 hover:animate-pulse rounded-lg flex flex-col items-center justify-center gap-[26px]">
      {type === "date" && (
        <>
          <img src={calendarIcon} alt="Icon" className="object-contain" />
          <p className="max-2xl:text-[20px] text-[35px] max-sm:text-[20px] font-bold text-[#fff]">
            {date}
          </p>
        </>
      )}
      {type === "local" && (
        <>
          <img src={localIcon} alt="Icon" className="object-contain" />
          <p className="max-2xl:text-[20px] text-[35px] max-sm:text-[20px] font-bold text-[#fff]">
            {local}
          </p>
        </>
      )}
      {type === "time" && (
        <>
          <img src={timeIcon} alt="Icon" className="object-contain" />
          <p className="max-2xl:text-[20px] text-[35px] max-sm:text-[20px] font-bold text-[#fff]">
            {time}
          </p>
        </>
      )}
    </div>
  );
};
