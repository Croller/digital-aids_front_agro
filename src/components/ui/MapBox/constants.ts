import { TileMapPng, TileSatellitePng } from '@/assets/images'

export const styleImage: { key: string, name: string, image: string }[] = [
  {
    key: 'scanex',
    name: 'Карта',
    image: TileMapPng
  },
  {
    key: 'osm',
    name: 'OSM',
    image: TileMapPng
  },
  {
    key: 'googleSat',
    name: 'Google',
    image: TileSatellitePng
  }
]

export const mapStyleConfig: mapboxgl.Style = {
  version: 8,
  sources: {
    scanex: {
      type: 'raster',
      tiles: [
        'https://btilecart.kosmosnimki.ru/kosmo/{z}/{x}/{y}.png'
        // 'https://atilecart.kosmosnimki.ru/rw/{z}/{x}/{y}.png'
      ],
      tileSize: 256
    },
    osm: {
      type: 'raster',
      tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256
    },
    googleSat: {
      type: 'raster',
      tiles: ['https://mt2.google.com/vt/lyrs=s,h&hl=en&x={x}&y={y}&z={z}'],
      tileSize: 256
    }
  },
  layers: [
    {
      id: 'scanex',
      type: 'raster',
      source: 'scanex',
      layout: {
        visibility: 'visible'
      }
    },
    {
      id: 'osm',
      type: 'raster',
      source: 'osm',
      layout: {
        visibility: 'none'
      }
    },
    {
      id: 'googleSat',
      type: 'raster',
      source: 'googleSat',
      layout: {
        visibility: 'none'
      }
    }
  ]
}

// style: {
//   version: 8,
//   sources: {
//     osm: {
//       type: 'vector',
//       // tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png']
//       // tiles: ['https://mt2.google.com/vt/lyrs=s,h&hl=en&x={x}&y={y}&z={z}']
//       // tiles: ['https://core-sat.maps.yandex.net/tiles?l=sat&v=3.1075.0&x={x}&y={y}&z={z}&scale=2&lang=ru_RU']
//       // tiles: ['https://pkk.rosreestr.ru/arcgis/rest/services/Hosted/caddivsion/VectorTileServer/tile/{z}/{y}/{x}.pbf'],
//       tileSize: 512
//     }
//   },
//   layers: [{
//     id: 'osm',
//     type: 'fill',
//     source: 'osm',
//     'source-layer': 'vectortile',
//     paint: {
//       'fill-outline-color': '#ff0000',
//       'fill-color': '#ff0000',
//       'fill-opacity': 0.8
//     }
//   }]
// },
