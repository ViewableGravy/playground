import { createRoute } from "@tanstack/react-router";
import { AppRoute } from "../app";


export const testRoute = createRoute({
  path: "test",
  getParentRoute: () => AppRoute,
  component: () => <div>Test</div>
})