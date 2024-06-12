import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SimpleHeader from "../components/simple-header";
import {
  afroWoman,
  elipse,
  escudo,
  google,
  ilustration,
  listras,
} from "../assets";
import { User } from "../services/utils/types";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("bg-green-500"); // Estado para a cor do alerta
  const [user, setUser] = useState<User | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

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

  const onSubmit = async (formData: LoginForm) => {
    try {
      const response = await axios.post(
        "https://gsc.api.unocura.ao/login",
        formData
      );
      localStorage.setItem("token", response.data.token);

      setShowAlert(true);
      setAlertMessage("Seja bem-vindo à Global Services Corporation!");
      setAlertColor("bg-green-500");
      console.log("Login feito com sucesso");

      setTimeout(() => {
        navigate(`/${response.data.userId}`);
      }, 3000);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setShowAlert(true);
      setAlertMessage("Email ou senha incorrectos");
      setAlertColor("bg-red-500");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showAlert]);

  return (
    <section className="flex w-full h-screen">
      {showAlert && (
        <div
          className={`${alertColor} text-white px-3 py-2 rounded-md absolute top-8 right-8 max-sm:top-5 max-sm:right-5 z-50`}
        >
          {alertMessage}
        </div>
      )}

      <aside className="w-[50%] max-sm:hidden h-full bg-gradient-to-b from-[#075670] to-[#039bcf] relative flex flex-col items-center justify-between">
        <div className="flex flex-col justify-between w-[80%] gap-[20px] mt-[5%] 2xl:mt-[10%] z-10">
          <h1 className="text-[#fff] font-semibold text-[25px] text-center 2xl:text-[35px]">
            Seja bem-vindo de volta!
          </h1>
          <p className="text-[#fff] text-center 2xl:text-[25px]">
            Continue aproveitando nossos serviços exclusivos de formação,
            seguros e eventos.
          </p>
        </div>

        <img src={listras} alt="" className="absolute top-0 h-full" />
        <div className="relative w-[80%] 2xl:w-[75%] lg:w-[95%] xl:w-[90%] z-10 flex justify-center h-[600px] 2xl:h-[500px]">
          <img
            src={ilustration}
            alt=""
            className="absolute left-[25%] top-[15%] 2xl:top-[10%] 2xl:left-[20%] w-[80px] 2xl:w-[100px]"
          />
          <img
            src={escudo}
            alt=""
            className="w-[100px] absolute z-10 bottom-[80px] xl:bottom-[30px] animate-bounce"
          />
          <img
            src={afroWoman}
            alt=""
            className="absolute bottom-0 w-[400px] lg:w-[400px] xl:w-[450px] xl:h-[370px] 2xl:w-[550px] 2xl:h-[450px]"
          />
        </div>
        <img
          src={elipse}
          alt=""
          className="absolute bottom-0 w-full h-[60%] z-0"
        />
      </aside>

      <main className="flex flex-col h-full w-[50%] items-center overflow-y-auto max-sm:w-full">
        <SimpleHeader />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[50%] max-sm:w-[75%] gap-[15px] my-auto py-[25px]"
        >
          <h1 className="font-bold text-[30px] text-center">Entrar na conta</h1>

          <div className="flex flex-col w-full gap-[15px] mb-[12px]">
            <div className="flex flex-col gap-[4px]">
              <label htmlFor="email" className="font-semibold text-[15px]">
                Email
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Insira o seu email, por favor.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email inválido",
                  },
                })}
                className="bg-[#F2F2F2] rounded-sm h-[40px] px-4"
              />
              {errors.email && (
                <span className="text-red-500 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col gap-[4px]">
              <label htmlFor="password" className="font-semibold text-[15px]">
                Palavra-passe
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Senha é obrigatória",
                  minLength: {
                    value: 6,
                    message: "Senha deve conter no mínimo 6 caracteres",
                  },
                })}
                className="bg-[#F2F2F2] rounded-sm h-[40px] px-4"
              />
              {errors.password && (
                <span className="text-red-500 text-xs">
                  {errors.password.message}
                </span>
              )}
            </div>
          </div>

          <div className="w-full flex flex-col items-center gap-1">
            <button
              type="submit"
              className="bg-[#039BCF] hover:bg-[#039ccfc4] rounded-md h-[45px] text-[#fff] font-semibold w-full"
            >
              Iniciar Sessão
            </button>

            <a
              href="/recover-password"
              className="hover:text-[#039BCF] text-center"
            >
              Esqueceu da sua palavra-passe?
            </a>
          </div>

          <div className="w-[60%] h-[50px] flex items-center gap-[10px] mx-auto">
            <hr className="w-full" />
            ou
            <hr className="w-full" />
          </div>

          <button className="rounded-md h-[48px] border-[1px] w-full flex justify-center items-center gap-[8px] text-[#656666] font-semibold p-[8px] hover:bg-[#e7e7e779]">
            <img src={google} alt="" /> Continuar com o Google
          </button>

          <a
            href="/create-account"
            className="mx-auto hover:text-[#039BCF] text-center"
          >
            Não está registrado? Crie uma conta.
          </a>
        </form>
      </main>
    </section>
  );
};

export default LoginPage;
