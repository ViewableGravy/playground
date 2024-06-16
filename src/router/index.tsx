import { createRootRoute, createRootRouteWithContext, createRouter as createTanstackRouter } from '@tanstack/react-router'
import { AppRoute } from '../routes/app'
import { previewCardRoute } from '../routes/components/previewCardRoute/index'
import { testRoute } from '../routes/components/testRoute'
import { QueryClient } from '@tanstack/react-query'

type RouterContext = {
  queryClient: QueryClient
}

export const rootRoute = createRootRouteWithContext<RouterContext>()({})

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
    context: {
      queryClient: undefined!
    }
  })
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
