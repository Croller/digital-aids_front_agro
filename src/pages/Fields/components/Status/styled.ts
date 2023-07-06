import styled from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'

export const Wrapper = styled.div`
  margin-top: 1.5rem;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.div`
  color: #151515;
  font-size: 0.9375rem;
  font-family: ${FONTS.regular};
`

export const Counter = styled.div`
  margin-left: auto;
  color: ${PALETTE.icon};
  font-size: 0.9375rem;
  font-family: ${FONTS.regular};
`

export const Graph = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: .5rem;
  column-gap: .12rem;
`

export const CharItem = styled.div<{ width?: string, color?: string }>`
  width: ${p => p.width ?? '100%'};
  height: 1.875rem;
  background-color: ${p => p.color ?? '#E6E6E6'};
  border-radius: 0.125rem;
`
