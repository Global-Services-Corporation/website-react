import EnterpriseForm from "../../views/adesion/EnterpriseForm"
import PersonalForm from "../../views/adesion/PersonalForm"
import { RouteType } from "../../services/config/types"
import InfoPage from "../../views/landing/Baw2024"
import Events from "../../views/landing/Events"
import Academy from "../../views/landing/Academy"

const Routes: RouteType[] = [
	{
		label: "",
		path: "/",
		element: <InfoPage />,
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
		path: "/academy",
		element: <Academy />,
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
