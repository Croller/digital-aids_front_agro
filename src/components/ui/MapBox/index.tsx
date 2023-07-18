import React, { useState, useEffect, useRef } from 'react'
import * as turf from '@turf/turf'
import mapboxgl, { Map, type MapMouseEvent, type EventData, type LngLatBoundsLike } from 'mapbox-gl'
import { getScale } from './utils/getScale'
import { getPixelColor } from './utils/getPixelColor'
import { mapStyleConfig, styleImage } from './constants'
import { Style } from './components/Style'
import { Navigate } from './components/Navigate'
import { getGeoJson } from './utils/getGeoJson'
import { type TMapClick, type TLayer, type TCoords } from '@/components/ui/MapBox/type'
import { type TFeature } from '@/types/geojson'
import {
  Wrapper,
  Scale,
  Coordinates
} from './styled'

interface IMapBox {
  className?: string
  height?: string
  width?: string
  config?: any
  showInfo?: boolean
  showStyle?: boolean
  showNav?: boolean
  zoomOnClick?: boolean
  layers?: TLayer[]
  selected?: any[] | null
  defaultStyle?: string | null
  selectKey?: string | 'id'
  onClick?: (obj: TMapClick) => void
}

const API_KEY = process.env.API_KEY_MAPBOX ?? ''

export const MapBoxStatic = (feature: TFeature, width: number = 600, height: number = 600): string => {
  const obj = {
    type: 'Feature',
    geometry: feature.geometry,
    properties: {
      'fill-color': '#00FFFF',
      'fill-opacity': 0.4
    }
  }
  const stringify = encodeURI(JSON.stringify(obj)) // geojson(${stringify})
  const bbox = turf.bbox(feature).toString()
  return `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/[${bbox}]/${width}x${height}?access_token=${API_KEY}`
}

