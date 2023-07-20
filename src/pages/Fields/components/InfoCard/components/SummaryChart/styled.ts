import { PALETTE, FONTS } from '@/styles/constants'
import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-bottom: 0.7rem;
`

export const H3 = styled.div`
  font-family: ${FONTS.medium};
  font-size: 1.125rem;
  margin: 0;
`

export const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  border-radius: 1rem;
  background: ${PALETTE.grey};
  margin-top: 1rem;
`
export const Percents = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.6875rem;
  margin-top: 0.69rem;
`
export const PercentText = styled.div`
  font-family: ${FONTS.medium};
  font-size: 2.25rem;
  line-height: 100%;
`
export const ChartUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  padding: 0;
`
export const ChartLi = styled.li`
  display: flex;
  flex-direction: column;
`
export const ColorDot = styled.div<{ color?: string }>`
margin-right: 0.28rem;
  width: 0.6875rem;
  height: 0.6875rem;
  border-radius: 1rem;
  background-color: ${(p) => p.color};
`
export const Name = styled.span`
  display: flex;
  color: ${PALETTE.dark_grey};
  font-family: ${FONTS.regular};
  font-size: 0.75rem;
  line-height: 120%;
  letter-spacing: -0.0075rem;
`

export const AdditionalText = styled.span`
  padding-top: 0.38rem;
  color: ${PALETTE.note};
  font-family: ${FONTS.regular};
  font-size: 0.75rem;
  line-height: 120%;
  letter-spacing: -0.0075rem;
`
