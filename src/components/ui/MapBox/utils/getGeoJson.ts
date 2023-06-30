import { type Feature, feature } from '@turf/turf'

export const getGeoJson = (src: Feature): Feature | null => {
  const { properties, geometry } = src
  if (!properties) return null
  const prop = Object.keys(properties as any).reduce((obj, key) => {
    let value = properties[key]
    if (typeof value === 'string') {
      if (value.includes('[')) {
        // eslint-disable-next-line no-eval
        value = eval(value)
      }
      if (value === 'null') {
        value = null
      }
    }
    return { ...obj, [key]: value }
  }, {})
  return feature(geometry, prop)
}
