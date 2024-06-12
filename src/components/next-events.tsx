import { timeProgramIcon } from "../assets";

interface Props {
  data: string;
  title: string;
}

const NextEvents: React.FC<Props> = ({ data, title }) => {
  return (
    <div className="flex gap-2 text-[#fff] py-[25px] h-[85px] w-[539px] max-sm:w-full max-sm:p-0 box-border">
      <span>
        <img src={timeProgramIcon} alt="Icons" />
      </span>
      <p className="text-[22px] max-sm:text-[20px] font-semibold">
        {data} /{" "}
        <span className="text-white bg-clip-text">
          {title}
        </span>
      </p>
    </div>
  );
};

export default NextEvents;
