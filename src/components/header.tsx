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

  const navbar = [{}];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    window.location.reload();
  };

  const getInitials = (name: string) => {
    const [firstName, lastName] = name.split(" ");
    return `${firstName.charAt(0)}${lastName ? lastName.charAt(0) : ""}`;
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

      {isMaxSm && (
        <img
          src={menu}
          alt="Ícone do Menu"
          className="cursor-pointer w-12"
          onClick={toggleMenu}
        />
      )}

      <div
        className={`flex w-[70%] max-sm:w-screen max-sm:py-5 justify-between gap-8 max-sm:flex-col max-sm:px-8 ${
          isMaxSm
            ? isMenuOpen
              ? "absolute h-screen z-50 gap-4 bottom-0 left-0 bg-black"
              : "hidden"
            : ""
        }`}
      >
        {isMenuOpen && (
          <img
            src={menu}
            alt="Ícone do Menu"
            className="cursor-pointer w-12"
            onClick={toggleMenu}
          />
        )}

        <nav
          className={`w-[590px] flex max-sm:flex-col max-sm:justify-center justify-center gap-10 text-[#fff] box-border h-[50px] max-sm:w-full max-sm:h-[70%] items-center`}
        >
          {navbar.map((navItem) => (
            <ul key={navItem.id}>
              <li className="hover:text-[#00A7E1] font-medium hover:border-b-[5px] hover:border-b-[#00A7E1] max-sm:border-none">
                <a href={user ? `${navItem.page}${user.uuid}` : navItem.page}>
                  {navItem.label}
                </a>
              </li>
            </ul>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-3">
          {user ? (
            <div className="flex h-full justify-center items-center gap-5">
              {user.photo ? (
                <img
                  src={user.photo}
                  alt="User Picture"
                  className="w-[40px] h-[40px] flex justify-center items-center box-border rounded-full"
                />
              ) : (
                <span className="bg-white p-[10px] w-[40px] h-[40px] flex justify-center items-center box-border rounded-full font-bold text-xl">
                  {getInitials(`${user.name} ${user.surname}`)}
                </span>
              )}

              <div className="flex flex-col text-white">
                <p className="font-bold text-[15px]">
                  {user.name} {user.surname}
                </p>

                <p className="text-[13px] text-[#fdfdfdb9]">{user.email}</p>
              </div>

              <button onClick={handleLogout}>
                <img src={logout} alt="Logout Icon" className="w-[20px]" />
              </button>
            </div>
          ) : (
            <div className="max-sm:flex max-sm:flex-col max-sm:w-full gap-4 flex">
              <a
                href="/create-account"
                className="flex justify-center items-center w-[103px] max-sm:w-full h-[38px] rounded-md bg-[#ffffff65] text-[#fff]"
              >
                Criar Conta
              </a>

              <a
                href="/login"
                className="bg-[#0239FE] w-[74px] h-[38px] max-sm:w-full rounded-md text-[#fff] flex justify-center items-center"
              >
                Entrar
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
