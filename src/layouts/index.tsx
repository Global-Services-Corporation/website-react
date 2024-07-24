import React from "react"
import LandingLayout from "./LandingLayout"

interface LayoutProps {
	element: React.ReactElement
	type: string
}

const Layout: React.FC<LayoutProps> = ({ element, type }) => {
	switch (type) {
		case "public":
			return <LandingLayout>{element}</LandingLayout>
	}
}

export default Layout
