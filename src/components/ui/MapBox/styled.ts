import styled, { css } from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'

const absolute = css`
  position: absolute;
  z-index: 100;
  color: ${PALETTE.black};
  font-family: ${FONTS.regular};
  background-color: ${PALETTE.white};
`

export const Wrapper = styled.div<{ width: string, height: string }>`
  position: relative;
  display: block;
  width: ${p => p.width};
  height: ${p => p.height};
  font-family: ${FONTS.regular};

  .mapboxgl-ctrl-attrib {
    display: none;
  }

  canvas {
    border-radius: 3px;
    outline: none;
  }
`

export const Scale = styled.div`
  ${absolute}
  right: 0;
  bottom: 0;
  min-width: 90px;
  text-align: center;
  z-index: 100;
  border-top-left-radius: 0.2rem;
  border-bottom-right-radius: 0.75rem;
  padding: 5px 10px;
  font-size: 12px;
`

export const Coordinates = styled.div`
  ${absolute}
  left: 0;
  bottom: 0;
  min-width: 175px;
  text-align: left;
  border-top-right-radius: 0.2rem;
  border-bottom-left-radius: 0.75rem;
  padding: 5px 5px 5px 25px;
  z-index: 100;
  font-size: 12px;
`
