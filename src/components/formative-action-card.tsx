import { linkIcon } from "../assets";

interface Props  {
    img:string,
    title:string,
    description:string
}

const FormativeActionCard: React.FC<Props> = ({ img, title, description }) => {
  return (
    <div className="mr-3 w-80 flex flex-col bg-[#0E1937] rounded-xl">
      <img src={img} alt="" className="h-56" />
      <div className="w-full h-60  px-7 py-7 flex flex-col gap-2.5">
        {" "}
        <h1 className="text-xl">{title}</h1>
        <p className="text-sm text-[#c5c5c5]">
          {" "}
         {description}
        </p>
        <a href="" className="flex gap-1 text-xs text-[#30CBE8]">
          Saber mais sobre a ação{" "}
          <span>
            <img src={linkIcon} alt="" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default FormativeActionCard;
