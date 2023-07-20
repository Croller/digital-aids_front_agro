import { Checkbox } from '@/components/ui/Checkbox'
import { FONTS, PALETTE } from '@/styles/constants'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  padding: 1rem;
  background: ${PALETTE.grey};
  border-radius: 1rem;
`

export const SvgWrapper = styled.div`
  width: 24px;
  height: 24px;
  background-color: ${PALETTE.light_blue};
  border-radius: 1.5rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.94rem;
`

export const H3 = styled.h3`
  margin: 0;
  color: ${PALETTE.black};
  font-weight: 500;
  font-size: 1.125rem;
  font-family: ${FONTS.medium};
  font-style: normal;
  line-height: 110%;
  letter-spacing: -0.0225rem;
`

export const DayPlan = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.69rem;
`

export const Day = styled.div`
  color: ${PALETTE.note};
  font-size: 0.75rem;
  font-family: ${FONTS.regular};
  line-height: 120%;
  letter-spacing: -0.0075rem;
`

export const Task = styled.div`
  display: flex;
  align-self: stretch;
`

export const TaskCheckbox = styled(Checkbox)`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  color: ${PALETTE.black};
  font-size: 0.875rem;
  font-family: ${FONTS.regular};
  line-height: 1.125rem;
  letter-spacing: -0.00875rem;
`

export const TaskCheckboxWrapper = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-between;
`

export const TaskDescription = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.375rem 0rem;
`

export const FieldName = styled.div`
  color: ${PALETTE.note};
  font-size: 0.875rem;
  font-family: ${FONTS.regular};
`

export const EndTime = styled.span`
  display: flex;
  gap: 0.625rem;
  align-items: center;
  margin-top: 0.31rem;
  padding: 0.0625rem 0.25rem;
  color: ${PALETTE.light_green};
  font-family: unset;
  background: ${PALETTE.timerBg};
  border-radius: 2.5rem;
  fill: ${PALETTE.light_green};
`

export const ShowMore = styled.div`
  color: ${PALETTE.light_blue};
  font-size: 0.875rem;
  font-family: ${FONTS.regular};
`
