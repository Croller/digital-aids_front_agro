import { type Polygon } from '@turf/turf'

export type TPolygon = {
  type: 'Feature'
  geometry: Polygon
  properties: {
    id: number | string
    DN: number // TODO for python dev, when tiling vector try to change DN -> id name
  }
}
