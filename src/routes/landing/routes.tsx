import EnterpriseForm from "../../views/adesion/EnterpriseForm"
import PersonalForm from "../../views/adesion/PersonalForm"
import { RouteType } from "../../services/config/types"
import InfoPage from "../../views/landing/Baw2024"
import HomePage from "../../views/landing/Home"
import Events from "../../views/landing/Events"

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
		path: "/landing-events",
		element: <InfoPage />,
		type: "public",
	},
	{
		label: "",
		path: "/enterprise",
		element: <EnterpriseForm />,
		type: "adesion",
	},
	{
		label: "",
		path: "/personal",
		element: <PersonalForm />,
		type: "adesion",
	},
]

export const PublicRoutes = Routes
