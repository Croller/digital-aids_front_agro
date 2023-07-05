import { type TLayer } from '../type'

export const toggleLayer = (arr: TLayer[], sourceName: string | null = null, visible: boolean | null = null): TLayer[] => arr.map((item) => {
  if (sourceName && item.layer.source === sourceName) {
    item.layer.layout.visibility = !visible ? (item.layer.layout.visibility === 'visible' ? 'none' : 'visible') : (visible ? 'visible' : 'none')
  }
  return item
})

export const visibilityLayer = (arr: TLayer[], visible: boolean = false): TLayer[] => arr.map((item) => {
  item.layer.layout.visibility = visible ? 'visible' : 'none'
  return item
})
