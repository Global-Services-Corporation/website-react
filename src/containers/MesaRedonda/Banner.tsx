import { mesaRedonda } from "../../assets"

const Banner: React.FC = () => {
	return (
		<main className="bg-[#00000079] h-[742px] relative flex justify-center items-center">
			<video src="" className="h-full w-full" autoPlay muted={true}></video>

			<div className="absolute w-full h-full top-0 left-0 flex flex-col p-10">
				<nav className="w-full">
					<img src={mesaRedonda} alt="Logo Mesa Redonda" className="w-32" />
				</nav>

				<div className="flex flex-col justify-center items-center mx-auto my-auto text-white gap-20 p-12">
					<div className="flex flex-col gap-5 w-4/5 justify-center items-center">
						<h1 className="font-bold text-4xl text-center">
							CEOs TECH REVELAM O PRÓXIMO GRANDE SALTO CORPORATIVO
						</h1>

						<button className="hover:bg-[#ffff] hover:text-[#1355E9] bg-[#1355E9] py-2.5 px-6 font-semibold rounded-md transition-colors duration-300">
							Inscrever-se
						</button>
					</div>

					<div>Contador Regressivo do Tempo</div>
				</div>
			</div>
		</main>
	)
}

export default Banner
