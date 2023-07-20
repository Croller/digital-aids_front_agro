import React, { memo } from 'react'
import { WeatherInfo } from './components/WeatherInfo'
import { WorkPlan } from './components/WorkPlan'
import { FieldCondition } from './components/FieldCondition'
import { SummaryChart } from './components/SummaryChart'
import { Services } from './components/Services'
import { DetailedInformation } from './components/DetailedInformation'
import { Notes } from './components/Notes'
import { CloseSvg } from '@/assets/images'
import { type TFeature } from '@/types/geojson'
import {
  Wrapper,
  Header,
  H1,
  BlueDot,
  FieldType,
  FieldTypeText,
  Divider,
  Section
} from './styled'
import { getDicValue } from '@/utils/dictionary'

interface IInfoCard {
  feature: TFeature
  culture: TEnum[]
  onClose: () => void
}

export const InfoCard: React.FC<IInfoCard> = memo(({ feature, culture, onClose }) => (
  <Wrapper>
    <Header>
      <H1>Поле 1</H1>
      <CloseSvg onClick={onClose} />
    </Header>
    <FieldType>
      <BlueDot />
      <FieldTypeText>
        {getDicValue(feature.properties.culture_key, culture)}
        <Divider>|</Divider>
        {feature.properties.square.toFixed(2)}
      </FieldTypeText>
    </FieldType>
    <WeatherInfo />
    <Section>
      <FieldCondition />
      <WorkPlan />
    </Section>
    <SummaryChart />
    <Notes/>
    <Services/>
    <DetailedInformation/>
  </Wrapper>
))
