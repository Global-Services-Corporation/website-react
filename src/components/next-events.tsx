
interface Props {
  name: string;
  title: string;
  description: string;
}

const NextEvents: React.FC<Props> = ({ description, title, name }) => {
  return (
    <div className="flex  text-[#fff] py- h-[85px] w-[539px] max-sm:w-full max-sm:p-0 box-border">
      
      <p className="text-[22px] max-sm:text-[20px] font-semibold">
          {name}
      </p >
      <p>
        {title}
      </p>
      <p className="text-[#c5c5c5] text-justify ">
        {description}
      </p>
    </div>
  );
};

export default NextEvents;
