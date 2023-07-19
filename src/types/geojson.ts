import { type TFieldCreate, type TField } from './field'

export type TFeature = {
  type: 'Feature'
  geometry: {
    type: 'Polygon' | 'MultiPolygon' | 'Line' | 'LineString' | 'MultiLineString' | 'Point' | 'MultiPoint'
    coordinates: any
  }
  properties: any | {
    id: string
    DN: number // TODO for python dev, when tiling vector try to change DN -> id name
  } | TFieldCreate | TField
}
