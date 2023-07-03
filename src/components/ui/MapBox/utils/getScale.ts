import { distance, point } from '@turf/turf'

export const getScale = (draw: mapboxgl.Map, units: string = 'kilometers'): number => {
  const inchesPerMeter = 39.37
  const screenDPI = 96.0
  const bounds = draw.getBounds()
  const size = draw.getCanvas()
  // eslint-disable-next-line no-underscore-dangle
  const dist = distance(point([bounds._ne.lng, bounds._ne.lat]), point([bounds._ne.lng, bounds._sw.lat]), { units })
  const scaleValue = Math.floor((Math.abs(dist * 1000) / size.width) * inchesPerMeter * screenDPI)
  return scaleValue
}
