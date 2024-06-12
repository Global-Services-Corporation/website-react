import React from "react"
import { Navigate } from "react-router-dom"
import AdesionLayout from "./AdesionLayout"
import LandingLayout from "./LandingLayout"
import LoggedLayout from "./LoggedLayout"

interface LayoutProps {
	element: React.ReactElement
	type: string
}

const isAuthenticated = () => {
	return !!localStorage.getItem("token")
}

const Layout: React.FC<LayoutProps> = ({ element, type }) => {
	switch (type) {
		case "private":
			return isAuthenticated() ? (
				<LoggedLayout>{element}</LoggedLayout>
			) : (
				<Navigate to="/login" />
			)
		case "public":
			return <LandingLayout>{element}</LandingLayout>
		case "adesion":
			return <AdesionLayout>{element}</AdesionLayout>
		default:
			return <LandingLayout>{element}</LandingLayout>
	}
}

export default Layout
