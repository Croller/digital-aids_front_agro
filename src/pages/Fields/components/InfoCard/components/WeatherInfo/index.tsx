import React, { memo } from 'react'
import { CloudSvg } from '@/assets/images'
import { useTranslation } from 'react-i18next'
import {
  Header,
  H3,
  Wrapper,
  WeatherSwitch,
  SwitchItem,
  Weather,
  Percents,
  PercentText,
  Parameter,
  ParameterKey,
  ParameterValue
} from './styled'

export const WeatherInfo: React.FC = memo(() => {
  const { t } = useTranslation()

  // Возможно будет изменена реализация списка параметров.
  // Hа данный момент не очень понятно как будет работать локализация при получении данных погоды
  const weatherPropsMockedArray = [
    { name: t('fields.weather.wind'), value: '4 м/с' },
    { name: t('fields.weather.humidity'), value: '78%' },
    { name: t('fields.weather.dewpoint'), value: '+14°' },
    { name: t('fields.weather.pressure'), value: '756 мм' },
    { name: t('fields.weather.cloudiness'), value: '100%' }
  ]

  return (
    <Wrapper>
      <Header>
        <H3>{t('fields.weather.title')}</H3>
        <WeatherSwitch>
          <SwitchItem active={true}>{t('fields.weather.now')}</SwitchItem>
          <SwitchItem>{t('fields.weather.week')}</SwitchItem>
        </WeatherSwitch>
      </Header>
      <Weather>
        <Percents>
          <CloudSvg />
          <PercentText>12,3%</PercentText>
        </Percents>
        {weatherPropsMockedArray.map((item) => (
          <Parameter key={item.name}>
            <ParameterKey>{item.name}</ParameterKey>
            <ParameterValue>{item.value}</ParameterValue>
          </Parameter>
        ))}
      </Weather>
    </Wrapper>
  )
})
