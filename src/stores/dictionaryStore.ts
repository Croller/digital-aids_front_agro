import { makeAutoObservable } from 'mobx'
import { CommonServices } from '@/services/common'
import { type TResponseData } from '@/types/http'

export class DictionaryStore {
  loading: boolean = false

  commonServices: CommonServices

  constructor () {
    makeAutoObservable(this)
    this.commonServices = new CommonServices(this)
  }

  setResponse = (resp?: TResponseData): void => {
    this.loading = false
    if (!resp) return
  }

  setLoading = (bool: boolean): void => {
    this.loading = bool
  }
}
