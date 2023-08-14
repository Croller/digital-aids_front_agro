import { PALETTE, FONTS } from '@/styles/constants'
import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`

export const H3 = styled.div`
  margin: 0;
  font-size: 1.125rem;
  font-family: ${FONTS.medium};
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem;
  background: ${PALETTE.grey};
  border-radius: 1rem;
`

export const Percents = styled.div`
  display: flex;
  gap: 0.6875rem;
  align-items: flex-start;
  margin-top: 0.69rem;
`

export const PercentText = styled.div`
  font-size: 2.25rem;
  font-family: ${FONTS.medium};
  line-height: 100%;
`

export const ChartUl = styled.ul`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.7rem;
  padding: 0;
`

export const ChartLi = styled.li`
  display: flex;
  flex-direction: column;
`

export const ColorDot = styled.div<{ color?: string }>`
  width: 0.6875rem;
  height: 0.6875rem;
  margin-right: 0.28rem;
  background-color: ${(p) => p.color};
  border-radius: 1rem;
`

export const Name = styled.span`
  display: flex;
  color: ${PALETTE.grey_dark};
  font-size: 0.75rem;
  font-family: ${FONTS.regular};
  line-height: 120%;
  letter-spacing: -0.0075rem;
`

export const AdditionalText = styled.span`
  margin-top: 0.38rem;
  color: ${PALETTE.note};
  font-size: 0.75rem;
  font-family: ${FONTS.regular};
  line-height: 120%;
  letter-spacing: -0.0075rem;
`
