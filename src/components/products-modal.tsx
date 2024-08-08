const ProductsModal: React.FC = () => {
	return (
		<div className="p-24 flex flex-col">
			<h1 className="font-bold text-lg w-full flex items-center gap-2">
				<span>
					<img src="" alt="" className="W-8 h-8" />
				</span>{" "}
				Seguro de Saúde
			</h1>

			<div className="flex justify-between items-center w-full">
				<div>
					<button>Finalidade</button>
					<button>Cobertura</button>
					<button>Documentos</button>
				</div>

				<button>Voltar</button>
			</div>

			<div>
				<div className="flex flex-col h-full">
					<div>
						<h2>Finalidade</h2>

						<div>
							<p>Textos</p>
						</div>
					</div>

					<button>Solicitar Proposta</button>
				</div>

				<img src="" alt="" />
			</div>
		</div>
	)
}

export default ProductsModal
