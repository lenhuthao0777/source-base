const isDebug = (() => {
  try {
    return global.localStorage ? global.localStorage.getItem('debug') === 'true' : false;
  } catch (e) {
    return false;
  }
})();

const shouldLog = () => process.env.NODE_ENV === 'development' || isDebug;

export const debug = (...args: any) => {
  if (shouldLog()) {
    console.log(...args);
  }
};

export const warn = (...args: any) => {
  if (shouldLog()) {
    console.warn(...args);
  }
};

export const danger = (...args: any) => {
  if (shouldLog()) {
    console.error(...args);
  }
};
