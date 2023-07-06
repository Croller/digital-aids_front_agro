import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type TPolygon } from '@/types/geojson'
import {
  Wrapper,
  Header,
  Title,
  Counter,
  Graph,
  CharItem
} from './styled'

interface IFieldsGroup {
  name: string
  features: TPolygon[]
}

export const FieldsGroup: React.FC<IFieldsGroup> = memo(({ name, features }) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Header>
        <Title>
          {t('fields.text.used')}
        </Title>
        <Counter>
          {`120 ${t('units.hectare.short')} ${t('words.from')} 160 ${t('units.hectare.short')}`}
        </Counter>
      </Header>
      <Graph>
        <CharItem width='50%' color='#0073FA'/>
        <CharItem width='10%' color='#FA5A00'/>
        <CharItem width='30%' color='#CFF100'/>
        <CharItem />
      </Graph>
    </Wrapper>
  )
})
