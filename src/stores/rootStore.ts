import { makeAutoObservable } from 'mobx'
import { UserStore } from '@/stores/userStore'
import { DictionaryStore } from '@/stores/dictionaryStore'
import { FieldStore } from '@/stores/fieldStore'
import { WeatherStore } from '@/stores/weatherStore'
import { SocketServices } from '@/services/socket'

export class RootStore {
  userStore: UserStore
  fieldStore: FieldStore
  weatherStore: WeatherStore
  dictionaryStore: DictionaryStore
  loading: boolean = false

  socketServices: SocketServices

  constructor () {
    makeAutoObservable(this)
    this.dictionaryStore = new DictionaryStore()
    this.userStore = new UserStore()
    this.fieldStore = new FieldStore(this)
    this.weatherStore = new WeatherStore()
    this.socketServices = new SocketServices()
  }

  setLoading = (bool: boolean): void => {
    this.loading = bool
  }
}
