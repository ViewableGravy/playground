/***** BASE IMPORTS *****/
import { rootRoute } from '../router'
import { createRoute, Outlet } from '@tanstack/react-router'

/***** SHARED *****/
import { Sidebar } from '../components/sidebar'

/***** CONSTS *****/
import './_App.scss'
import { routeConfig } from '../router/config'
import { useRouteTransition } from '../utilities/hooks/useRouteTransition'
import classNames from 'classnames'
import React from 'react'

const backgroundImage = "https://images.unsplash.com/photo-1557264322-b44d383a2906?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


type RouteTransition = React.FC<{
  condition: boolean | string
  children: React.ReactNode
}>

const RouteTransition: RouteTransition = ({ children, condition }) => {
  const transitionState = useRouteTransition({ condition })

  return (
    <div className={classNames("transition", { "transition--out": transitionState === "out" })}>
      {children}
    </div>
  )
}

const App = () => {
  /***** RENDER *****/
  return (
    <>
      <img src={backgroundImage} className="App__background" />

      <div className="App__title">
        <h1>Gravy UI</h1>
      </div>

      <Sidebar className="App__sidebar" />

      <div className="App__Content" >
        <RouteTransition condition>
          <Outlet />
        </RouteTransition>
      </div>
    </>
  )
}

export const AppRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: App,
  beforeLoad() {
    routeConfig.isRouteActive(this).throw()
  }
})

window.onbeforeunload = null
 