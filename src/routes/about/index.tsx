import { createRoute } from '@tanstack/react-router'
import Label from '@/src/components/label'
import { rootRoute } from '../__root'

const About = () => {
  return (
    <div>
      <input type='text' />
      <Label />
      <button>click</button>
    </div>
  )
}

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About
})

export { aboutRoute, About }
