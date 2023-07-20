import React, { memo } from 'react'
import { PALETTE } from '@/styles/constants'
import { useTranslation } from 'react-i18next'
import {
  Header,
  H3,
  Wrapper,
  Percents,
  PercentText,
  ChartUl,
  ChartLi,
  Name,
  ColorDot,
  AdditionalText
} from './styled'

const mockedSummaryChartData = [
  { name: 'Общий', value: '12,3%', additionally: '', color: '' },
  { name: 'Влажность', value: '6,9%', additionally: 'Необходимо < 12%', color: PALETTE.attention },
  { name: 'Данные 1', value: '5,5%', additionally: '', color: PALETTE.warning },
  { name: 'Данные 2', value: '1,2%', additionally: '', color: PALETTE.attention },
  { name: 'Данные 3', value: '0,9%', additionally: '', color: PALETTE.heading }]

export const SummaryChart: React.FC = memo(() => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Header>
        <H3>{t('fields.chart.title')}</H3>
      </Header>
      <ChartUl>
        {mockedSummaryChartData.map((el) =>
          <ChartLi>
            <Name>
              {el.color && <ColorDot color={el.color} />}
              <span>{el.name}</span>
            </Name>
            <Percents>
              <PercentText>{el.value}</PercentText>
            </Percents>
            <AdditionalText>{el.additionally}</AdditionalText>
          </ChartLi>
        )}
      </ChartUl>
    </Wrapper>
  )
})
