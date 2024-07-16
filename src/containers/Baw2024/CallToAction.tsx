import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { User } from "../../services/utils/types";

const CallToAction: React.FC = () => {
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
    <section className="w-full flex flex-col justify-center items-center relative max-w-[1500px] max-sm:h-[400px] h-[400px]">
      <div className="absolute mx-auto flex flex-col justify-between items-center gap-[45px] max-sm:px-4">
        <h2 className="text-[white] text-center font-bold justify-center text-[45px] max-2xl:text-[35px] max-sm:text-[25px]  text-transparent bg-gradient-to-r from-[#ffe1ba] to-[#e39e00] bg-clip-text">
          Business After Work
        </h2>

        <p className="w-[989px] text-[#DBDBDB] max-sm:w-full justify-center items-center text-center text-[25px] max-2xl:text-[19px]">
          Transforme os seus líderes em tecnologia, e faça a sua marca
          tecnológica, na maior discussão sobre Liderança Inovação e Tecnologia.
        </p>

        <a
          href={user ? `/personal/${user?.uuid}` : "/personal"}
          className="text-white rounded-[6px] flex justify-center font-ebold w-[297px] h-[60px] bg-[#00A7E1] hover:bg-slate-50 hover:text-black text-center items-center font-bold animate-pulse"
        >
          Inscreva-se agora!
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
