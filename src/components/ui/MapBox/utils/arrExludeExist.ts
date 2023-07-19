import { type TFeature } from '@/types/geojson'

export const arrExludeExist = (arrNew: TFeature[], arrCurr: TFeature[], key: string = 'id'): TFeature[] => {
  if (arrCurr.length === 0) return arrNew

  const current = [...arrCurr]
  arrNew.forEach((feature) => {
    if (!current.some(f => f.properties[key] === feature.properties[key])) {
      current.push(feature)
    } else {
      current.splice(current.findIndex(f => f.properties[key] === feature.properties[key]), 1)
    }
  })
  return current
}
