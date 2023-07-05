import axios, { type AxiosRequestConfig } from 'axios'
import { getDomain } from '@/utils/url'
import { type TResponse } from '@/types/http'

export class Request {
  language: string = 'en'
  instance = axios.create({
    baseURL: process.env.VITE_APP_API_URL,
    withCredentials: true,
    headers: {
      'Accept-Language': 'en'
    }
  })

  getUrl = (url: string): string => `${getDomain()}/api/${url}`

  setToken = (token: string | null, language: string = 'en'): void => {
    if (!token) return
    this.instance.interceptors.request.use((config: any) => {
      config.headers = {
        'Accept-Language': language,
        Authorization: `Bearer ${token}`
      }
      return config
    })
  }

  setLanguage = (language: string = 'en'): void => {
    this.language = language
  }

  private readonly responseBody = (response: TResponse): any => {
    const resp = response.data

    if (resp.error) {
      console.log('Api error:', resp.error)
      return resp
    }

    if (resp.token) {
      this.setToken(resp.token)
    }

    return resp
  }

  get = (url: string, config?: AxiosRequestConfig): Promise<any> =>
    this.instance.get(this.getUrl(url), config).then(this.responseBody)

  post = (url: string, body: any, config?: AxiosRequestConfig): Promise<any> =>
    this.instance.post(this.getUrl(url), body, config).then(this.responseBody)
      .catch(e => {
        this.responseBody({ data: { error: { key: 'system', name: 'System error', desc: JSON.stringify(e) } } })
      })

  put = (url: string, body: any, config?: AxiosRequestConfig): Promise<any> =>
    this.instance.put(this.getUrl(url), body, config).then(this.responseBody)
      .catch(e => {
        this.responseBody({ data: { error: { key: 'system', name: 'System error', desc: JSON.stringify(e) } } })
      })

  delete = (url: string, config?: AxiosRequestConfig): Promise<any> =>
    this.instance.delete(this.getUrl(url), config).then(this.responseBody)
      .catch(e => {
        this.responseBody({ data: { error: { key: 'system', name: 'System error', desc: JSON.stringify(e) } } })
      })
}

export const request = new Request()
