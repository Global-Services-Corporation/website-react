
import { RouteType } from "../../services/config/types"

import HomePage from "../../views/landing/Home"

const Routes: RouteType[] = [
	{
		label: "",
		path: "/",
		element: <HomePage />,
		type: "public",
	},
	
]

export const PublicRoutes = Routes
