import { makeAutoObservable } from 'mobx'
import { CommonServices } from '@/services/common'
import { type TResponseData } from '@/types/http'

export class DictionaryStore {
  culture: TEnum[] | null = null
  loading: boolean = false

  commonServices: CommonServices

  constructor () {
    makeAutoObservable(this)
    this.commonServices = new CommonServices(this)
  }

  setResponse = (resp: TResponseData): void => {
    this.loading = false
    if (resp.culture) this.culture = resp.culture
  }

  setLoading = (bool: boolean): void => {
    this.loading = bool
  }
}
