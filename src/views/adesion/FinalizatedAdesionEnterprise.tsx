import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { downloadPay, logoLyrics } from "../../assets";

import { User } from "../../services/utils/types";
import Loading from "./Loading";

const FinalizatedAdesionEnterprise: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [enterpriseData, setEnterpriseData] = useState<any>(null);
  const [ticketData, setTicketData] = useState<any>(null);
  const [pedidoEnviado, setPedidoEnviado] = useState(false);
  const [okClicked, setOkClicked] = useState(false);

  useEffect(() => {
    fetchUserData(id);
    const enterpriseFormData = localStorage.getItem("enterpriseFormData");
    const ticketFormData = localStorage.getItem("accumulatedTicketData");

    if (enterpriseFormData) {
      setEnterpriseData(JSON.parse(enterpriseFormData));
    }

    if (ticketFormData) {
      setTicketData(JSON.parse(ticketFormData));
    }
  }, [id]);

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setFile(fileList[0]);
    }
  };

  const handleFinalizar = async () => {
    if (!file || !enterpriseData) {
      console.error("Nenhum arquivo selecionado ou dados pessoais ausentes.");
      return;
    }

    setIsLoading(true); // Ativar o estado de loading antes da requisição

    const formData = new FormData();
    formData.append("doc", file);

    formData.append("name", enterpriseData.nome);
    formData.append("email", enterpriseData.email);
    formData.append(
      "price",
      ticketData.total.toLocaleString("pt-PT", {
        style: "currency",
        currency: "AOA",
      })
    );
    formData.append("contact", enterpriseData.contacto);
    formData.append("ticketsData", JSON.stringify(ticketData));

    try {
      const response = await axios.post(
        `https://gsc.api.unocura.ao/send-email`,
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
    localStorage.removeItem("accumulatedTicketData");
    setOkClicked(true);
    navigate(`/enterprise/${user?.uuid}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="h-screen relative bg-[#001032] flex flex-col items-center overflow-hidden max-sm:overflow-y-auto">
      <header className="w-full py-4 px-6 z-10 flex items-center justify-between">
        <a href={user ? `/${user?.uuid}` : "/"}>
          <img src={logoLyrics} alt="Logotipo da Global Services Corporation" />
        </a>

        <Link
          to={`/tickets-datas-enterprise/${user?.uuid}`}
          className="text-white font-bold"
          onClick={() => {
            localStorage.removeItem("accumulatedTicketData");
          }}
        >
          Cancelar
        </Link>
      </header>

      <section className="text-white flex flex-col z-50 h-3/4 w-2/3 max-sm:w-[90%] rounded-md justify-between p-10 bg-[#1B223C] my-auto items-center">
        <h1 className="text-[35px] text-white font-semibold text-center max-sm:text-[25px]">
          FINALIZAR RESERVA
        </h1>

        <div className="flex items-center flex-col gap-1">
          <p className="text-lg font-bold">Coordenadas Bancárias:</p>
          <p className="text-center max-sm:text-sm flex flex-col gap-1">
            <span className="text-[#00A7E1]">BAI</span>
            <span>GLOBAL SC PRESTACAO SERVICOS LDA</span>
            IBAN: 0040.0000.0066.0285.1016.3
          </p>
        </div>

        <div className="text-center">
          <p className="font-bold text-[#00A7E1]">Valor total a enviar:</p>

          <p>
            {`${ticketData?.total.toLocaleString("pt-PT", {
              style: "currency",
              currency: "AOA",
            })}` || "Nenhum"}
          </p>
        </div>

        <form className="w-[90%] max-sm:w-full flex flex-col items-center h-30 justify-around max-sm:flex max-sm:flex-col gap-3">
          <p className="font-semibold">Enviar Comprovativo</p>

          <label
            htmlFor="doc"
            className="cursor-pointer  text-white  max-lg:w-auto max-sm:w-auto flex items-center justify-center rounded-lg text-center p-2"
          >
            {file ? (
              <p className="bg-[#00A7E1] p-4 rounded-lg  w-5/6">{file.name}</p>
            ) : (
              <img src={downloadPay} />
            )}
            <input
              type="file"
              id="doc"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        </form>

        {pedidoEnviado && !okClicked && (
          <div className="fixed top-0 left-0 w-screen h-screen flex flex-col gap-5 items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-white text-[#00A7E1] p-4 rounded-lg flex flex-col justify-around items-center max-sm:h-1/4 h-1/3">
              Pedido enviado com sucesso!
              <button
                className="font-bold w-1/2 h-10 rounded-[4px] bg-[#00A7E1] hover:cursor-pointer flex justify-center items-center text-white"
                onClick={handleOkClick}
              >
                OK
              </button>
            </div>
          </div>
        )}

        <div className="w-[60%] flex flex-col items-center gap-8">
          <button
            className="max-sm:w-full font-bold w-[300px] h-14 rounded-[4px] bg-[#00A7E1] hover:cursor-pointer flex justify-center items-center"
            onClick={handleFinalizar}
          >
            Finalizar
          </button>
        </div>
      </section>
    </main>
  );
};

export default FinalizatedAdesionEnterprise;
