import React, { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { type TFeature } from '@/types/geojson'
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
import { TriangleSvg } from '@/assets/images'

interface IFieldsGroup {
  features: TFeature[]
}

export const FieldsGroup: React.FC<IFieldsGroup> = memo(({ features }) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)
  const [active, setActive] = useState(true)

  return (
    <Wrapper collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}>
      <Header>
        <Title>
          {'Test'}
        </Title>
        <TriangleSvg />
      </Header>
      <Content>
        <Field active={active}>
          <Img src="https://api.mapbox.com/styles/v1/mapbox/satellite-v9/static/[39.521942138671875,54.57683778006273,39.53704833984375,54.58320507532238]/600x600?access_token=pk.eyJ1IjoiY3JvbGxlciIsImEiOiJWX0ZXZF9zIn0.lIjITIfJ3v62baoHVIqtqQ" />
          <Info>
            <Name>test</Name>
            <Detail>
              <Desc>
                Пщеница
              </Desc>
              <Desc>
                12,5 га
              </Desc>
              <Desc>
                12,5 га
              </Desc>
            </Detail>
          </Info>
        </Field>
      </Content>
    </Wrapper>
  )
})
