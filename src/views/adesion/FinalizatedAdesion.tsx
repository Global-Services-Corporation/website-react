import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { logoLyrics } from "../../assets";
import { User } from "../../services/utils/types";
import Loading from "./Loading";

const FinalizatedAdesion: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o loading
  const [personalData, setPersonalData] = useState<any>(null);
  const [ticketData, setTicketData] = useState<any>(null);
  const [pedidoEnviado, setPedidoEnviado] = useState(false); // Estado para controlar se o pedido foi enviado com sucesso
  const [okClicked, setOkClicked] = useState(false); // Estado para controlar se o botão OK foi clicado

  useEffect(() => {
    fetchUserData(id);
    const personalFormData = localStorage.getItem("personalFormData");
    const ticketFormData = localStorage.getItem("accumulatedTicketData");

    console.log("Dados Pessoais:", personalFormData);
    console.log("Dados Pessoais:", ticketFormData);

    if (personalFormData) {
      setPersonalData(JSON.parse(personalFormData));
    }

    if (ticketFormData) {
      setTicketData(JSON.parse(ticketFormData));
    }
  }, [id]);

  const fetchUserData = async (userId: string | undefined) => {
    try {
      const response = await axios.get(
        `http://gsc.api.unocura.ao/user/${userId}`,
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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setFile(fileList[0]);
    }
  };

  const handleFinalizar = async () => {
    if (!file || !personalData) {
      console.error("Nenhum arquivo selecionado ou dados pessoais ausentes.");
      return;
    }

    setIsLoading(true); // Ativar o estado de loading antes da requisição

    const formData = new FormData();
    formData.append("doc", file);

    // Adicionar dados pessoais ao FormData
    formData.append("name", personalData.nome);
    formData.append("email", personalData.email);
    formData.append(
      "price",
      ticketData.total.toLocaleString("pt-PT", {
        style: "currency",
        currency: "AOA",
      })
    );
    formData.append("contact", personalData.contacto);

    try {
      const response = await axios.post(
        `http://gsc.api.unocura.ao/send-email`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Resposta do servidor:", response.data);
      setPedidoEnviado(true); // Marcar o pedido como enviado com sucesso
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    } finally {
      setIsLoading(false); // Desativar o estado de loading após a requisição
    }
  };

  const handleOkClick = () => {
    setOkClicked(true);
    navigate(`/personal/${user?.uuid}`); // Navegar para a página pessoal
  };

  if (isLoading) {
    return <Loading />;
  }

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
          Finalizar reserva
        </h1>

        <p className="text-lg font-semibold text-center max-sm:text-[25px]">
          IBAN: 0000 0454 9943 1664 3
        </p>

        <form className="w-[60%] max-sm:w-[80%] flex flex-col items-center h-40 justify-around max-sm:flex max-sm:flex-col gap-4">
          <p>Enviar Comprovativo</p>

          <input
            type="file"
            id="doc"
            onChange={handleFileChange}
            className={`w-[400px] h-[50px] max-lg:w-auto max-sm:w-auto flex p-4 bg-[#1F2126] rounded-[4px] text-[#9E9E9E]`}
          />
        </form>

        {pedidoEnviado && !okClicked && (
          <div className="fixed top-0 left-0 w-screen h-screen flex flex-col gap-5 items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-green-500 text-white p-4 rounded-lg">
              Pedido enviado com sucesso!
            </div>
            <button
              className="max-sm:mb-[100px] font-bold w-1/2 h-[56px] rounded-[4px] bg-[#00A7E1] hover:cursor-pointer flex justify-center items-center"
              onClick={handleOkClick}
            >
              OK
            </button>
          </div>
        )}

        <div className="w-[60%] flex flex-col items-center gap-8">
          <button
            className="max-sm:mb-[100px] font-bold w-[300px] h-[56px] rounded-[4px] bg-[#00A7E1] hover:cursor-pointer flex justify-center items-center"
            onClick={handleFinalizar}
          >
            Finalizar
          </button>
        </div>
      </section>
    </main>
  );
};

export default FinalizatedAdesion;
