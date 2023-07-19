import { makeAutoObservable } from 'mobx'
import { FiledServices } from '@/services/field'
import { type TGroupField } from '@/types/field'
import { type TResponseData } from '@/types/http'
import { type RootStore } from './rootStore'
import { type TFeature } from '@/types/geojson'

export class FieldStore {
  fields: TFeature[] | null = null
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
      const response = resp.fields.length === 0 ? null : resp.fields
      if (this.fields) {
        this.fields = [...this.fields, ...(response ?? [])]
      } else {
        this.fields = response
      }
    }
    if (resp.group_field) {
      const response = resp.group_field.length === 0 ? null : resp.group_field
      if (this.group_field) {
        this.group_field = [...this.group_field, ...(response ?? [])]
      } else {
        this.group_field = response
      }
    }
  }

  create = (newFields: TFeature[], newGroup?: TGroupField): void => {
    const group: TGroupField = {
      name: 'Тест поле'
    }
    this.fieldServices.fetchCreate(newFields, group)
  }
}
