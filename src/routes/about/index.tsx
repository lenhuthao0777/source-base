import { createRoute } from '@tanstack/react-router'
import Label from '@/src/components/label'
import { debug } from '@/src/lib/debug'
import { rootRoute } from '../__root'

const About = () => {
  debug(process.env.API_ENDPOINT)
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
