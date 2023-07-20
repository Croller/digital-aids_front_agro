import React, { memo } from 'react'
import { PlusSvg } from '@/assets/images'
import { useTranslation } from 'react-i18next'
import {
  Wrapper,
  Header,
  H3,
  DayPlan,
  Day,
  Task,
  TaskDescription,
  TaskCheckbox,
  TaskCheckboxWrapper,
  FieldName,
  EndTime,
  ShowMore,
  SvgWrapper
} from './styled'

const mockedWorkPlanArray = [
  {
    date: '23 июня',
    tasks: [
      {
        task: 'Культивация',
        object: 'Поле 3',
        isDone: true
      },
      {
        task: 'Внесение удобрений',
        object: 'Поле 2',
        isDone: true
      },
      {
        task: 'Обработка от вредителей',
        object: 'Поле 3',
        isDone: false,
        endTime: '19:50'
      }
    ]
  },
  {
    date: '26 июня',
    tasks: [
      {
        task: 'Уборка',
        object: 'Поле 3',
        isDone: false
      }
    ]
  },
  {
    date: '30 июня',
    tasks: [
      {
        task: 'Уборка',
        object: 'Поле 3',
        isDone: false
      },
      {
        task: 'Культивация',
        object: 'Поле 3',
        isDone: false
      }
    ]
  }
]

export const WorkPlan: React.FC = memo(() => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Header>
        <H3>{t('fields.plan.title')}</H3>
        <SvgWrapper>
          <PlusSvg />
        </SvgWrapper>
      </Header>
      {mockedWorkPlanArray.map((day) => (
        <DayPlan key={day.date}>
          <Day>{day.date}</Day>
          {day.tasks.map((el) => (
            <Task key={el.task}>
              <TaskDescription>
                <TaskCheckboxWrapper>
                  <TaskCheckbox label={el.task} value={el.isDone} isBlocked={!!el.endTime} />
                  <FieldName>{el.object}</FieldName>
                </TaskCheckboxWrapper>
                {/* {Проблема отображения  "1:0" из-за шрифта} */}
                {el.endTime &&
                  <EndTime>
                    {el.endTime}
                  </EndTime>}
              </TaskDescription>
            </Task>
          ))}
        </DayPlan>
      ))}
      <ShowMore>{`${t('fields.plan.more')} 8`}</ShowMore>
    </Wrapper>
  )
}
)
