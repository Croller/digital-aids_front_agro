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
  ${absolute}
  right: 0;
  bottom: 0;
  min-width: 90px;
  text-align: center;
  border-top-left-radius: .2rem;
  border-bottom-right-radius: .75rem;
  padding: 5px 10px;
  z-index: 100;
  font-size: 12px;
`

export const Coordinates = styled.div`
  ${absolute}
  left: 0;
  bottom: 0;
  min-width: 175px;
  text-align: left;
  border-top-right-radius: .2rem;
  border-bottom-left-radius: .75rem;
  padding: 5px 5px 5px 25px;
  z-index: 100;
  font-size: 12px;
`
