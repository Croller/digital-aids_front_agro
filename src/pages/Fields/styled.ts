import styled from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'
import { MapBox } from '@/components/ui/MapBox'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100vh - .5rem);
  column-gap: .25rem;
`

export const LeftPanel = styled.div<{ existFields: boolean }>`
  display: flex;
  flex-direction: ${p => p.existFields ? 'column' : 'unset'};
  width: 100%;
  max-width: 29.5rem;
  row-gap: .25rem;
`

export const Block = styled.div`
  padding: 1rem;
  background-color: ${PALETTE.white};
  border-radius: 0.75rem;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.div`
  font-size: 2.25rem;
  font-family: ${FONTS.medium};
  line-height: 2.25rem;
  letter-spacing: -0.0675rem;
`

export const Note = styled.p`
  margin: 2.19rem 0;
  color: ${PALETTE.note};
  font-family: ${FONTS.regular};
`

export const MapPanel = styled.div`
  width: 100%;
`

export const MapboxStyled = styled(MapBox)`
  canvas {
    border-radius: 0.75rem;
  }
`
