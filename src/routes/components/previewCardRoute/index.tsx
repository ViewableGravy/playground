import { createRoute } from "@tanstack/react-router";
import { AppRoute } from "../../app";

export const previewCardRoute = createRoute({
  getParentRoute: () => AppRoute,
  path: "preview-card",
}).lazy(() => import("./index.lazy").then((d) => d._Route))
