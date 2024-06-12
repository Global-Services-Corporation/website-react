interface Props {
  image: string;
  title?: string;
  description: string;
  link?: string;
}

const ProgramCard: React.FC<Props> = ({ image, description, title, link }) => {
  function limitText(text: string, limit: number) {
    if (text.length <= limit) return text;
    else return text.substring(0, limit) + "...";
  }
  return (
    <div
      className={`flex flex-col ${
        !title && "max-sm:hidden"
      } items-center max-sm:w-[370px] w-[400px] h-[600px]  rounded-[16px] bg-[#1B223C] gap-[28px] `}
    >
      <div className={`w-full ${title ? "h-1/2" : "h-full"} `}>
        <img
          src={image}
          alt="Illustration Card"
          className="object-cover w-full h-full rounded-[16px]"
        />
      </div>

      <div className={`${title ? "flex flex-col h-[272px] px-7 py-5 gap-2" : "hidden" }`}>
        {title ? (
          <h1 className="text-white text-[25px] max-2xl:text-[18px] font-bold">
            {title}
          </h1>
        ) : (
          <></>
        )}
        <p className="text-[#ffff] text-[18px] max-2xl:text-[14px]">
          {limitText(description, 150)}
        </p>
        {link ? (
          <a
            href={link}
            className="text-[#30CBE8] font-bold max-2xl:text-[14px]"
          >
            Saiba Mais...
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ProgramCard;
