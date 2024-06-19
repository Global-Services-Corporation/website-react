import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../services/utils/types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  bannerImage,
  bannerIllustration,
  Banner3,
  Banner4,
  Banner5,
} from "../../assets";

const Banner: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  const fetchUserData = async (userId: string | undefined) => {
    try {
      const response = await axios.get(
        `https://gsc.api.unocura.ao/user/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUser(response.data);
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error);
    }
  };

  useEffect(() => {
    fetchUserData(id);
  }, [id]);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000, // Tempo em milissegundos entre as mudanças de slide
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="h-[800px] max-sm:min-h-[0] relative max-sm:h-[600px] w-full">
      <div className="flex flex-col justify-center max-sm:relative items-center w-full absolute top-48 gap-[50px] z-50">
        <div className="flex flex-col max-sm:absolute max-sm:top-10 max-sm:items-center max-sm:flex justify-center items-center text-[#fff] w-[1075px] max-lg:w-full max-lg:px-8 gap-6">
          <h1 className="text-[60px] max-md:text-5xl font-bold max-sm:text-[24px] text-center shadow-md">
            BUSINESS AFTER WORK 2024 <br />
            <span className="font-extrabold max-md:text-5xl max-sm:text-[24px] text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text">
              LÍDER TECH
            </span>
          </h1>

          <p className="text-[18px] max-sm:text-[14px] shadow-md">
            Participe do maior evento corporativo.
          </p>

          <a
            href={user ? `/personal/${user?.uuid}` : "/personal"}
            className="text-[#000] bg-[#fff] font-bold flex items-center justify-center px-[50px] py-[25px] w-[217px] h-[50px] hover:text-white hover:bg-[#30CBE8] rounded-[10px]"
          >
            Fazer Inscrição
          </a>
        </div>
      </div>

      <div className=" flex flex-col absolute top-0 inset-x-0 max-sm:z-0">
        <Slider {...settings} className="">
          <div className="w-full flex items-center  h-[800px] max-sm:h-[600px]">
            <img
              src={bannerIllustration}
              alt="Banner Background 1"
              className="w-full object-cover object-top rounded-[50px] max-sm:rounded-none max-sm:hidden max-3xl:w-[1250px] z-0 h-full"
            />
          </div>

          <div className="w-full flex items-center h-[800px] max-sm:h-[600px]">
            <img
              src={Banner3}
              alt="Banner Background 2"
              className="w-full object-cover object-top rounded-[50px] max-sm:rounded-none max-sm:hidden max-3xl:w-[1250px] z-0 h-full"
            />
          </div>

          <div className="w-full flex items-center h-[800px] max-sm:h-[600px]">
            <img
              src={Banner4}
              alt="Banner Background 3"
              className="w-full object-cover object-top rounded-[50px] max-sm:rounded-none max-sm:hidden max-3xl:w-[1250px] z-0 h-full"
            />
          </div>

          <div className="w-full flex items-center h-[800px] max-sm:h-[600px]">
            <img
              src={Banner5}
              alt="Banner Background 3"
              className="w-full object-cover object-top rounded-[50px] max-sm:rounded-none max-sm:hidden max-3xl:w-[1250px] z-0 h-full"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
