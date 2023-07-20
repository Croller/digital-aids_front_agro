import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { type TFunction } from 'i18next'
import {
  H1,
  Wrapper,
  DetailsList,
  Detail,
  Name,
  Value
} from './styled'

const getMockedDetails = (t: TFunction<'translation', undefined, 'translation'>): Array<{ name: string, value: string }> => [
  {
    name: t('fields.information.culture'),
    value: 'Абрикосов'
  },
  {
    name: t('fields.information.sort'),
    value: 'Самый свежий'
  },
  {
    name: t('fields.information.sowing'),
    value: '24 мая 2023'
  },
  {
    name: t('fields.information.plnned_maturation_day'),
    value: '18 августа'
  },
  {
    name: t('fields.information.projected_maturation_day'),
    value: '19 августа'
  },
  {
    name: t('fields.information.planned_yield'),
    value: '651ц (70ц/га)'
  },
  {
    name: t('fields.information.projected_yield'),
    value: '783ц (118%)'
  },
  {
    name: t('fields.information.area'),
    value: '2,63га'
  }
]

export const DetailedInformation: React.FC = memo(() => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <H1>{t('fields.information.title')}</H1>
      <DetailsList>
        {getMockedDetails(t).map((el) =>
          <Detail>
            <Name>{el.name}</Name>
            <Value>{el.value}</Value>
          </Detail>
        )}
      </DetailsList>
    </Wrapper>
  )
})
