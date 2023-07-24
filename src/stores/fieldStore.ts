import { makeAutoObservable } from 'mobx'
import { FiledServices } from '@/services/field'
import { type TGroupField } from '@/types/field'
import { type TResponseData } from '@/types/http'
import { type RootStore } from './rootStore'
import { type TFeature } from '@/types/geojson'
import { type TOWCurrent } from '@/types/openweather'

export class FieldStore {
  fields: TFeature[] | null = null
  group_fields: TGroupField[] | null = null
  weatherCurrent: TOWCurrent | null = null
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
    if (resp.group_fields) {
      const response = resp.group_fields.length === 0 ? null : resp.group_fields
      this.group_fields = [...(this.group_fields ?? []), ...(response ?? [])]
    }
    if (resp.fields) {
      const response = resp.fields.length === 0 ? null : resp.fields
      if (this.fields) {
        this.fields = [...this.fields, ...(response ?? [])]
      } else {
        this.fields = response
      }
    }
    if (resp.group_field) {
      this.group_fields = [...(this.group_fields ?? []), resp.group_field]
    }
  }

  create = (newFields: TFeature[], newGroup?: TGroupField): void => {
    const group: TGroupField = {
      name: 'Тест поле'
    }
    this.fieldServices.fetchCreate(newFields, group)
  }
}