export const MapBox: React.FC<IMapBox> = ({
  className = '',
  height = '100%',
  width = '100%',
  config = null,
  showInfo = true,
  showStyle = true,
  showNav = true,
  zoomOnClick = true,
  layers,
  selected,
  defaultStyle = null,
  selectKey = 'id',
  onClick
}) => {
  mapboxgl.accessToken = API_KEY
  const ref = useRef(null)
  const [map, setMap] = useState<Map | null>(null)
  const [isLoad, setIsLoad] = useState<boolean>(false)
  const [coords, setCoords] = useState<TCoords>({ x: 0, y: 0 })
  const [scale, setScale] = useState<number>(0)

  const mapStyle = {
    ...mapStyleConfig,
    layers: !defaultStyle
      ? mapStyleConfig.layers
      : mapStyleConfig.layers.reduce((layers: any[], layer: any) => {
        if (layer.id === defaultStyle) {
          return [...layers, {
            ...layer,
            layout: {
              visibility: 'visible'
            }
          }]
        }
        return [...layers, {
          ...layer,
          layout: {
            visibility: 'none'
          }
        }]
      }, [])
  }

  const settings = config || {
    container: 'mapbox',
    // style: 'mapbox://styles/croller/ckpm77kfx7d3g17vxskgpx1ty',
    style: mapStyle,
    zoom: 16,
    // zoom: 7,
    // center: [37.6155600, 55.7522200],
    bounds: [[39.45421866221761, 54.48868621476663], [39.72758827237692, 54.60404640588854]],
    // bounds: [[21.773329482659875, 72.78393526534538], [170.66004823266013, 42.60248863563612]],
    minZoom: 0,
    doubleClickZoom: false,
    dragPan: true,
    dragRotate: false,
    preserveDrawingBuffer: true
  }

  const getCoords = (e: MapMouseEvent): { x: number, y: number } => ({ x: e.lngLat.lat, y: e.lngLat.lng })

  const getFeaturesByClick = (e: MapMouseEvent & EventData, substr: string = '_layer'): mapboxgl.MapboxGeoJSONFeature[] | null => {
    const filtred = map?.queryRenderedFeatures(e.point).filter(f => {
      // highlight feature if layer _select exist
      if (f.layer.id.includes(substr)) {
        // highlight is no selected
        if (!selected) {
          const { layers } = map?.getStyle()
          const layerNameSelect = f.layer.id.replace('_layer', '_select')
          if (layers.some((f) => f.id === layerNameSelect)) {
            const prop = f.properties ? f.properties[selectKey] : ''
            map?.setFilter(layerNameSelect, ['==', selectKey, prop])
          }
        }
        return true
      }
      return false
    })
    const features = filtred && filtred.length > 0 ? filtred : null

    // zoomOnClick to feature
    features && zoomOnClick && setZoomTo(features as turf.Feature[])
    // setMask
    // features && setMask(features[0] as turf.Feature)
    return features
  }

  // const setMask = (feature: turf.Feature, id: string = 'ndvi_layer'): void => {
  //   const ly = layers.find((f) => f.layer.id === id)
  //   const bounds = turf.bbox(feature)

  //   removeLayer(id)
  //   console.log('id', id);
  //   console.log('bounds', bounds);

  //   if (ly && ly?.source as mapboxgl.AnySourceData) {
  //     const source = { ...ly.source, bounds }
  //     map?.addSource(ly?.layer.source, source as mapboxgl.AnySourceData)
  //     map?.addLayer(ly.layer as mapboxgl.AnyLayer)
  //   }
  // }

  // const removeLayer = (id: string): void => {
  //   const layer = map?.getLayer(id)
  //   const source = map?.getSource(id)

  //   layer && map?.removeLayer(id)
  //   source && map?.removeSource(id)
  // }

  const setZoomTo = (features: turf.Feature[]): void => {
    const bounds = turf.bbox(turf.featureCollection(features))
    map?.fitBounds(bounds as LngLatBoundsLike, {
      padding: {
        top: 150,
        bottom: 150,
        left: 200,
        right: 200
      }
    })
  }

  const setMapStyle = (key: string): void => {
    setIsLoad(false)
    const changed: mapboxgl.Style = {
      ...mapStyleConfig,
      layers: mapStyleConfig.layers.map((layer) => ({
        ...layer,
        layout: {
          visibility: layer.id === key ? 'visible' : 'none'
        }
      }))
    }
    map?.setStyle(changed)
    setIsLoad(true)
  }

  const setLayerVisibility = (item: TLayer): void => {
    map?.setLayoutProperty(item.layer.id, 'visibility', item.layer.layout.visibility)
  }

  const setLayerConfig = (item: TLayer): void => {
    setLayerVisibility(item)

    map?.on('mousemove', item.layer.id, () => {
      const canvas = map?.getCanvas()
      canvas.style.cursor = 'pointer'
    })
    map?.on('mouseleave', item.layer.id, () => {
      const canvas = map?.getCanvas()
      canvas.style.cursor = ''
    })
  }

  const setLayers = (layers: TLayer[]): void => {
    console.log('mapbox layers', layers)
    layers.forEach((item) => {
      const before = item.before ?? ''

      if (map?.getLayer(item.layer.id)) {
        setLayerVisibility(item)
        return
      }

      if (!item.source) {
        map?.addLayer(item.layer as mapboxgl.AnyLayer, before)
        setLayerConfig(item)
        return
      }

      const source = map?.getSource(item.layer.source)
      if (!source) {
        map?.addSource(item.layer.source, item.source as mapboxgl.AnySourceData)
        map?.addLayer(item.layer as mapboxgl.AnyLayer, before)
        setLayerConfig(item)
      } else if (source && source.type === 'geojson') {
        source.setData(item.source.data as any)
      }

      if (item.layer.id.includes('_select') && selected) {
        setHighlight(selected)
      }
    })
  }

  const setHighlight = (arr: string[]): void => {
    if (!map) return
    const { layers } = map?.getStyle()
    const ids = arr.reduce((acc: string[], feature: any) => (feature.properties ? [...acc, feature.properties[selectKey]] : acc), [])
    layers.forEach((layer) => {
      if (layer.id.includes('_select')) {
        map?.setFilter(layer.id, ['in', selectKey, ...ids])
      }
    })
  }

  useEffect(() => {
    ref.current && setMap(new Map(settings))

    return () => {
      map?.remove()
      setMap(null)
    }
  }, [])

  useEffect(() => {
    map?.on('load', () => {
      setIsLoad(true)
    })
    map?.on('styledata', () => {
      setIsLoad(true)
    })
    map?.on('mousemove', (e) => {
      setCoords(getCoords(e))
    })
    map?.on('wheel', () => {
      setScale(getScale(map))
    })
    map?.on('click', function (e) {
      if (onClick) {
        const features = getFeaturesByClick(e)
        const geojson = features ? features.map((feature: any) => getGeoJson(feature)) : null
        onClick({
          point: getCoords(e),
          features: geojson,
          color: getPixelColor(map, e)
        })
      }
    })
    map?.on('contextmenu', () => {})
    map?.on('moveend', () => {})
  }, [map])

  useEffect(() => {
    if (isLoad) {
      map?.resize()
      map && setScale(getScale(map))

      layers && setLayers(layers)
    }
  }, [isLoad, layers])

  useEffect(() => {
    isLoad && setHighlight(selected ?? [])
  }, [isLoad, selected])

  return (
    <Wrapper
      id="mapbox"
      ref={ref}
      height={height}
      width={width}
      className={`t-map ${className}`}
    >
      {showNav && <Navigate map={map} />}
      {showStyle && <Style value={defaultStyle} source={styleImage} onChange={setMapStyle}/>}
      {showInfo && (
        <>
          <Coordinates onClick={() => { setMapStyle('yandexSat') }}>{`X: ${coords.x.toFixed(6)} Y: ${coords.y.toFixed(6)}`}</Coordinates>
          <Scale>{`М 1:${scale}`}</Scale>
        </>
      )}
    </Wrapper>
  )
}
