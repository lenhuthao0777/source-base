import { IndexRouteProps, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// const Home = lazy(() => import('../pages/home'))
import Home from '../pages/home'
import About from '../pages/about'

type RouteProps = IndexRouteProps & {
  children?: IndexRouteProps[]
}

const routes = [
  {
    id: '1',
    index: true,
    path: '',
    element: <Home />,
  },
  {
    id: '2',
    index: true,
    path: '/about',
    element: <About />
  }
]

// const ListRouters = routes.map((route: any) => (
//   <Route key={route.id} path={route.path} element={route.element}>
//     {route?.children?.length
//       ? route.children.map((item: any) => (
//           <Route key={item.id} path={item.path}>
//             {item.children
//               ? item.children.map((child: any) => (
//                   <Route key={child.id} index={child.index} path={child.path} element={child.element} />
//                 ))
//               : null}
//           </Route>
//         ))
//       : null}
//   </Route>
// ))

const routers = createBrowserRouter(routes)

export { routers }
