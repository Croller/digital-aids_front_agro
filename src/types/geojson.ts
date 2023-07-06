import { type MultiPolygon, type Polygon } from '@turf/turf'

export type TPolygon = {
  type: 'Feature'
  geometry: Polygon | MultiPolygon
  properties: {
    id: number | string
    DN: number // TODO for python dev, when tiling vector try to change DN -> id name
  }
}
