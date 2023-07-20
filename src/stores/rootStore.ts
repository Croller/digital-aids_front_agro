import { makeAutoObservable } from 'mobx'
import { UserStore } from '@/stores/userStore'
import { DictionaryStore } from '@/stores/dictionaryStore'
import { FieldStore } from '@/stores/fieldStore'
import { request } from '@/services/request'
import { SocketServices } from '@/services/socket'
import translate from '@/i18n'
import { getCookies, setCookies } from '@/utils/cookies'

export class RootStore {
  userStore: UserStore
  fieldStore: FieldStore
  dictionaryStore: DictionaryStore
  language: string = 'ru'
  loading: boolean = false

  socketServices: SocketServices

  constructor () {
    makeAutoObservable(this)
    this.dictionaryStore = new DictionaryStore()
    this.userStore = new UserStore()
    this.fieldStore = new FieldStore(this)
    this.socketServices = new SocketServices()

    this.init()
  }

  init = (): void => {
    const lng = getCookies('cr_lng')

    !lng && this.setLanguage()
  }

  setLoading = (bool: boolean): void => {
    this.loading = bool
  }

  setLanguage = (language: string | undefined = 'ru'): void => {
    this.language = language
    translate.changeLanguage(language)
    request.setLanguage(this.language)
    setCookies({ cr_lng: this.language })
  }
}
