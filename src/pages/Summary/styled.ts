import styled from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'
import { MapBox } from '@/components/ui/MapBox'

export const Wrapper = styled.div`
  display: block;
  display: flex;
  flex-direction: row;
  column-gap: .25rem;
  height: calc(100vh - .5rem);
`

export const LeftPanel = styled.div`
  width: 100%;
  max-width: 29.5rem;
  border-radius: 0.75rem;
  padding: 1rem;
  background-color: ${PALETTE.white};
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.div`
  font-family: ${FONTS.medium};
  font-size: 2.25rem;
  line-height: 2.25rem;
  letter-spacing: -0.0675rem;
`

export const Note = styled.p`
  font-family: ${FONTS.regular};
  color: ${PALETTE.note};
  margin: 2.19rem 0;
`

export const MapboxStyled = styled(MapBox)`
  canvas {
    border-radius: 0.75rem;
  }
`
