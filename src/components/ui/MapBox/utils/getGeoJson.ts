import { type Feature, feature } from '@turf/turf'

export const getGeoJson = (src: Feature & { source: string }): Feature & { source: string } | null => {
  const { properties, geometry, source } = src
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
  const fe = feature(geometry, prop)
  return { ...fe, source }
}
