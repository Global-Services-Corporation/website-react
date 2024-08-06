import { newsletterIcon } from "../../assets";

const Newsletter: React.FC = () => {
  return (
    <section className="w-4/5 max-sm:w-4/5 h-80 flex text-white bg-[#037ea7e8] rounded-2xl items-center justify-between px-16 max-sm:px-5 mt-32 max-sm:mt-0 relative">
      <div className="w-3/5 max-sm:w-full h-4/5 flex flex-col justify-center gap-4">
        
        <p className="font-bold text-4xl max-sm:text-2xl ">Subscreva à nossa newsletter</p>
        <p className="text-white max-sm:text-sm">
          As empresas geralmente promovem a sua marca, produtos e serviços
          identificando o público. Não é de admirar que a estratégia de promoção
          seja um dos processos mais importantes do marketing.
        </p>
       
        <form className="flex gap-2 bg-white p-2 justify-between rounded-md">
        <input type="text" name="" placeholder="Insira o seu email..." className=" px-2 w-full outline-none bg-transparent text-white" />
        <button type="submit" className="bg-[#0E1937] px-4 py-2 rounded-md max-sm:text-sm">Subscrever</button>
        </form>
      </div>
      <div>
        <img src={newsletterIcon} alt="" className="absolute bottom-0 right-0 w-96 max-sm:hidden"/>
      </div>
    </section>
  );
};

export default Newsletter;
