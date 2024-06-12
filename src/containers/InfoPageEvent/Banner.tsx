import axios from "axios";
import { bannerIllustration, bannerImage } from "../../assets";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../services/utils/types";

const Banner: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  const fetchUserData = async (userId: string | undefined) => {
    try {
      const response = await axios.get(`https://gsc.api.unocura.ao/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error);
    }
  };

  useEffect(() => {
    fetchUserData(id);
  }, [id]);

  return (
    <div className="min-h-[1075px] max-sm:min-h-[0] max-sm:h-[600px] w-full relative ">
      <img
        src={bannerImage}
        alt="Banner Background"
        className="w-full h-[864px] max-sm:h-[600px] z-0"
      />

      <div className="flex flex-col justify-center max-sm:relative items-center w-full absolute bottom-0 gap-[50px] ">
        <div className="flex flex-col max-sm:absolute max-sm:bottom-[200px] max-sm:items-center max-sm:flex justify-center items-center text-[#fff] w-[1075px] max-lg:w-full max-lg:px-8 gap-6">
          <h1 className="text-[60px] max-md:text-5xl font-bold max-sm:text-[24px] text-center">
            BUSINESS AFTER WORK 2024 <br />
            <span className="font-extrabold max-md:text-5xl max-sm:text-[24px] text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text">
              LÍDER TECH
            </span>
          </h1>

          <p className="text-[18px] max-sm:text-[14px]">
            Participe do maior evento corporativo.
          </p>

          <a
            href={user ? `/personal/${user?.uuid}` : "/personal"}
            className="text-[#000] bg-[#fff] font-bold flex items-center justify-center px-[50px] py-[25px] w-[217px] h-[50px] hover:text-white hover:bg-[#30CBE8] rounded-[10px]"
          >
            Fazer Inscrição
          </a>
        </div>

        <img
          src={bannerIllustration}
          alt="Evento realizado na GSC"
          className="w-[1500px] object-cover object-top h-[551px] rounded-[50px] max-sm:hidden max-2xl:w-[1250px]"
        />
      </div>
    </div>
  );
};

export default Banner;
