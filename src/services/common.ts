import { request } from '@/services/request'
import { type DictionaryStore } from '@/stores/dictionaryStore'
import { type TResponseData } from '@/types/http'

export class CommonServices {
  dictionary: DictionaryStore

  constructor (dictionary: DictionaryStore) {
    this.dictionary = dictionary
  }

  fetchsDictionary = async (name: string): Promise<void> => {
    this.dictionary.setLoading(true)
    const resp: TResponseData = await request.get(`geo/dictionary/${name}`)
    this.dictionary.setResponse(resp)
    this.dictionary.setLoading(false)
  }
}
