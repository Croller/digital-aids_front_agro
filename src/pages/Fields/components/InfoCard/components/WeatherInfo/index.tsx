import React, { useEffect } from 'react'
import { CloudSvg } from '@/assets/images'
import { useTranslation } from 'react-i18next'
import { useStores } from '@/stores'
import { center } from '@turf/turf'
import { observer } from 'mobx-react'
import { type TFeature } from '@/types/geojson'
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

interface IWeatherInfo {
  feature: TFeature
}

export const WeatherInfo: React.FC<IWeatherInfo> = observer(({ feature }) => {
  const { t } = useTranslation()
  const { weatherStore: { current, weatherServices } } = useStores()
  const obj = current?.find(f => f.id === feature.properties.id)

  const weatherPropsMockedArray = [
    { name: t('fields.weather.wind'), value: obj ? `${obj.weather.wind.speed.toFixed(0)} м/с` : '0 м/с' },
    { name: t('fields.weather.humidity'), value: obj ? `${obj.weather.main.humidity} %` : '0 %' },
    { name: t('fields.weather.dewpoint'), value: '0°' },
    { name: t('fields.weather.pressure'), value: obj ? `${(obj.weather.main.pressure * 0.7501).toFixed(0)} мм` : '0 мм' },
    { name: t('fields.weather.cloudiness'), value: obj ? `${obj.weather.clouds.all} %` : '0 %' }
  ]

  useEffect(() => {
    if (!current?.some(f => f.id === feature.properties.id)) {
      const { id } = feature.properties
      const point = center(feature)?.geometry.coordinates
      point && weatherServices.fetchCurrent(id, point[1], point[0])
    }
  }, [feature])

  return (
    <Wrapper>
      <Header>
        <H3>
          {t('fields.weather.title')}
        </H3>
        <WeatherSwitch>
          <SwitchItem active={true}>
            {t('fields.weather.now')}
          </SwitchItem>
          <SwitchItem>
            {t('fields.weather.week')}
          </SwitchItem>
        </WeatherSwitch>
      </Header>
      <Weather>
        <Percents>
          <CloudSvg />
          <PercentText>
            {obj ? `${obj.weather.main.temp.toFixed(0)}°` : '0°'}
          </PercentText>
        </Percents>
        {weatherPropsMockedArray.map((item, i) => (
          <Parameter key={`parameter_${i + 1}`} >
            <ParameterKey>
              {item.name}
            </ParameterKey>
            <ParameterValue>
              {item.value}
            </ParameterValue>
          </Parameter>
        ))}
      </Weather>
    </Wrapper >
  )
})
