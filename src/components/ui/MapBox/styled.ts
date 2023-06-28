import styled, { css } from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'

const absolute = css`
  position: absolute;
  background-color: ${PALETTE.white};
  color: ${PALETTE.black};
  z-index: 100;
  font-family: ${FONTS.regular};
`

export const Wrapper = styled.div<{ width: string, height: string }>`
  position: relative;
  display: block;
  height: ${p => p.height};
  width: ${p => p.width};
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
  right: 0;
  bottom: 0;
  min-width: 90px;
  text-align: center;
  border-top-left-radius: 0.2rem;
  padding: 5px 10px;
  z-index: 100;
  font-size: 12px;
  ${absolute}
`

export const Coordinates = styled.div`
  left: 0;
  bottom: 0;
  min-width: 175px;
  text-align: left;
  border-top-right-radius: 0.2rem;
  padding: 5px 10px;
  z-index: 100;
  font-size: 12px;
  ${absolute}
`
