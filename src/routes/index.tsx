import { createRoute } from '@tanstack/react-router'
import React from 'react'
import { rootRoute } from './__root'

const Index = () => {
  return <div>Index</div>
}

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Index
})

export { Index, indexRoute }
