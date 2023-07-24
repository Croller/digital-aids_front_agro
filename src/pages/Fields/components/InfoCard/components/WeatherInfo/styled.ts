import { PALETTE, FONTS } from '@/styles/constants'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
  padding: 1rem;
  background: ${PALETTE.grey};
  border-radius: 1rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const H3 = styled.h3`
  margin: 0;
  color: ${PALETTE.black};
  font-size: 1.125rem;
  font-family: ${FONTS.medium};
  line-height: 110%;
  letter-spacing: -0.0225rem;
`

export const WeatherSwitch = styled.div`
  display: flex;
  align-items: flex-start;
  background: ${PALETTE.white};
  border: 1px solid ${PALETTE.border};
  border-radius: 0.3125rem;
`

export const SwitchItem = styled.div<{ active?: boolean }>`
  display: flex;
  gap: 0.625rem;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  color: ${(p) => (p.active ? `${PALETTE.dark_grey}` : `${PALETTE.note}`)};
  font-size: 0.75rem;
  font-family: ${FONTS.regular};
  line-height: 120%;
  letter-spacing: -0.0075rem;
  text-align: center;
  background: ${(p) => (p.active ? `${PALETTE.hover}` : `${PALETTE.white}`)};
  border-radius: 0.3125rem;
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
  font-size: 2.25rem;
  font-family: ${FONTS.medium};
  line-height: 100%;
  letter-spacing: -0.09rem;
`

export const Parameter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  justify-content: space-between;
`

export const ParameterKey = styled.div`
  color: ${PALETTE.icon};
  font-family: ${FONTS.regular};
  line-height: 120%;
`

export const ParameterValue = styled.div`
  color: ${PALETTE.black};
  font-family: ${FONTS.regular};
  line-height: 120%;
`
