import { Routes, Route, BrowserRouter } from "react-router-dom"
import { AllRoutes } from "./routes"
import Layout from "./layouts"
import Banner from "./containers/Baw2024/Banner"
import ErrorPage from "./routes/error-page"
import ConfirmAdesionPersonal from "./views/adesion/ConfirmPersonal"
import PersonalForm from "./views/adesion/PersonalForm"
import TicketsPrices from "./views/adesion/TicketsPrices"
import Events from "./views/landing/Events"
import MesaRedonda from "./views/landing/MesaRedonda"
import FinalizatedAdesion from "./views/adesion/FinalizatedAdesion"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MesaRedonda />} />
				<Route path="/mesa-redonda" element={<Banner />} />

				<Route path="/finalizated" element={<FinalizatedAdesion />} />

				<Route
					path="/confirm-adesion"
					element={<ConfirmAdesionPersonal />}
				/>

				<Route path="/tickets-datas" element={<TicketsPrices />} />

				<Route path="/personal-form" element={<PersonalForm />} />

				{AllRoutes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={<Layout element={route.element} type={route.type} />}
					/>
				))}

				<Route path="/events" element={<Events />} />

				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
