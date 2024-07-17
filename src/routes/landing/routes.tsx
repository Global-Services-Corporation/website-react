import { RouteType } from "../../services/config/types"
import Events from "../../views/landing/Events"

import HomePage from "../../views/landing/Home"

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
]

export const PublicRoutes = Routes
