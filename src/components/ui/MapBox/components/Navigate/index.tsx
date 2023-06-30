import React, { memo } from 'react'
import { Button } from '@/components/ui/Button'
import { LocationSvg, MinusSvg, PlusSvg } from '@/assets/images'
import type mapboxgl from 'mapbox-gl'
import {
  Wrapper,
  Block
} from './styled'

interface INavigate {
  map: mapboxgl.Map | null
}

export const Navigate: React.FC<INavigate> = memo(({ map }) => {
  const setZoom = (num: number): void => {
    if (!map) return
    const zoom: number = map.getZoom()
    map?.setZoom(zoom + num)
  }

  const getGeolocation = (): void => {
    if (!('geolocation' in navigator)) return
    navigator.geolocation.getCurrentPosition(pos => {
      const lat = pos.coords.latitude
      const lng = pos.coords.longitude
      console.log('user location', pos)

      map?.flyTo({
        center: [lng, lat],
        zoom: 9
      })
    })
  }

  return (
    <Wrapper>
      <Block>
        <Button theme='text' onClick={() => { setZoom(1) }}>
          <PlusSvg />
        </Button>
        <Button theme='text' onClick={() => { setZoom(-1) }}>
          <MinusSvg />
        </Button>
      </Block>
      <Button theme='text' onClick={getGeolocation}>
        <LocationSvg />
      </Button>
    </Wrapper>
  )
})
