import { request } from '@/services/request'
import { type UserStore } from '@/stores/userStore'
import { type TResponseData } from '@/types/http'

const APP = process.env.APP_NAME ?? ''

export class AuthServices {
  userStore: UserStore

  constructor (userStore: UserStore) {
    this.userStore = userStore
  }

  fetchAuth = async (): Promise<void> => {
    this.userStore.setLoading(true)
    const resp: TResponseData = await request.get(`${APP}/auth`)
    this.userStore.setResponse(resp)
  }
}
