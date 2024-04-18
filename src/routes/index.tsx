import { lazy } from 'react'
import UserLayout from '../layouts/user-layout'

const Home = lazy(() => import('../pages/home'))
const About = lazy(() => import('../pages/about'))
const App = lazy(() => import('../pages/app'))

// import About from '../pages/about'
// import App from '../pages/app'
// import Home from '../pages/home'

const Routes = () => {
  console.log('test')

  return <h2>test</h2>
}

export default Routes
