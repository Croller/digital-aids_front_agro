import { request } from '@/services/request'
import { type FieldStore } from '@/stores/fieldStore'
import { type TField, type TGroupField } from '@/types/field'
import { type TResponseData } from '@/types/http'

const APP = process.env.APP_NAME ?? ''

export class FiledServices {
  fieldStore: FieldStore

  constructor (fieldStore: FieldStore) {
    this.fieldStore = fieldStore
  }

  fetchSelect = async (): Promise<void> => {
    this.fieldStore.setLoading(true)
    const resp: TResponseData = await request.get(`${APP}/field/select`)
    this.fieldStore.setResponse(resp)
    this.fieldStore.setLoading(false)
  }

  fetchCreate = async (fields: TField[], group_field: TGroupField): Promise<void> => {
    this.fieldStore.setLoading(true)
    const resp: TResponseData = await request.put(`${APP}/field/create`, { fields, group_field })
    this.fieldStore.setResponse(resp)
    this.fieldStore.setLoading(false)
  }
}
