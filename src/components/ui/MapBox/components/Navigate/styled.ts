import styled, { css } from 'styled-components'
import { PALETTE } from '@/styles/constants'

const button = css`
  padding: .38rem;
  background-color: #232323;

  > svg {
    width: 1.5rem;
    height: 1.5rem;

    path {
      fill: ${PALETTE.white}
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  row-gap: 1rem;

  > button {
    ${button}
  }
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: .06rem;

  > button {
    ${button}

    &:first-child {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`
