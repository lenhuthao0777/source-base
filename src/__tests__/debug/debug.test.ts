import { danger, debug, warn } from '../../lib/debug'

describe('Logger functions', () => {
  let originalEnv: any
  let consoleLogSpy: any, consoleWarnSpy: any, consoleErrorSpy: any

  beforeAll(() => {
    originalEnv = process.env
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {})
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterAll(() => {
    process.env = originalEnv
    consoleLogSpy.mockRestore()
    consoleWarnSpy.mockRestore()
    consoleErrorSpy.mockRestore()
  })

  afterEach(() => {
    consoleLogSpy.mockClear()
    consoleWarnSpy.mockClear()
    consoleErrorSpy.mockClear()
  })

  it('should log debug messages in development environment', () => {
    process.env = { ...originalEnv, NODE_ENV: 'development' }

    debug('debug message')
    expect(consoleLogSpy).toHaveBeenCalledWith('debug message')
  })

  it('should log warn messages in development environment', () => {
    process.env = { ...originalEnv, NODE_ENV: 'development' }

    warn('warn message')
    expect(consoleWarnSpy).toHaveBeenCalledWith('warn message')
  })

  it('should log danger messages in development environment', () => {
    process.env = { ...originalEnv, NODE_ENV: 'development' }

    danger('danger message')
    expect(consoleErrorSpy).toHaveBeenCalledWith('danger message')
  })

  it('should not log messages if NODE_ENV is not development and isDebug is false', () => {
    process.env = { ...originalEnv, NODE_ENV: 'production' }
    Object.defineProperty(global, 'localStorage', {
      value: {
        getItem: jest.fn().mockReturnValue('false')
      },
      writable: true
    })

    debug('debug message')
    warn('warn message')
    danger('danger message')

    expect(consoleLogSpy).not.toHaveBeenCalled()
    expect(consoleWarnSpy).not.toHaveBeenCalled()
    expect(consoleErrorSpy).not.toHaveBeenCalled()
  })
})
