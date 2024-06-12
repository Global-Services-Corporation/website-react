import { logoLyrics } from "../assets";

const SimpleHeader: React.FC = () => {
  return (
    <header className="flex w-full justify-between px-[20px] items-center py-[18px]">
      <a href="/">
        <img src={logoLyrics} alt="" />
      </a>

      {/* <select name="language" id="language">
        <option value="EN">EN</option>
        <option value="PT">PT</option>
      </select> */}
    </header> 
  );
};

export default SimpleHeader;
