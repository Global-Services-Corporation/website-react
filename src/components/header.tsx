import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { logoLyrics, logout, menu } from "../assets"; // Importe o ícone do menu
import { User } from "../services/utils/types";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a exibição do menu
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 10;

      if (scrollTop > scrollThreshold) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInscription = () => {
    localStorage.removeItem("token");
    navigate("/personal");
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isMaxSm = window.innerWidth <= 720; // Defina o limite de largura para 'max-sm'

  return (
    <header
      className={`${
        isMenuOpen ? "h-screen" : "fixed h-[80px]"
      } top-0 flex w-full justify-between items-center px-[55px] max-sm:px-8 box-border ${
        isScrolled
          ? "bg-[#0000009f] transition duration-[4s] backdrop-blur-sm max-sm:fixed"
          : "transition duration-[4s]"
      } z-50`}
    >
      <a
        href={user ? `/landing-events/${user.uuid}` : "/landing-events/"}
        className="max-md:w-[75px]"
      >
        <img
          src={logoLyrics}
          alt="Logotipo GSC com as letras"
          className="w-full"
        />
      </a>


      
    </header>
  );
};
