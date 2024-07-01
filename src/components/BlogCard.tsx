

interface Props  {
    img:string,
    title:string,
    description:string
    data:string
}

const BlogCard: React.FC<Props> = ({ img, title, description, data }) => {
  return (
    <div className="mr-3 w-80 flex flex-col bg-[#0E1937] rounded-xl">
      <img src={img} alt="" className="h-56" />
      <div className="w-full  px-7 py-7 flex flex-col gap-2.5">
        {" "}
        <h1 className="text-xl">{title}</h1>
        <p className="text-sm text-[#c5c5c5]">
          {" "}
         {description}
        </p>
        <p className="text-xs text-[#C5c5c5]">{data}</p>
      </div>
    </div>
  );
};

export default BlogCard;