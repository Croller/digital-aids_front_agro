import { request } from '@/services/request'
import { type UserStore } from '@/stores/userStore'
import { type TResponseData } from '@/types/http'

export class AuthServices {
  userStore: UserStore

  constructor (userStore: UserStore) {
    this.userStore = userStore
  }

  fetchAuth = async (): Promise<void> => {
    this.userStore.setLoading(true)
    const resp: TResponseData = await request.get('geo/auth')
    this.userStore.setResponse(resp)
  }
}
