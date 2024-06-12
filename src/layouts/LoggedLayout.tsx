import React from "react"
import { Header } from "../components/header"
import { Navigate } from "react-router-dom"

const isAuthenticated = () => {
	return !!localStorage.getItem("token")
}

const LoggedLayout: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	if (!isAuthenticated()) {
		return <Navigate to="/login" />
	}

	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	)
}

export default LoggedLayout
