import { type Feature, type FeatureCollection } from '@turf/turf'

export type TLayer = {
  layer: {
    id: string
    type: 'raster' | 'fill' | 'line' | 'sky' | 'circle'
    source: string
    'source-layer'?: string
    minzoom?: number
    maxzoom?: number
    filter?: string[]
    layout: {
      visibility: 'visible' | 'none'
      'line-join'?: string
      'line-cap'?: string
    }
    paint?: {
      'fill-outline-color'?: string
      'fill-color'?: string
      'fill-opacity'?: number
      'line-color'?: string
      'line-width'?: number
      'circle-color'?: string
      'circle-radius'?: number
      'circle-stroke-width'?: number
      'circle-stroke-color'?: string
    }
  }
  source?: {
    type: 'raster' | 'geojson' | 'vector'
    data?: FeatureCollection | Feature | Feature[] | string
    tiles?: string[]
    url?: string
    tileSize?: number
    scheme?: 'tms'
    bounds?: number[]
  }
  before?: string
}

export type TCoords = {
  x: number
  y: number
}

export type TMapClick = {
  point: TCoords
  features: any[] | null
  color: string | null
}
