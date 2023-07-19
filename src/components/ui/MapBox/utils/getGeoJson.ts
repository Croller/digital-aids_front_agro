import { feature } from '@turf/turf'
import { type TFeature } from '@/types/geojson'

export const getGeoJson = (src: TFeature & { source: string }): TFeature & { source: string } | null => {
  const { properties, geometry, source } = src
  if (!properties) return null
  const prop = Object.keys(properties).reduce((obj, key) => {
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
