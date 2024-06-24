// Todas as rotas dessa categoria *Landing* são type:public

import EnterpriseForm from "../../views/adesion/EnterpriseForm";
import PersonalForm from "../../views/adesion/PersonalForm";
import { RouteType } from "../../services/config/types";
import InfoPage from "../../views/landing/Events";
import HomePage from "../../views/landing/Home";

const Routes: RouteType[] = [
  {
    label: "",
    path: "/",
    element: <InfoPage />,
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
];

export const PublicRoutes = Routes;
