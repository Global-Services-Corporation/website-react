import { RouteType } from "../../services/config/types"
import Events from "../../views/landing/Events"

import HomePage from "../../views/landing/Home"
import InsurancePage from "../../views/landing/Services"

const Routes: RouteType[] = [
	{
		label: "",
		path: "/",
		element: <HomePage />,
		type: "public",
	},
	{
		label: "",
		path: "/events",
		element: <Events />,
		type: "public",
	},

	{
		label: "",
		path: "/insurance",
		element: <InsurancePage />,
		type: "public",
	},
]

export const PublicRoutes = Routes
