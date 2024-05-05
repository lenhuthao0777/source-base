// images
declare module '*.png' {
  const src: string
  export default src
}
declare module '*.jpg' {
  const src: string
  export default src
}
declare module '*.jpeg' {
  const src: string
  export default src
}
declare module '*.svg' {
  const src: string
  export default src
}

declare namespace React {
  function lazy<T extends ComponentType<any>>(factory: () => Promise<{ default: T }>): T
}

function lazy<T extends ComponentType<any>>(factory: () => Promise<{ default: T }>): LazyExoticComponent<T>

declare function createRoutesFromElements(children: React.ReactNode): RouteObject[]

// declare module '@tanstack/react-router' {
//   interface Register {
//     router: typeof router
//   }
// }
interface RouteObject {
  caseSensitive?: boolean
  children?: RouteObject[]
  element?: React.ReactNode
  index?: boolean
  path?: string
}
