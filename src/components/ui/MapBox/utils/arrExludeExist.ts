import { type Feature } from '@turf/turf'

export const arrExludeExist = (arrNew: Feature[], arrCurr: Feature[], key: string | number = 'id'): Feature[] => {
  if (arrCurr.length === 0) return arrNew

  const current = [...arrCurr]
  arrNew.forEach((feature) => {
    if (!current.some(f => feature.properties && f.properties && f.properties[key] === feature.properties[key])) {
      current.push(feature)
    } else {
      current.splice(current.findIndex(f => feature.properties && f.properties && f.properties[key] === feature.properties[key]), 1)
    }
  })
  return current
}
