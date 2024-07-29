const ContactUs: React.FC = () => {
	return (
		<section className="bg-gradient-to-r from-[#010D29] to-[#032087] w-full relative py-20">
			<div className="flex justify-around w-full">
				<div className="box-border max-sm:h-fit flex flex-col gap-[10px] py-20">
					<h1 className=" text-[#FF9800] text-2xl font-bold">Linha de Apoio</h1>

					<ul className="flex text-white text-base flex-col gap-3 max-sm:text-[12px]">
						<li>
							<a href="tel:+244222731031">(+244) 222 731 031</a>
						</li>

						<li>
							<a href="tel:+244941064919">(+244) 941 064 919</a>
						</li>
					</ul>
					<h1 className=" text-[#FF9800] text-2xl font-bold">Endereço</h1>
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
						<p className="text-4xl font-bold text-[#FF9800]">
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
							className="bg-[#FF9800] hover:bg-transparent hover:text-[#FF9800] hover:border border-[#FF9800] cursor-pointer text-white w-full h-11 rounded-md p-2 flex justify-center items-center"
						/>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactUs
