import { makeAutoObservable } from 'mobx'
import { UserStore } from '@/stores/userStore'
import { DictionaryStore } from '@/stores/dictionaryStore'
import { request } from '@/services/request'
import { SocketServices } from '@/services/socket'
import translate from '@/i18n'
import { getCookies, setCookies } from '@/utils/cookies'

export class RootStore {
  userStore: UserStore
  dictionaryStore: DictionaryStore
  language: string = 'en'
  loading: boolean = false

  socketServices: SocketServices

  constructor () {
    makeAutoObservable(this)
    this.userStore = new UserStore()
    this.dictionaryStore = new DictionaryStore()
    this.socketServices = new SocketServices()

    this.init()
  }

  init = (): void => {
    const lng = getCookies('lng')

    !lng && this.setLanguage()
  }

  setLoading = (bool: boolean): void => {
    this.loading = bool
  }

  setLanguage = (language: string | undefined = 'en'): void => {
    this.language = language
    translate.changeLanguage(language)
    request.setLanguage(this.language)
    setCookies({ lng: this.language })
  }
}
