import { RoutePaths as RoutePathsHelper, RegisteredRouter, redirect, RootRouteOptions } from '@tanstack/react-router'

type RoutePaths = RoutePathsHelper<RegisteredRouter['routeTree']>

/**
 * @fileoverview
 * Contains a flat list of route config objects that dictate whether or not the route is active.
 */

type BooleanRouteConfig = boolean
type ObjectRouteConfig = {
  active: boolean,
  redirect?: RoutePaths,
}
type FullObjectRouteConfig = Required<ObjectRouteConfig>
type RouteConfig = BooleanRouteConfig | ObjectRouteConfig
type RouteOptions = RootRouteOptions<any, any, any, any, any, any, any, any>
type PathObject = { path: RoutePaths }
type Selector<T> = (config: FullObjectRouteConfig) => T
type Select = <T = FullObjectRouteConfig>(selector?: Selector<T>) => NoInfer<T>
type Result = {
  throw: () => void
  select: Select
}

const routes: Record<RoutePaths, RouteConfig> = {
  "/": true,
  "/preview-card": true,
  "/test": {
    active: true,
    redirect: "/",
  },
}

function castToObjectRouteconfig(config: RouteConfig): FullObjectRouteConfig {
  if (typeof config === 'boolean') {
    return {
      active: config,
      redirect: "/",
    }
  }

  return Object.assign({
    redirect: "/"
  }, config)
}

export const routeConfig = {
  /**
   * A flat list of route config objects that dictate whether or not the route is active.
   */
  conditional: routes,

  /**
   * @description
   * Determines if the route is active. This function accepts an object that contains information about the route.
   * 
   * This is accessible through a RouteOptions object, which in the context of a route, can be accessed by passing `this`, otherwise,
   * since the only thing that is required is a path, a path can be manually passed to the function as an object key.
   * 
   * @example
   * ```tsx
   * // inside a route object
   * createRoute({
   *   ...  
   *   beforeLoad() {
   *     routeConfig.isRouteActive(this).throw()
   *   }
   * })
   * 
   * // somewhere where the routeOptions isn't necessarily available
   * routeConfig.isRouteActive({ path: "/test" }).throw()
   * ```
   * 
   * **Note**: If a path is passed that does not exist in the configObject, this is automatically assumed to be disabled and therefore the 
   * default redirect functionality will occur. Since all routes should be defined in the config object, this should not happen.
   * 
   * **Note 2**: The "location" parameter from tanstack router cannot be passed as the path, because this represents the full path rather
   * than the path at which the route is being checked (ie. checked at `/` but the route is `/test` which is a child). If the location is
   * passed when the parent is meant to be accessible then the user may be redirected instead of being shown a 404 for example
   */
  isRouteActive<This extends RouteOptions | PathObject = PathObject>(options: This): Result {
    const routeConfig = routes[(options as PathObject)?.path];
    const castedRouteConfig = castToObjectRouteconfig(routeConfig ?? false)

    /***** RESULTS *****/
    return {
      /**
       * Allow the route to perform the default action if the route is disabled - throw a redirect to the desired redirect
       * path. Otherwise simple return void so that further actions can be taken.
       */
      throw() {
        if (castedRouteConfig.active) 
          return;
        else
          throw redirect({ to: castedRouteConfig.redirect })
      },

      /**
       * Allow the user to return the route config object and perform manual actions based on the result. This is useful for
       * cases where the user does not want to perform a standard redirect but needs to know whether or not the route is active.
       */
      select(selector) {
        if (!selector)
          return castedRouteConfig as any
        else
          return selector(castedRouteConfig) as any
      },
    };
  }
}