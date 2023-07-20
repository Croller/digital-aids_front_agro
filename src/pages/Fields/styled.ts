import styled, { css } from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'
import { MapBox } from '@/components/ui/MapBox'
import { CalendarSvg } from '@/assets/images'
import { type TFeature } from '@/types/geojson'

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

export const MapboxWrapper = styled.div <{ info: TFeature | null }>`
  position: relative;
  display: block;
  align-items: center;
  width: 100%;

  ${p => p.info && css`
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: .25rem;
  `}
`

export const MapboxStyled = styled(MapBox)`S
  canvas {
    border-radius: 0.75rem;
  }
`

export const Select = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1;
  display: inline-flex;
  gap: 0.37rem;
  align-items: center;
  padding: 0.375rem 0.5rem 0.375rem 1rem;
  color: ${PALETTE.white};
  font-size: 1rem;
  font-family: ${FONTS.medium};
  background: ${PALETTE.deep_grey};
  border-radius: 1.625rem;
  cursor: pointer;

  > svg {
    width: 1rem;
    height: 1rem;
    transform: rotate(90deg);
    fill: ${PALETTE.white};
  }
`

export const Calendar = styled(CalendarSvg)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
  display: flex;
  gap: 0.375rem;
  align-items: flex-start;
  padding: 0.375rem;
  background: ${PALETTE.deep_grey};
  border-radius: 6.875rem;
`
