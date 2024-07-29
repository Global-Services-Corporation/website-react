import { Routes, Route, BrowserRouter } from "react-router-dom"
import { AllRoutes } from "./routes"
import Layout from "./layouts"
import ErrorPage from "./routes/error-page"
import PersonalForm from "./views/adesion/PersonalForm";
import ConfirmAdesionPersonal from "./views/adesion/ConfirmPersonal"
import TicketsPrices from "./views/adesion/TicketsPrices"
import MesaRedonda from "./views/landing/MesaRedonda"
import Banner from "./containers/MesaRedonda/Banner";

function App() {
	return (
		<BrowserRouter>
			<Routes>
			<Route path="/" element={<MesaRedonda />} />
				<Route
					path="/mesa-redonda"
					element={<Banner />}
				/>

				<Route
					path="/confirm-adesion-personal"
					element={<ConfirmAdesionPersonal />}
				/>

				<Route path="/tickets-datas" element={<TicketsPrices />} />

				<Route
					path="/personal-form"
					element={<PersonalForm />}
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
