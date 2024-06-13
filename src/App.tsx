import React, { useState, useEffect } from "react"
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { AllRoutes } from "./routes"
import Layout from "./layouts"
import ErrorPage from "./routes/error-page"

import ConfirmAdesionEnterprise from "./views/adesion/ConfirmEnterprise" // Corrigi o nome da rota
import CreateAccountPage from "./views/CreateAccount"
import axios from "axios"
import LoginPage from "./views/Login"
import { User } from "./services/utils/types"
import ConfirmAdesionPersonal from "./views/adesion/ConfirmPersonal"
import FinalizatedAdesion from "./views/adesion/FinalizatedAdesion"
import FinalizatedAdesionEnterprise from "./views/adesion/FinalizatedAdesionEnterprise"
import TicketsPrices from "./views/adesion/TicketsPrices"

const isAuthenticated = () => {
	return !!localStorage.getItem("token")
}

function App() {
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const token = localStorage.getItem("token")
				if (token) {
					const response = await axios.get(`https://gsc.api.unocura.ao/token`, {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					})
					setUser(response.data)
				}
			} catch (error) {
				console.error("Erro ao baixar dados do usuário:", error)
			}
		}
		fetchData()
	}, [])

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/login"
					element={
						isAuthenticated() && user ? (
							<Navigate to={`/${user.uuid}`} />
						) : (
							<LoginPage />
						)
					}
				/>
				<Route
					path="/create-account"
					element={
						isAuthenticated() && user ? (
							<Navigate to={`/${user.uuid}`} />
						) : (
							<CreateAccountPage />
						)
					}
				/>
				<Route
					path="/confirm-adesion-enterprise/:id"
					element={<ConfirmAdesionEnterprise />}
				/>

				<Route
					path="/confirm-adesion-personal/:id"
					element={<ConfirmAdesionPersonal />}
				/>

				<Route path="/finalizado/:id" element={<FinalizatedAdesion />} />

				<Route
					path="/finalizado-enterprise/:id"
					element={<FinalizatedAdesionEnterprise />}
				/>

				<Route path="/tickets-datas/:id" element={<TicketsPrices />} />

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
