import { bgEntreEmContacto } from "../../assets/mesa-redonda/entreEmContacto"

const ContactUs: React.FC = () => {
	return (
		<section className="h-screen w-full relative">
			<img
				src={bgEntreEmContacto}
				alt=""
				className="w-full h-full object-cover"
			/>
			<div className="h-full w-full items-center justify-center bg-[#065bab80] flex absolute inset-y-0 ">
				<div className="flex items-center justify-around w-full">
					<div className="box-border max-sm:h-fit flex flex-col gap-[10px]">
						<h1 className=" text-[#D7AF26] text-2xl font-bold">Linha de Apoio</h1>

						<ul className="flex text-white text-base flex-col gap-3 max-sm:text-[12px]">
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
						<h1 className=" text-[#D7AF26] text-2xl font-bold">Endereço</h1>
						<ul className="flex text-white text-base flex-col gap-3 max-sm:text-[12px]">
							<li>
								<a href="https://maps.app.goo.gl/n1WaehYtnB417gaY7">
									Rua Aleixo de Abreu nº 9, Luanda
								</a>
							</li>
						</ul>
					</div>

					<div className="w-[550px] items-center flex-col justify-center bg-white flex rounded-2xl gap-5 px-16 py-10 h-full">
						<div className="flex flex-col items-center w-full">
							<p className="text-4xl font-bold text-[#D7AF26]">
								Entre em contacto
							</p>
							<p className="text-xs">Preencha o formulário para nos enviar </p>
						</div>
						<form action="" className="w-full flex flex-col gap-4">
							<div>
								<p className="text-base text-[#0E1937]">Nome</p>
								<input
									type="text"
									name="nome"
									id=""
									placeholder="Insira o seu nome"
									className="w-full h-11 rounded-md p-4 bg-[#6c6c6c33]"
								/>
							</div>

							<div>
								<p className="text-base text-[#0E1937]">Email</p>
								<input
									type="email"
									name="email"
									id=""
									placeholder="Insira o seu email"
									className="w-full h-11 rounded-md p-4 bg-[#6c6c6c33]"
								/>
							</div>

							<div>
								<p className="text-base text-[#0E1937]">Telefone</p>
								<input
									type="tel"
									name="contact"
									id=""
									placeholder="Insira o seu telefone"
									className="w-full h-11 rounded-md p-4 bg-[#6c6c6c33]"
								/>
							</div>

							<div>
								<p className="text-base text-[#0E1937]">Mensagem</p>
								<textarea
									name="message"
									id="message"
									placeholder="Escreva aqui a sua mensagem"
									className="w-full h-28 rounded-md p-4 bg-[#6c6c6c33]"
								/>
							</div>

							<input
								type="submit"
								value="Enviar mensagem"
								className="bg-[#065CAB] text-white w-full h-11 rounded-md p-2 flex justify-center items-center"
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactUs
