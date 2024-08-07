import { newsletterIcon } from "../../assets";

const Newsletter: React.FC = () => {
  return (
    <section className="w-4/5 max-lg:w-4/5 flex text-white bg-[#0c2a42e6] rounded-2xl items-center justify-between px-16 max-lg:px-5  relative lg:py-20 max-lg:py-14 lg:my-28 max-lg:my-20">
      <div className="w-3/5 max-lg:w-full h-4/5 flex flex-col justify-center gap-4">
        
        <p className="font-bold text-4xl max-lg:text-2xl ">Subscreva à nossa newsletter</p>
        <p className="text-white max-lg:text-sm">
          As empresas geralmente promovem a sua marca, produtos e serviços
          identificando o público. Não é de admirar que a estratégia de promoção
          seja um dos processos mais importantes do marketing.
        </p>
       
        <form className="flex gap-2 bg-white p-2 justify-between rounded-md">
        <input type="text" name="" placeholder="Insira o seu email..." className=" px-2 w-full outline-none bg-transparent text-white" />
        <button type="submit" className="bg-[#0E1937] px-4 py-2 rounded-md max-lg:text-sm">Subscrever</button>
        </form>
      </div>
      <div>
        <img src={newsletterIcon} alt="" className="absolute bottom-0 right-0 w-96 max-lg:hidden"/>
      </div>
    </section>
  );
};

export default Newsletter;
