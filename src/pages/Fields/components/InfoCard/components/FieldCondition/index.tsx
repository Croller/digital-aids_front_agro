import React, { memo } from 'react'
import { PALETTE } from '@/styles/constants'
import { GoodSvg } from '@/assets/images'
import { useTranslation } from 'react-i18next'
import { type TFunction } from 'i18next'
import {
  Header,
  H3,
  Wrapper,
  Percents,
  PercentText,
  Table,
  TableBody,
  TableRow,
  TableHeader,
  TableData
} from './styled'

type TableDataParameter = {
  parameter: string
  fact: string
  goal: string
  color: string
}

const getMockedTableDataArray = (t: TFunction<'translation', undefined, 'translation'>): TableDataParameter[] => [
  {
    parameter: t('fields.status.vegetation'),
    fact: '79%',
    goal: '84%',
    color: PALETTE.light_green
  },
  {
    parameter: t('fields.status.humidity'),
    fact: '8%',
    goal: '26%',
    color: '#FA4B14'
  },
  {
    parameter: t('fields.status.pests'),
    fact: '2,9%',
    goal: '0%',
    color: '#FFA800'
  },
  {
    parameter: t('fields.status.diseases'),
    fact: '0,1%',
    goal: '0%',
    color: '#FFA800'
  },
  {
    parameter: t('fields.status.relief'),
    fact: '0,9%',
    goal: '0%',
    color: PALETTE.light_green
  },
  {
    parameter: t('fields.status.following'),
    fact: '79%',
    goal: '100%',
    color: PALETTE.light_green
  },
  {
    parameter: t('fields.status.forecast'),
    fact: '118%',
    goal: '100%',
    color: PALETTE.light_green
  }
]

export const FieldCondition: React.FC = memo(() => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Header>
        <H3>{t('fields.status.title')}</H3>
      </Header>
      <Percents>
        <GoodSvg />
        <PercentText>
          82%
        </PercentText>
      </Percents>
      <Table>
        <TableBody>
          <TableRow>
            <TableHeader />
            <TableHeader>
              {t('fields.status.fact')}
            </TableHeader>
            <TableHeader>
              {t('fields.status.goal')}
            </TableHeader>
          </TableRow>
          {getMockedTableDataArray(t).map((el, i) => (
            <TableRow key={`_data_${i + 1}`} >
              <TableData>
                {el.parameter}
              </TableData>
              <TableData color={el.color}>
                {el.fact}
              </TableData>
              <TableData color={PALETTE.note}>
                {el.goal}
              </TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Wrapper>
  )
})
