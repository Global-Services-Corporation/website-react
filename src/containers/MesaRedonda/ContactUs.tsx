const ContactUs: React.FC = () => {
  return (
    <section className="h-[745px] w-full items-center justify-center bg-[#1b1a1acb]  flex">
      <div className="flex items-center gap-32">
        <div className="box-border max-sm:h-fit flex flex-col gap-[10px]">
          <h1 className=" text-[#D7AF26] font-semibold text-xl">
            Linha de Apoio
          </h1>

          <ul className="flex text-white text-lg flex-col gap-3 max-sm:text-[12px]">
            <li>
              <a href="tel:+244222731031">(+244) 222 731 031</a>
            </li>
            <li>
              <a href="tel:+244925835848">(+244) 925 835 848</a>
            </li>
            <li>
              <a href="tel:+244941064919">(+244) 941 064 919</a>
            </li>
            <li>
              <a href="mailto:geral@globalsc.ao">geral@globalsc.ao</a>
            </li>
            <li>
              <a href="mailto:sinistros@globalsc.ao">sinistros@globalsc.ao</a>
            </li>
          </ul>
          <h1 className=" text-[#D7AF26] font-semibold text-xl">Endereço</h1>
          <ul className="flex text-white text-lg flex-col gap-3 max-sm:text-[12px]">
            <li>
              <a href="https://maps.app.goo.gl/n1WaehYtnB417gaY7">
                Rua Aleixo de Abreu nº9, Luanda
              </a>
            </li>
          </ul>
        </div>
        <div className="w-[509px] h-[528px] items-center flex-col justify-center bg-white flex rounded-2xl gap-10">
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-[#D7AF26]">
              Entre em contacto
            </p>
            <p className="text-xs">Preencha o formulário para nos enviar </p>
          </div>
          <form action="">
            <p className="font-semibold text-base text-[#0E1937]">Nome</p>
            <input
              type="text"
              name="nome"
              id=""
              placeholder="Insira o seu nome"
              className="w-[361px] h-11 rounded-md p-4 bg-[#6C6C6C]"
            />
            <p className="font-semibold text-base text-[#0E1937]">Email</p>
            <input
              type="email"
              name="nome"
              id=""
              placeholder="Insira o seu email"
              className="w-[361px] h-11 rounded-md p-4 bg-[#6C6C6C]"
            />
            <p className="font-semibold text-base text-[#0E1937]">Telefone</p>
            <input
              type="tel"
              name="nome"
              id=""
              placeholder="Insira o seu telefone"
              className="w-[361px] h-11 rounded-md p-4 bg-[#6C6C6C]"
            />
            <p className="font-semibold text-base text-[#0E1937]">Mensagem</p>
            <input
              type="text"
              name="nome"
              id=""
              placeholder="Escreva aqui a sua mensagem"
              className="w-[361px] h-36 rounded-md p-4 pb-24 bg-[#6C6C6C]"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
