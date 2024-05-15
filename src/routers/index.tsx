import { lazy } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import UserLayout from '../layouts/user-layout'

const SignIn = lazy(() => import('../pages/sign-up'))
const Home = lazy(() => import('../pages/home'))
const About = lazy(() => import('../pages/about'))
const App = lazy(() => import('../pages/app'))
const NotFound = lazy(() => import('../pages/404'))

// import About from '../pages/about'
// import App from '../pages/app'
// import Home from '../pages/home'

const Router = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path='/sign-in' element={<SignIn />} index />
        <Route path='/' element={<Home />} index />
        <Route path='/' element={<UserLayout />}>
          <Route path='/app' element={<App />} />
          <Route path='/about' element={<About />} index />
        </Route>

        <Route path='*' element={<NotFound />} index />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
