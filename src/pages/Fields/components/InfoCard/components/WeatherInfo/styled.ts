import { PALETTE, FONTS } from '@/styles/constants'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  background: ${PALETTE.grey};
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const H3 = styled.h3`
  font-family: ${FONTS.medium};
  color: ${PALETTE.black};
  font-size: 1.125rem;
  margin: 0;
`

export const WeatherSwitch = styled.div`
  display: flex;
  align-items: flex-start;
  border-radius: 0.3125rem;
  border: 1px solid ${PALETTE.border};
  background: ${PALETTE.white};
`

export const SwitchItem = styled.div<{ active?: boolean }>`
  display: flex;
  padding: 0.25rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.3125rem;
  background: ${(p) => (p.active ? `${PALETTE.hover}` : `${PALETTE.white}`)};
  color: ${(p) => (p.active ? `${PALETTE.dark_grey}` : `${PALETTE.note}`)};
  text-align: center;
  font-family: ${FONTS.regular};
  font-size: 0.75rem;
  line-height: 120%;
  letter-spacing: -0.0075rem;
`

export const Weather = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const Percents = styled.div`
  display: flex;
  gap: 0.6875rem;
`

export const PercentText = styled.div`
  color: ${PALETTE.black};
  font-family: ${FONTS.medium};
  font-size: 2.25rem;
  line-height: 100%;
  letter-spacing: -0.09rem;
`

export const Parameter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.25rem;
`

export const ParameterKey = styled.div`
  font-family: ${FONTS.regular};
  color: ${PALETTE.icon};
  line-height: 120%;
`

export const ParameterValue = styled.div`
  font-family: ${FONTS.regular};
  line-height: 120%;
  color: ${PALETTE.black};
`
