import { makeAutoObservable } from 'mobx'
import { request } from '@/services/request'
import { AuthServices } from '@/services/auth'
import { type TRule, type TUser } from '@/types/user'
import { type TResponseData } from '@/types/http'
import { getRedirectUrl } from '@/utils/url'
import { getCookies, setCookies } from '@/utils/cookies'

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

    if (token) {
      this.setToken(token)
      this.authServices.fetchAuth()
    } else if (window.location.href.split('?token=')[1]) {
      this.setToken(window.location.href.split('?token=')[1])
      this.authServices.fetchAuth()
    } else {
      const { href } = window.location
      const HOST = process.env.HOST ?? ''
      setCookies({ redirect: href })
      window.location.href = `https://${HOST}/user/auth?redirect=${href}`
      // window.location.href = `${getRedirectUrl('auth')}/user/auth`
    }

    if (window.location.href.split('?token=')[1]) {
      window.history.pushState('', '', window.location.href.split('?token=')[0])
    }
  }

  setToken = (token: string | null = null): void => {
    this.token = token
    request.setToken(this.token)
    setCookies({ token: this.token })
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
    const redirect = getCookies('redirect')
    if (resp.token) {
      this.setToken(resp.token)

      if (redirect) {
        window.location.href = redirect
        setCookies({ redirect: null })
      }
    }
    if (resp.user) this.user = resp.user
    if (resp.rules) this.rules = resp.rules
    if (resp.success) this.success = resp.success
    if (resp.error) {
      this.error = resp.error
      if (resp.error.key === 'authError') {
        setCookies({ redirect: href })
        window.location.href = `${getRedirectUrl('auth')}/user/auth`
        this.setToken(null)
      }
    }
  }

  isRule = (rule: string): boolean => {
    if (!this.rules) return false
    return !!this.rules.find(({ name }) => rule === name)
  }
}
