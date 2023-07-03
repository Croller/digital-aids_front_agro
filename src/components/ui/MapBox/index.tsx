import React, { useState, useEffect, useRef } from 'react'
import * as turf from '@turf/turf'
import mapboxgl, { Map, type MapMouseEvent, type EventData, type LngLatBoundsLike } from 'mapbox-gl'
import { getScale } from './utils/getScale'
import { getPixelColor } from './utils/getPixelColor'
import { mapStyleConfig, styleImage } from './constants'
import { Style } from './components/Style'
import { type TLayer } from '@/components/ui/MapBox/type'
import {
  Wrapper,
  Scale,
  Coordinates
} from './styled'
import { Navigate } from './components/Navigate'
import { getGeoJson } from './utils/getGeoJson'

interface IMapBox {
  className?: string
  height?: string
  width?: string
  config?: any
  showInfo?: boolean
  showStyle?: boolean
  showNav?: boolean
  zoomOnClick?: boolean
  layers: TLayer[]
  configStyle?: string | null
  onClick?: (obj: {
    coordinates: { x: number, y: number }
    features: any[] | null
  }) => void
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
  layers = [],
  configStyle = null,
  onClick
}) => {
  const ref = useRef(null)
  const [map, setMap] = useState<Map | null>(null)
  const [isLoad, setIsLoad] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(0)

  const mapStyle = {
    ...mapStyleConfig,
    layers: !configStyle
      ? mapStyleConfig.layers
      : mapStyleConfig.layers.reduce((layers: any[], layer: any) => {
        if (layer.id === configStyle) {
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

  const init = {
    container: 'mapbox',
    // style: 'mapbox://styles/croller/ckpm77kfx7d3g17vxskgpx1ty',
    style: mapStyle,
    zoom: 7,
    // center: [37.6155600, 55.7522200],
    bounds: [[21.773329482659875, 72.78393526534538], [170.66004823266013, 42.60248863563612]],
    minZoom: 0,
    doubleClickZoom: false,
    dragPan: true,
    dragRotate: false,
    preserveDrawingBuffer: true
  }

  const settings = {
    token: process.env.API_KEY_MAPBOX ?? '',
    init: (config || init)
  }

  const getCoords = (e: MapMouseEvent): { x: number, y: number } => ({ x: e.lngLat.lat, y: e.lngLat.lng })

  const getFeaturesByClick = (e: MapMouseEvent & EventData, substr: string = '_layer'): any | null => {
    const filtred = map?.queryRenderedFeatures(e.point).filter(f => {
      // highlight feature if layer _select exist
      if (f.layer.id.includes(substr)) {
        const { layers } = map?.getStyle()
        const layerNameSelect = f.layer.id.replace('_layer', '_select')
        if (layers.some((f) => f.id === layerNameSelect)) {
          map?.setFilter(layerNameSelect, ['==', 'DN', f.properties?.DN])
        }

        return true
      }
      return false
    })
    const features = filtred && filtred.length === 0 ? null : filtred

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

  const removeLayer = (id: string): void => {
    const layer = map?.getLayer(id)
    const source = map?.getSource(id)

    layer && map?.removeLayer(id)
    source && map?.removeSource(id)
  }

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
    mapLoad()
  }

  const setLayerConfig = (item: TLayer): void => {
    map?.setLayoutProperty(item.layer.id, 'visibility', item.layer.layout.visibility)

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
    })
  }

  const mapLoad = (): void => {
    setTimeout(() => {
      map?.resize()
      map && setScale(getScale(map))
      setLayers([...layers])
    })
  }

  const mapInit = (): void => {
    mapboxgl.accessToken = settings.token
    const map = new Map(settings.init)
    setMap(map)
  }

  const mapOn = (): void => {
    map?.on('load', () => {
      setIsLoad(true)
    })
    map?.on('styledata', () => {
      setIsLoad(true)
    })
    map?.on('click', (e) => {
      const features = getFeaturesByClick(e)
      if (onClick) {
        onClick({
          coordinates: getCoords(e),
          features: features ? features.map((feature: any) => getGeoJson(feature)) : null
        })
      }
      map && getPixelColor(map, e)
      console.log('features', features ? features.map((feature: any) => getGeoJson(feature)) : null)
    })
    map?.on('mousemove', (e) => {
      setCoords(getCoords(e))
    })
    map?.on('contextmenu', () => {})
    map?.on('moveend', () => {})
    map?.on('wheel', () => {
      setScale(getScale(map))
    })
  }

  useEffect(() => {
    ref.current && mapInit()
    return () => { map?.remove(); setMap(null) }
  }, [])

  useEffect(() => {
    map && mapOn()
  }, [map])

  useEffect(() => {
    if (isLoad) {
      mapLoad()
    }
  }, [isLoad, layers])

  return (
    <Wrapper
      id="mapbox"
      ref={ref}
      height={height}
      width={width}
      className={`t-map ${className}`}
    >
      {showNav && <Navigate map={map} />}
      {showStyle && <Style value={configStyle} source={styleImage} onChange={setMapStyle}/>}
      {showInfo && (
        <>
          <Coordinates onClick={() => { setMapStyle('yandexSat') }}>{`X: ${coords.x.toFixed(6)} Y: ${coords.y.toFixed(6)}`}</Coordinates>
          <Scale>{`М 1:${scale}`}</Scale>
        </>
      )}
    </Wrapper>
  )
}
