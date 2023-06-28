/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef } from 'react'
import * as turf from '@turf/turf'
import mapboxgl, { Map, type MapMouseEvent, type EventData, type LngLatBoundsLike } from 'mapbox-gl'
import { getScale } from './utils/common'
import {
  Wrapper,
  Scale,
  Coordinates
} from './styled'
import { type TLayer } from '@/components/ui/MapBox/types/mapbox'
import { getPixelColor } from './utils/getPixelColor'
import { mapStyleConfig, styleImage } from './constants'
import { Style } from './components/Style'

interface IMapBox {
  className?: string
  height?: string
  width?: string
  config?: any
  showInfo?: boolean
  changeStyle?: boolean
  layers: TLayer[]
  onClick?: (obj: {
    coordinates: { x: number, y: number }
    layers: any | null
  }) => void
}

export const MapBox: React.FC<IMapBox> = ({
  className = '',
  height = '100vh',
  width = '100vw',
  config = null,
  showInfo = true,
  changeStyle = true,
  layers = [],
  onClick
}) => {
  const ref = useRef(null)
  const [map, setMap] = useState<Map | null>(null)
  const [isLoad, setIsLoad] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [scale, setScale] = useState(0)

  const init = {
    container: 'mapbox',
    // style: 'mapbox://styles/croller/ckpm77kfx7d3g17vxskgpx1ty',
    style: mapStyleConfig,
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

  const getLayer = (e: MapMouseEvent & EventData, substr: string = '_layer'): any | null => {
    const filtred = map?.queryRenderedFeatures(e.point).filter(f => f.layer.id.includes(substr))
    return filtred && filtred.length === 0 ? null : filtred
  }

  const setZoomTo = (arr: turf.Feature[]): void => {
    if (!arr) return
    const bounds = turf.bbox(turf.featureCollection(arr))
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

  const setLayers = (layers: TLayer[]): void => {
    console.log('mapbox layers', layers)
    layers.forEach((item) => {
      const source = map?.getSource(item.layer.source)
      if (!source) {
        map?.addSource(item.layer.source, item.source as mapboxgl.AnySourceData)
        map?.addLayer(item.layer as mapboxgl.AnyLayer, '')

        map?.on('mousemove', item.layer.id, (e) => {
          const canvas = map?.getCanvas()
          canvas.style.cursor = 'pointer'
          // console.log(`${layer.id}_da_hover`, e.features);
          // map?.setFeatureState(
          //   { source: `${layer.id}_da_layer` },
          //   { hover: true },
          // );
          // map?.setFilter(`${layer.id}_da_hover`, ['==', 'id', e.features[0].properties.id])
        })
        map?.on('mouseleave', item.layer.id, () => {
          const canvas = map?.getCanvas()
          canvas.style.cursor = ''
          // map?.setFilter(`${item.layer.id}_hover`, ['==', 'id', ''])
        // map?.setFeatureState(
        //   { source: `${layer.id}_da_layer` },
        //   { hover: false },
        // );
        })
      } else if (source && source.type === 'geojson') {
        source.setData(item.source.data as any)
      }
      map?.setLayoutProperty(item.layer.id, 'visibility', item.layer.layout.visibility)
    })
  }

  const mapLoad = (): void => {
    setTimeout(() => {
      map?.resize()
      setScale(getScale(map, turf))
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
      if (onClick) {
        onClick({
          coordinates: getCoords(e),
          layers: getLayer(e)
        })
      }
      map && getPixelColor(map, e)
      console.log(getLayer(e))
    })
    map?.on('mousemove', (e) => {
      setCoords(getCoords(e))
    })
    map?.on('contextmenu', () => {})
    map?.on('moveend', () => {})
    map?.on('wheel', () => {
      setScale(getScale(map, turf))
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
      height={height || '100vh'}
      width={width}
      className={`t-map ${className}`}
    >
      {showInfo && (
        <>
          <Style source={styleImage} onChange={setMapStyle}/>
          <Coordinates onClick={() => { setMapStyle('yandexSat') }}>{`X: ${coords.x.toFixed(6)} Y: ${coords.y.toFixed(6)}`}</Coordinates>
          <Scale>{`М 1:${scale}`}</Scale>
        </>
      )}
    </Wrapper>
  )
}
