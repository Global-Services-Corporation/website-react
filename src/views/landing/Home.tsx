import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../services/utils/types";
import Banner from "../../containers/LandingPage/Banner";
import AboutUs from "../../containers/LandingPage/AboutUs";
import Services from "../../containers/LandingPage/Services";
import { Header } from "../../components/header";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("https://gsc.api.unocura.ao/token", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        }
      } catch (error) {
        localStorage.removeItem("token");
        console.error("Erro ao fazer login:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (user !== null) {
      navigate(`/${user.uuid}`);
    }
  }, [user, navigate]);

  return (
    <div className="bg-[#001032] h-full text-white gap-[64px] flex flex-col justify-center items-center">
        <Header/>
        <Banner/>
        <Services/>
        <AboutUs/>
    </div>
    
  
  );
};

export default HomePage;
