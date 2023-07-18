import React, { memo } from 'react'
import { DeleteSvg } from '@/assets/images'
import { MapBoxStatic } from '@/components/ui/MapBox'
import { area } from '@turf/turf'
import { type TFeature } from '@/types/geojson'
import {
  Wrapper,
  Map,
  Info,
  Col,
  Delete
} from './styled'

interface IField {
  feature: TFeature
  onChange: (feature: TFeature) => void
  onDelete: (feature: TFeature) => void
}

export const Field: React.FC<IField> = memo(({ feature, onChange, onDelete }) => {
  const getArea = (area(feature) * 0.0001).toFixed(2)

  return (
    <Wrapper>
      <Map src={MapBoxStatic(feature)} />
      <Info>
        <Col>
          <div>1</div>
          <div>2</div>
        </Col>
        <Col>
          <div>{`${getArea} га`}</div>
          <div>2</div>
        </Col>
      </Info>
      <Delete theme='text' onClick={() => { onDelete(feature) }}>
        <DeleteSvg />
      </Delete>
    </Wrapper>
  )
})
