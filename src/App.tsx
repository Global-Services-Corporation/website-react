import { Routes, Route, BrowserRouter } from "react-router-dom"
import { AllRoutes } from "./routes"
import Layout from "./layouts"
import ErrorPage from "./routes/error-page"
import Events from "./views/landing/Events"

function App() {
	return (
		<BrowserRouter>
			<Routes>
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
