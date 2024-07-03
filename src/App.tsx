import { Routes, Route, BrowserRouter } from "react-router-dom"
import { AllRoutes } from "./routes"
import Layout from "./layouts"
import ErrorPage from "./routes/error-page"
import ConfirmAdesionEnterprise from "./views/adesion/ConfirmEnterprise" // Corrigi o nome da rota
import ConfirmAdesionPersonal from "./views/adesion/ConfirmPersonal"
import FinalizatedAdesion from "./views/adesion/FinalizatedAdesion"
import FinalizatedAdesionEnterprise from "./views/adesion/FinalizatedAdesionEnterprise"
import TicketsPrices from "./views/adesion/TicketsPrices"
import TicketsPricesEnterprise from "./views/adesion/TicketsPricesEnterprise"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/confirm-adesion-enterprise/"
					element={<ConfirmAdesionEnterprise />}
				/>

				<Route
					path="/confirm-adesion-personal/"
					element={<ConfirmAdesionPersonal />}
				/>

				<Route path="/finalizado/:id" element={<FinalizatedAdesion />} />

				<Route
					path="/finalizado-enterprise/"
					element={<FinalizatedAdesionEnterprise />}
				/>

				<Route path="/tickets-datas/" element={<TicketsPrices />} />
				<Route
					path="/tickets-datas-enterprise/"
					element={<TicketsPricesEnterprise />}
				/>

				{AllRoutes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={<Layout element={route.element} type={route.type} />}
					/>
				))}

				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
