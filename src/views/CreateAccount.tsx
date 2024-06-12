import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SimpleHeader from "../components/simple-header";
import { useForm } from "react-hook-form";
import { elipse, escudo, google } from "../assets";
import { useEffect, useState } from "react";

const CreateAccountPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    try {
      if (data.password !== data.confirmPassword) {
        console.error("A senha e a confirmação da senha não coincidem.");
        setMessage("As senhas não coincidem");
        return;
      }

      await axios.post("https://gsc.api.unocura.ao/create", {
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
        user_type: "user",
      });

      console.log("Conta criada com sucesso");
      setMessage("Conta criada com sucesso");
      setShowAlert(true);

      setTimeout(() => {
        navigate(`/login`);
      }, 3000);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      setMessage("Email ou senha incorrectos")
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <main className="flex w-full h-screen overflow-hidden">
      {message && (
        <div
          className={`bg-${
            showAlert ? "green" : "red"
          }-500 text-white px-3 py-2 rounded-md absolute top-8 right-8 max-sm:top-5 max-sm:right-5 z-50`}
        >
          {message}
        </div>
      )}

      <aside className="w-[50%] max-sm:hidden h-full bg-gradient-to-b from-[#075670] to-[#039bcf] relative flex flex-col items-center justify-between">
        <div className="w-[80%] 2xl:w-[90%] z-20 flex flex-col items-center justify-between h-[60%] lg:h-[50%] xl:h-[50%] 2xl:h-[70%] mt-[8%]">
          <div className="flex flex-col justify-between max-w-[560px] 2xl:max-w-[850px] gap-[50px] mb-[40px]">
            <div className="text-[14px] mx-auto flex flex-col justify-between gap-[20px]">
              <h3 className="text-[#fff] font-semibold text-[25px] text-center 2xl:text-[45px]">
                Faça parte disto tudo.
              </h3>
              <p className="text-[#fff] text-center 2xl:text-[25px]">
                Aqui, estamos dedicados a oferecer as melhores propostas e os
                melhores seguros para atender às suas necessidades, formações
                profissionais e os melhores eventos.
              </p>
            </div>
            <h1 className="text-[#fff] font-bold text-[32px] lg:text-[25px] max-w-[560px] text-center mx-auto 2xl:text-[50px]">
              Desde as melhores propostas de seguro aos melhores eventos.
            </h1>
          </div>
          <img
            src={escudo}
            alt=""
            className="w-[250px] mx-auto lg:w-[270px] lg-[220px] xl:w-[300px] 2xl:w-[500px] animate-pulse"
          />
        </div>
        <img src={elipse} alt="" className="absolute bottom-0 w-full h-[60%]" />
      </aside>

      <div className="flex flex-col h-full w-[50%] max-sm:w-full items-center overflow-y-auto">
        <SimpleHeader />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-[60%] max-sm:w-[75%] gap-[10px] my-auto py-[25px]"
        >
          <h1 className="font-bold text-[30px]">Criar conta</h1>

          <div className="flex flex-col  w-full gap-[15px]">
            <div className="flex justify-between max-sm:flex-col max-sm:gap-[15px]">
              <div className="flex flex-col w-[49%] max-sm:w-full gap-[4px] ">
                <label htmlFor="name" className="font-semibold text-[15px]">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: true })}
                  className={`bg-[#F2F2F2] rounded-sm h-[40px] max-sm:w-full max-sm:px-3 px-3 ${
                    errors.name ? "border-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    Este campo é obrigatório
                  </span>
                )}
              </div>
              <div className="flex flex-col w-[49%] gap-[4px] max-sm:w-full">
                <label htmlFor="surname" className="font-semibold text-[15px]">
                  Sobrenome
                </label>
                <input
                  type="text"
                  id="surname"
                  {...register("surname", { required: true })}
                  className={`bg-[#F2F2F2] rounded-sm h-[40px] max-sm:w-full max-sm:px-3 px-3 ${
                    errors.surname ? "border-red-500" : ""
                  }`}
                />
                {errors.surname && (
                  <span className="text-red-500 text-sm">
                    Este campo é obrigatório
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <label htmlFor="email" className="font-semibold text-[15px]">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
                className={`bg-[#F2F2F2] rounded-sm h-[40px] max-sm:px-3 px-3 ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  Este campo é obrigatório
                </span>
              )}
            </div>
            <div className="flex flex-col gap-[4px]">
              <label htmlFor="password" className="font-semibold text-[15px]">
                Palavra-passe
              </label>
              <input
                type="password"
                id="password"
                {...register("password", { required: true })}
                className={`bg-[#F2F2F2] rounded-sm h-[40px] max-sm:px-3 px-3 ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  Este campo é obrigatório
                </span>
              )}
            </div>
            <div className="flex flex-col gap-[4px]">
              <label
                htmlFor="confirmPassword"
                className="font-semibold text-[15px]"
              >
                Confirmar palavra-passe
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", { required: true })}
                className={`bg-[#F2F2F2] rounded-sm h-[40px] max-sm:px-3 px-3 ${
                  errors.confirmPassword ? "border-red-500" : ""
                }`}
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-sm">
                  Este campo é obrigatório
                </span>
              )}
            </div>
          </div>
          <button className="bg-[#039BCF] hover:bg-[#039ccfc4] rounded-md h-[45px] text-[#fff] font-semibold w-full">
            Criar conta
          </button>
          <div className="w-[60%] h-[50px] flex items-center gap-[10px] mx-auto">
            <hr className="w-full" />
            ou
            <hr className="w-full" />
          </div>
          <button className="rounded-md h-[48px] border-[1px] w-full flex justify-center items-center gap-[5px] text-[#656666] font-semibold p-[8px] hover:bg-[#e7e7e779]">
            <img src={google} alt="" /> Continuar com o Google
          </button>
          <Link to="/login" className="mx-auto hover:text-[#039BCF]">
            Já tem uma conta? Entre.
          </Link>
        </form>
      </div>
    </main>
  );
};

export default CreateAccountPage;
