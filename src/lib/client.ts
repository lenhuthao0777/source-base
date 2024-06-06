import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie'
import { danger, debug } from './debug'
import { COOKIES_KEY } from '../enum/cookie.enum'

class Client {
  private url = process.env.API_URL || ''
  private http
  private timeout = 16000

  constructor() {
    this.http = axios.create({
      baseURL: this.url,
      timeout: this.timeout
    })

    this.http.interceptors.request.use(
      (request: InternalAxiosRequestConfig) => {
        // handle get access token
        const token = Cookies.get(COOKIES_KEY.token)
        if (token) {
          request.headers['Authorization'] = `Bearer ${token}`
          // debug(`[request] [${JSON.stringify(request)}]`)
          debug(`[access token]: ${token}`)
        }
        return request
      },
      (error): Promise<AxiosError> => {
        debug(`[request error] [${JSON.stringify(error)}]`)
        return Promise.reject(error)
      }
    )

    this.http.interceptors.response.use(
      (response: AxiosResponse) => {
        debug(`[response]: ${JSON.stringify(response)}`)
        return response
      },
      (error: AxiosError): Promise<AxiosError> => {
        debug(`[response error] [${JSON.stringify(error)}]`)
        switch (error?.response?.status) {
          case 400:
            // Handle error
            break
          case 401:
            // Handle unauthorized
            danger('unauthorized')
            break
          default:
            break
        }
        return Promise.reject(error)
      }
    )
  }

  protected get<T>(url: string, obj?: object) {
    return this.http.get<T>(url, obj)
  }

  protected post<T>(url: string, obj: object, config?: AxiosRequestConfig) {
    return this.http.post<T>(url, obj, config)
  }

  protected patch<T>(url: string, obj: object) {
    return this.http.patch<T>(url, obj)
  }

  protected put<T>(url: string, obj: object) {
    return this.http.put<T>(url, obj)
  }

  protected delete<T>(url: string, obj?: object) {
    return this.http.delete<T>(url, obj)
  }
}

export default Client
