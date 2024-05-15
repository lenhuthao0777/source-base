const isDebug = global.localStorage ? global.localStorage.getItem('debug') ?? false : false

export const debug = (...args: any) => {
  if (process.env.NODE_ENV === 'development' || isDebug) {
    console.log(...args)
  }
}

export const warn = (...args: any) => {
  if (process.env.NODE_ENV === 'development' || isDebug) {
    console.warn(...args)
  }
}

export const danger = (...args: any) => {
  if (process.env.NODE_ENV === 'development' || isDebug) {
    console.error(...args)
  }
}