import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { bgConfirmAdesion, logoLyrics } from "../../assets";
import { User } from "../../services/utils/types";

const ConfirmAdesionEnterprise: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [enterpriseFormData, setEnterpriseData] = useState<any>(null);

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
    const personalFormData = localStorage.getItem("personalFormData");
    const enterpriseFormData = localStorage.getItem("enterpriseFormData");

    console.log("Dados Pessoais:", personalFormData);
    console.log("Dados Empresariais:", enterpriseFormData);

    if (enterpriseFormData) {
      setEnterpriseData(JSON.parse(enterpriseFormData));
    }
  }, [id]);

  const handleAvancar = () => {
    // Adicione a lógica necessária para finalizar a adesão aqui.
    // Por exemplo, enviar os dados para o servidor.
    navigate(`/finalizado-enterprise/${user?.uuid}`);
  };

  return (
    <main className="w-screen h-screen relative bg-[#141416] flex flex-col items-center overflow-hidden max-sm:overflow-y-auto">
      <header className="w-full py-4 px-6 z-10 flex justify-between items-center">
        <a href={user ? `/${user?.uuid}` : "/"}>
          <img src={logoLyrics} alt="Logotipo da Global Services Corporation" />
        </a>

        <Link
          to={user ? `/enterprise/${user?.uuid}` : "/enterprise"}
          className="text-white font-bold"
        >
          Cancelar
        </Link>
      </header>

      <img
        src={bgConfirmAdesion}
        alt=""
        className="absolute w-full h-full object-cover top-0"
      />

      <section className="flex flex-col text-white z-50 items-center gap-6 w-[85%] max-h-[800px] h-[500px] my-auto justify-between py-8">
        <h1 className="text-[35px] font-semibold text-center max-sm:text-[25px]">
          Confirmar os dados
        </h1>

        <form className="w-[60%] max-sm:w-[80%] grid grid-cols-2 grid-rows-2 max-sm:flex max-sm:flex-col gap-4">
          <div className="flex flex-col gap-3 items-center">
            <label htmlFor="" className="text-[15px] font-bold">
              Nome da Empresa
            </label>
            <input
              className="bg-transparent bg-[#171818] h-[50px] text-[#9E9E9E] text-[14px] w-fit"
              type="text"
              value={enterpriseFormData?.nome || ""}
              disabled
            />
          </div>

          <div className="flex flex-col gap-3 items-center">
            <label htmlFor="" className="text-[15px] font-bold">
              Email
            </label>
            <input
              className="bg-transparent bg-[#171818] h-[50px] text-[#9E9E9E] text-[14px] w-fit"
              type="text"
              value={enterpriseFormData?.email || ""}
              disabled
            />
          </div>

          <div className="flex flex-col gap-3 items-center col-span-2">
            <label htmlFor="" className="text-[15px] font-bold">
              Número telefónico
            </label>
            <input
              className="bg-transparent bg-[#171818] h-[50px] text-[#9E9E9E] text-[14px] w-fit"
              type="text"
              value={enterpriseFormData?.contacto || ""}
              disabled
            />
          </div>
        </form>

        <div className="w-[60%] flex flex-col items-center gap-8">
          <button
            className="max-sm:mb-[100px] font-bold w-[300px] h-[56px] rounded-[4px] bg-[#00A7E1] hover:cursor-pointer flex justify-center items-center"
            onClick={handleAvancar}
          >
            Avançar
          </button>
        </div>
      </section>
    </main>
  );
};

export default ConfirmAdesionEnterprise;
