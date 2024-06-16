import { createRoute } from "@tanstack/react-router";
import { AppRoute } from "../app";
import { routeConfig } from "../../router/config";


export const testRoute = createRoute({
  path: "test",
  getParentRoute: () => AppRoute,
  component: () => <div>Test</div>,
  beforeLoad() {
    routeConfig.isRouteActive(this).throw()
  }
})