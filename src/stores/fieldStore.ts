import { makeAutoObservable } from 'mobx'
import { FiledServices } from '@/services/field'
import { type TGroupField, type TField } from '@/types/field'
import { type TResponseData } from '@/types/http'
import { type RootStore } from './rootStore'

export class FieldStore {
  fields: TField[] | null = null
  group_field: TGroupField[] | null = null
  loading: boolean = false

  fieldServices: FiledServices

  constructor (rootStore: RootStore) {
    makeAutoObservable(this)
    this.fieldServices = new FiledServices(this)

    this.fieldServices.fetchSelect()
    rootStore.dictionaryStore.commonServices.fetchDictionary('enum_culture')
  }

  setLoading = (bool: boolean): void => {
    this.loading = bool
  }

  setResponse = (resp: TResponseData): void => {
    if (resp.fields) {
      this.fields = resp.fields.length === 0 ? null : resp.fields
    }
    if (resp.group_field) {
      this.group_field = resp.group_field.length === 0 ? null : resp.group_field
    }
  }
}
