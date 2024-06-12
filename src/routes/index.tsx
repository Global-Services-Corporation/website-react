import { PublicRoutes } from "./landing/routes"
import { PrivateRoutes } from "./user/routes"

export const AllRoutes = [...PublicRoutes, ...PrivateRoutes]
