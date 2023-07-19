import React, { memo } from 'react'
import { DeleteSvg } from '@/assets/images'
import { MapBoxStatic } from '@/components/ui/MapBox'
import { type TFeature } from '@/types/geojson'
import { type TFieldCreate } from '@/types/field'
import {
  Wrapper,
  Map,
  Info,
  Col,
  Delete
} from './styled'

interface IField {
  number: number
  feature: TFeature
  onChange: (feature: TFeature) => void
  onDelete: (feature: TFeature) => void
}

export const Field: React.FC<IField> = memo(({
  number,
  feature,
  onChange,
  onDelete
}) => {
  const obj: TFieldCreate = feature.properties

  return (
    <Wrapper>
      <Map src={MapBoxStatic(feature)} />
      <Info>
        <Col>
          <div>{obj.name}</div>
          <div>{obj.culture_key}</div>
        </Col>
        <Col>
          <div>{`${obj.square.toFixed(2)} га`}</div>
          <div>{obj.culture_desc}</div>
        </Col>
      </Info>
      <Delete theme='text' onClick={() => { onDelete(feature) }}>
        <DeleteSvg />
      </Delete>
    </Wrapper>
  )
})
