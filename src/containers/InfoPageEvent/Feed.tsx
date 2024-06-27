export function Video() {
  return (
    <div className="flex flex-col justify-center items-center max-sm:gap-8 gap-12 py-[70px] max-sm:p-0">
      <h1 className="text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text max-sm:text-[25px]  max-sm:w-full w-[958px] text-center text-[45px] max-2xl:text-[30px] font-bold">
        Feed - Global Services Corporation
      </h1>
      <div className="max-2xl:w-[1000px] w-[1216px] max-2xl:h-[485px] h-[520px] max-sm:w-[350px] max-sm:h-[270px] rounded-[22px] overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/v5BqqI3I95s"
          title="YouTube video player"
          className="w-[1216px] max-2xl:w-[1000px] h-[520px] max-2xl:h-[485px] max-sm:w-[350px] max-sm:h-[270px]"
          frameBorder="0"
          allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
