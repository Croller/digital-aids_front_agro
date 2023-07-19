/* eslint-disable max-len */
import React, { memo, useState } from 'react'
import { TriangleSvg } from '@/assets/images'
import { getDicValue } from '@/utils/dictionary'
import { MapBoxStatic } from '@/components/ui/MapBox'
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
  features: TFeature[]
  culture: TEnum[]
}

export const FieldsGroup: React.FC<IFieldsGroup> = memo(({ group, features, culture }) => {
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  const groupFeatures = features.filter(f => f.properties.group_id === group.id)

  const setActiveId = (e: React.MouseEvent<HTMLDivElement>, id: string): void => {
    e.stopPropagation()
    setActive(id)
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
            active={feature.properties.id === active}
            onClick={(e) => setActiveId(e, feature.properties.id)}
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
