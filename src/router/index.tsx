import { createRootRoute, createRouter as createTanstackRouter } from '@tanstack/react-router'
import { AppRoute } from '../routes/app'
import { previewCardRoute } from '../routes/components/previewCardRoute/index'
import { testRoute } from '../routes/components/testRoute'

export const rootRoute = createRootRoute({})

const routeTree = rootRoute.addChildren([
  AppRoute.addChildren([
    previewCardRoute,
    testRoute
  ])
])

export function createRouter() {
  return createTanstackRouter({ 
    routeTree,
    defaultPreload: 'intent',
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
