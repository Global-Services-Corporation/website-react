import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { bgConfirmAdesion, logoLyrics } from "../../assets";
import { User } from "../../services/utils/types";

const ConfirmAdesionPersonal: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [personalData, setPersonalData] = useState<any>(null);
  const [ticketsData, setTicketsData] = useState<any>(null);

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
    const personalTicketsData = localStorage.getItem("accumulatedTicketData");

    console.log("Dados Pessoais:", personalFormData);
    console.log("Dados de Tickets:", personalTicketsData);

    if (personalFormData) {
      setPersonalData(JSON.parse(personalFormData));
    }

    if (personalTicketsData) {
      setTicketsData(JSON.parse(personalTicketsData));
    }
  }, [id]);

  const handleAvancar = () => {
    // Adicione a lógica necessária para finalizar a adesão aqui.
    // Por exemplo, enviar os dados para o servidor.
    navigate(`/finalizado/${user?.uuid}`);
  };

  return (
    <main className="w-screen h-screen relative bg-[#001032] flex flex-col items-center overflow-hidden max-sm:overflow-y-auto">
      <header className="w-full py-4 px-6 z-10 flex items-center justify-between">
        <a href={user ? `/${user?.uuid}` : "/"}>
          <img src={logoLyrics} alt="Logotipo da Global Services Corporation" />
        </a>

        <Link
          to={
            user
              ? `/tickets-datas/${user?.uuid}`
              : `/tickets-datas/${user?.uuid}`
          }
          className="text-white font-bold"
        >
          Cancelar
        </Link>
      </header>

      <section className="text-white flex flex-col z-50 h-2/3 w-1/2 rounded-md justify-between p-14 bg-[#1B223C] my-auto items-center">
        <h1 className="text-[35px] font-semibold text-center max-sm:text-[25px] text-[#30CBE8]">
          Confirmar dados
        </h1>

        <form className="w-[70%] max-sm:w-[80%] grid grid-cols-2 grid-rows-2 max-sm:flex max-sm:flex-col gap-4">
          <div className="flex flex-col gap-3 items-center">
            <label htmlFor="" className="text-[15px] font-bold text-[#30CBE8]">
              Nome
            </label>

            <p className="bg-transparent bg-[#171818] h-[50px] text-white text-[14px] w-full shadow-inner shadow-black rounded-md flex justify-center items-center px-4 font-bold">
              {personalData?.nome || ""}
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <label htmlFor="" className="text-[15px] font-bold text-[#30CBE8]">
              Email
            </label>

            <p className="bg-transparent bg-[#171818] h-[50px] text-white text-[14px] w-full shadow-inner shadow-black rounded-md flex justify-center items-center px-4 font-bold">
              {personalData?.email || ""}
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center ">
            <label htmlFor="" className="text-[15px] font-bold text-[#30CBE8]">
              Número telefónico
            </label>
            <p className="bg-transparent bg-[#171818] h-[50px] text-white text-[14px] w-full shadow-inner shadow-black rounded-md flex justify-center items-center px-4 font-bold">
              {personalData?.contacto || ""}
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <label htmlFor="" className="text-[15px] font-bold text-[#30CBE8]">
              Total
            </label>
            <p className="bg-transparent bg-[#171818] h-[50px] text-white text-[14px] w-full shadow-inner shadow-black rounded-md flex justify-center items-center px-4 font-bold">
              {`${ticketsData?.total.toLocaleString("pt-PT", {
                style: "currency",
                currency: "AOA",
              })}` || "Nenhum"}
            </p>
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

export default ConfirmAdesionPersonal;
