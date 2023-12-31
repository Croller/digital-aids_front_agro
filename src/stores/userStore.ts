import { makeAutoObservable } from 'mobx'
import { request } from '@/services/request'
import { AuthServices } from '@/services/auth'
import { type TRule, type TUser } from '@/types/user'
import { type TResponseData } from '@/types/http'
import { getCookies } from '@/utils/cookies'

export class UserStore {
  token: string | null = null
  rules: TRule[] | null = null
  loading: boolean = false
  error: TError | null = null
  success: boolean = false
  user: TUser = {
    id: '',
    surname: '',
    name: '',
    middlename: '',
    birthdate: '',
    phone: '',
    language: '',
    enter_at: '',
    login: '',
    password: '',
    email: '',
    is_deleted: false
  }

  authServices: AuthServices

  constructor () {
    makeAutoObservable(this)
    this.authServices = new AuthServices(this)

    this.init()
  }

  init = (): void => {
    const token = getCookies('token')
    const [path, pathToken] = window.location.href.split('?token=')

    if (token) {
      this.setToken(token)
      this.authServices.fetchAuth()
    } else if (pathToken) {
      this.setToken(pathToken)
      this.authServices.fetchAuth()
      window.history.pushState('', '', path)
    } else {
      const { href } = window.location
      window.location.href = `https://${process.env.HOST ?? ''}/user/auth?redirect=${href}`
    }
  }

  setToken = (token: string | null = null): void => {
    this.token = token
    request.setToken(this.token)
  }

  setLoading = (bool: boolean): void => {
    this.loading = bool
  }

  setError = (error: TError | null = null): void => {
    this.error = error
  }

  setSuccess = (bool: boolean): void => {
    this.success = bool
  }

  setResponse = (resp: TResponseData): void => {
    const { href } = window.location
    if (resp.token) {
      this.setToken(resp.token)
    }
    if (resp.user) this.user = resp.user
    if (resp.rules) this.rules = resp.rules
    if (resp.success) this.success = resp.success
    if (resp.error) {
      this.error = resp.error
      if (resp.error.key === 'authError') {
        window.location.href = `https://${process.env.HOST ?? ''}/user/auth?redirect=${href}`
        this.setToken(null)
      }
    }
  }

  isRule = (rule: string): boolean => {
    if (!this.rules) return false
    return !!this.rules.find(({ name }) => rule === name)
  }
}
