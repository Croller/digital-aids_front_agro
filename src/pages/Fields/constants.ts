import { type TLayer } from '@/components/ui/MapBox/type'

const url = `https://${process.env.HOST ?? ''}/static/satellite`

export const layers: TLayer[] = [
  {
    layer: {
      id: 'ndvi_layer',
      type: 'raster',
      source: 'ndvi_layer',
      layout: {
        visibility: 'visible'
      },
      minzoom: 8,
      maxzoom: 0
    },
    source: {
      type: 'raster',
      tileSize: 256,
      scheme: 'tms',
      bounds: [0, 0, 0, 0],
      tiles: [
        `${url}/c34d6454-9a81-4ce9-92a9-4236506214da/ndvi/tile/{z}/{x}/{y}.png`
      ]
    }
  },
  {
    layer: {
      id: 'vectorLine_layer',
      type: 'line',
      source: 'vectorLine_layer',
      'source-layer': 'vector',
      paint: {
        'line-color': '#ffffff',
        'line-width': 0.7
      },
      layout: {
        visibility: 'visible'
      },
      minzoom: 8,
      maxzoom: 0
    },
    source: {
      type: 'vector',
      tiles: [
        `${url}/c34d6454-9a81-4ce9-92a9-4236506214da/polygonize/tile/{z}/{x}/{y}.pbf`
      ]
    },
    before: 'ndvi_layer'
  },
  {
    layer: {
      id: 'vectorFill_layer',
      type: 'fill',
      source: 'vectorLine_layer',
      'source-layer': 'vector',
      paint: {
        'fill-opacity': 0
      },
      layout: {
        visibility: 'visible'
      },
      minzoom: 8,
      maxzoom: 0
    }
  },
  {
    layer: {
      id: 'vectorFill_select',
      type: 'fill',
      source: 'vectorLine_layer',
      'source-layer': 'vector',
      filter: ['==', 'DN', ''],
      paint: {
        'fill-color': '#00FFFF',
        'fill-opacity': 0.4
      },
      layout: {
        visibility: 'visible'
      },
      minzoom: 8,
      maxzoom: 0
    },
    before: 'vectorLine_layer'
  }
]
