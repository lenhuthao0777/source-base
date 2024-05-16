import Client from '../lib/client'

class Root extends Client {
  endpoint = ''

  async index<T>(params?: any) {
    return await this.get<T>(this.endpoint, { params }).then((res) => res.data)
  }

  async show<T>(query: any) {
    return await this.get<T>(`${this.endpoint}/${query}`).then((res) => res.data)
  }

  async store<T>(values: any) {
    return await this.post<T>(this.endpoint, values).then((res) => res.data)
  }

  async update<T>(values: any) {
    return await this.patch<T>(this.endpoint, values).then((res) => res.data)
  }

  async destroy<T>(query: any) {
    return await this.delete<T>(`${this.endpoint}/${query}`).then((res) => res.data)
  }
}

export default Root
