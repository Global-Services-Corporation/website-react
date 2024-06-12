import EnterpriseForm from "../../views/adesion/EnterpriseForm";
import PersonalForm from "../../views/adesion/PersonalForm";
import InfoPage from "../../views/landing/Events";
import HomePage from "../../views/landing/Home";
import { RouteType } from "../../services/config/types";

const Routes: RouteType[] = [
  {
    label: "",
    path: "/:id",
    element: <HomePage />,
    type: "private",
  },
  {
    label: "",
    path: "/landing-events/:id",
    element: <InfoPage />,
    type: "private",
  },
  {
    label: "",
    path: "/enterprise/:id",
    element: <EnterpriseForm />,
    type: "adesion",
  },
  {
    label: "",
    path: "/personal/:id",
    element: <PersonalForm />,
    type: "adesion",
  },
];

export const PrivateRoutes = Routes;
