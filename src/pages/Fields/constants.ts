import { type TMapLayer } from '@/components/ui/MapBox/type'

const url = `https://${process.env.HOST ?? ''}/static/satellite`

export const layersConfig: TMapLayer[] = [
  {
    layer: {
      id: 'ndvi_layer',
      type: 'raster',
      source: 'ndvi_layer',
      layout: {
        visibility: 'visible'
      },
      minzoom: 10,
      maxzoom: 0
    },
    source: {
      type: 'raster',
      tileSize: 256,
      scheme: 'tms',
      bounds: [0, 0, 0, 0],
      tiles: [
        `${url}/481a8105-233f-47a1-a830-e7dbb653e93e/ndvi/tile/{z}/{x}/{y}.png`
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
        visibility: 'none'
      },
      minzoom: 10,
      maxzoom: 0
    },
    source: {
      type: 'vector',
      tiles: [
        `${url}/481a8105-233f-47a1-a830-e7dbb653e93e/polygonize/tile/{z}/{x}/{y}.pbf`
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
        visibility: 'none'
      },
      minzoom: 10,
      maxzoom: 0
    }
  },
  {
    layer: {
      id: 'fieldLine_layer',
      type: 'line',
      source: 'fieldLine_layer',
      paint: {
        'line-color': '#ffffff',
        'line-width': 0.7
      },
      layout: {
        visibility: 'visible'
      },
      minzoom: 10,
      maxzoom: 0
    },
    source: {
      type: 'geojson',
      data: []
    }
  },
  {
    layer: {
      id: 'fieldFill_layer',
      type: 'fill',
      source: 'fieldLine_layer',
      paint: {
        'fill-opacity': 0
      },
      layout: {
        visibility: 'visible'
      },
      minzoom: 10,
      maxzoom: 0
    }
  },
  {
    layer: {
      id: 'fieldFill_select',
      type: 'fill',
      source: 'fieldLine_layer',
      filter: ['==', 'id', ''],
      paint: {
        'fill-color': '#00FFFF',
        'fill-opacity': 0.4
      },
      layout: {
        visibility: 'none'
      },
      minzoom: 10,
      maxzoom: 0
    },
    before: 'vectorLine_layer'
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
        visibility: 'none'
      },
      minzoom: 10,
      maxzoom: 0
    },
    before: 'vectorLine_layer'
  }
]
