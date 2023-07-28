import { type TMapLayer } from '../type'

export const toggleLayer = (arr: TMapLayer[], sourceName: string | null = null, visible: boolean | null = null): TMapLayer[] => arr.map((item) => {
  if (sourceName && item.layer.source === sourceName) {
    item.layer.layout.visibility = !visible ? (item.layer.layout.visibility === 'visible' ? 'none' : 'visible') : (visible ? 'visible' : 'none')
  }
  return item
})

export const visibilityLayer = (arr: TMapLayer[], visible: boolean = false): TMapLayer[] => arr.map((item) => {
  item.layer.layout.visibility = visible ? 'visible' : 'none'
  return item
})
