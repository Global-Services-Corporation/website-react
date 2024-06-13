import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { User } from "../../services/utils/types";
import { logoLyrics, bgConfirmAdesion } from "../../assets";

type TicketType = {
  id: string;
  label: string;
  price: number;
  available: number | string;
};

const ticketTypes: TicketType[] = [
  {
    id: "individual",
    label: "Participação: Individual",
    price: 150000,
    available: 30,
  },
  {
    id: "empresarial8",
    label: "Empresarial: 8 pessoas",
    price: 900000,
    available: 30,
  },
  {
    id: "empresarial5",
    label: "Empresarial: 5 pessoas",
    price: 650000,
    available: 30,
  },
  {
    id: "empresarial3",
    label: "Empresarial: 3 pessoas",
    price: 420000,
    available: 30,
  },
];

const TicketsPrices: React.FC = () => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(
    ticketTypes.reduce((acc, ticket) => {
      acc[ticket.id] = 0;
      return acc;
    }, {} as { [key: string]: number })
  );

  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleIncrease = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const handleDecrease = (id: string) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 0 ? prev[id] - 1 : 0,
    }));
  };

  const total = ticketTypes.reduce(
    (sum, ticket) => sum + quantities[ticket.id] * ticket.price,
    0
  );

  useEffect(() => {
    fetchUserData(id);
  }, [id]);

  const saveToLocalStorage = (
    key: string,
    data: { [key: string]: number },
    total: number
  ) => {
    const existingData = localStorage.getItem(key);
    const parsedData = existingData ? JSON.parse(existingData) : {};
    const updatedData = { ...parsedData };

    Object.keys(data).forEach((ticketId) => {
      if (updatedData[ticketId] !== undefined) {
        updatedData[ticketId] += data[ticketId];
      } else {
        updatedData[ticketId] = data[ticketId];
      }
    });

    updatedData.total = (updatedData.total || 0) + total;

    localStorage.setItem(key, JSON.stringify(updatedData));
  };

  return (
    <main className="w-screen h-screen relative bg-[#001032] flex flex-col items-center overflow-hidden max-sm:overflow-y-auto">
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

      <div className="text-white flex flex-col z-50 h-2/3 w-1/2 rounded-md justify-between p-14 bg-[#1B223C] my-auto max-sm:m-0">
        <h1 className="font-bold text-center text-3xl text-[#30CBE8]">
          Tickets
        </h1>
        {ticketTypes.map((ticket) => (
          <div
            key={ticket.id}
            className="flex w-full justify-between items-center shadow-inner shadow-black rounded-md p-4"
          >
            <p className="font-bold text-[#30CBE8] text-lg">{ticket.label}</p>

            <p className="font-bold  ">
              {ticket.price.toLocaleString("pt-PT", {
                style: "currency",
                currency: "AOA",
              })}
            </p>

            <div className="flex items-center justify-center h-8">
              <button
                onClick={() => handleDecrease(ticket.id)}
                className="bg-[#30CBE8] px-4 h-full"
              >
                -
              </button>

              <p className="bg-white text-black flex justify-center items-center px-4 h-full">
                {quantities[ticket.id]}
              </p>

              <button
                onClick={() => handleIncrease(ticket.id)}
                className="bg-[#30CBE8] px-4 h-full"
              >
                +
              </button>
            </div>
          </div>
        ))}

        <div className="flex flex-col w-full justify-between items-center h-1/4">
          <div className="flex gap-2 flex-col">
            <p className="flex font-bold gap-1">
              Quantitidade de Tickets:
              <span className="font-medium">
                {Object.values(quantities).reduce((sum, qty) => sum + qty, 0)}
              </span>
            </p>

            <p className="flex font-bold gap-1">
              Total:
              <span className="font-medium">
                {total.toLocaleString("pt-PT", {
                  style: "currency",
                  currency: "AOA",
                })}
              </span>
            </p>
          </div>

          <button
            onClick={() => {
              {
                quantities
                  ? navigate(`/confirm-adesion-personal/${user?.uuid}`)
                  : alert("Selecione algum ticket!");
              }
              saveToLocalStorage("accumulatedTicketData", quantities, total);
              console.log(localStorage.getItem("accumulatedTicketData"));
            }}
            className=" font-bold w-[300px] h-[56px] rounded-[4px] bg-[#00A7E1] hover:cursor-pointer flex justify-center items-center"
          >
            Avançar
          </button>
        </div>
      </div>
    </main>
  );
};

export default TicketsPrices;
