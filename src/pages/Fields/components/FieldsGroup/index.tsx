/* eslint-disable max-len */
import React, { useState } from 'react'
import { TriangleSvg } from '@/assets/images'
import { getDicValue } from '@/utils/dictionary'
import { MapBoxStatic } from '@/components/ui/MapBox'
import { observer } from 'mobx-react'
import { type TFeature } from '@/types/geojson'
import { type TGroupField } from '@/types/field'
import {
  Wrapper,
  Header,
  Title,
  Content,
  Field,
  Img,
  Info,
  Name,
  Detail,
  Desc
} from './styled'

interface IFieldsGroup {
  group: TGroupField
  selected?: TFeature | null
  features: TFeature[]
  culture: TEnum[]
  onClick: (obj: TFeature) => void
}

export const FieldsGroup: React.FC<IFieldsGroup> = observer(({ group, selected, features, culture, onClick }) => {
  const [collapsed, setCollapsed] = useState(false)

  const groupFeatures = features.filter(f => f?.properties?.group_id === group.id)

  const setActiveId = (e: React.MouseEvent<HTMLDivElement>, feature: TFeature): void => {
    e.stopPropagation()
    onClick(feature)
  }

  return (
    <Wrapper collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>
      <Header>
        <Title>
          {group.name}
        </Title>
        <TriangleSvg />
      </Header>
      <Content>
        {groupFeatures.map((feature: TFeature, f: number) => (
          <Field
            key={`_field_${f + 1}`}
            active={feature.properties.id === selected?.properties?.id}
            onClick={(e) => setActiveId(e, feature)}
          >
            <Img src={MapBoxStatic(feature)} />
            <Info>
              <Name>{feature.properties.name}</Name>
              <Detail>
                <Desc>
                  {getDicValue(feature.properties.culture_key, culture)}
                </Desc>
                <Desc>
                  {feature.properties.square.toFixed(2)}
                </Desc>
                <Desc>
                  {feature.properties.square.toFixed(2)}
                </Desc>
              </Detail>
            </Info>
          </Field>
        ))}
      </Content>
    </Wrapper>
  )
})
