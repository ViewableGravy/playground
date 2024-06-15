
import { AppRoute } from '../../routes/app'
import {  Link, Route }  from '@tanstack/react-router'
import './_Sidebar.scss'
import React, { useState } from 'react'
import classNames from 'classnames'

type Sidebar = React.FC<{
  className?: string
}>

const convertPathToTitle = (path: string) => {
  const [first] = path.split('/')
  const KebabToSpaces = first.replace(/-/g, ' ')
  const Capitalized = KebabToSpaces.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  return Capitalized
}

export const Sidebar: Sidebar = ({ className }) => {
  const [search, setSearch] = useState("Search")

  const paths = (AppRoute.children as Array<Route>).map(({ path }) => path)

  return (
    <div className={classNames("Sidebar", className)}>
      <h2 className="Sidebar__title">Components</h2>
      <input onChange={(e) => setSearch(e.target.value)} value={search} className="Sidebar__search" />
      {paths.map((path) => (
        <Link preload="intent" key={path} from='/' to={path} className={classNames("Sidebar__link")}>
          {convertPathToTitle(path)}
        </Link>
      ))}
    </div>
  )
}