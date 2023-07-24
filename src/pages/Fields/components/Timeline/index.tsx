import React, { memo } from 'react'
import moment from 'moment'
import { ArrowSvg, EyeSvg } from '@/assets/images'
import { TimelineBody, DatesList, DateItem, Day, Controls, Forward, Back } from './styled'

interface ITimeLine {
  dates: string[]
  selectDate: (date: string) => void
}

export const Timeline: React.FC<ITimeLine> = memo(({ dates, selectDate }) => {
  const forward = (): void => {
    /* Будет двигать скролбар вперёд на размер одного DateItem */
    console.log('forward')
  }

  const back = (): void => {
    /* Будет двигать скролбар назад на размер одного DateItem */
    console.log('back')
  }

  const parseDate = (date: string): number => +moment(date).format('D')

  const checkedData = (): (string | null)[] => {
    const first = parseDate(dates[0])
    const last = parseDate(dates[dates.length - 1])
    const calendar: number[] = Array.from({ length: last - first + 1 }, (_, i) => first + i)

    return calendar
      .map((el) => dates.find((elem) => el === parseDate(elem)))
      .map((el) => (typeof el === 'string' ? el : null))
  }

  return (
    <TimelineBody>
      <DatesList>
        {checkedData().map((item, i) => (
          <DateItem key={`_item_${i + 1}`}>
            {item
              ? (
                <Day
                  onClick={() => {
                    selectDate(item)
                  }}
                >
                  {moment(item).locale('ru').format('D MMM')}
                </Day>
              )
              : (
                <EyeSvg />
              )}
          </DateItem>
        ))}
      </DatesList>
      <Controls>
        <Back onClick={back} theme={'text'}>
          <ArrowSvg />
        </Back>
        <Forward onClick={forward} theme={'text'}>
          <ArrowSvg />
        </Forward>
      </Controls>
    </TimelineBody>
  )
})
