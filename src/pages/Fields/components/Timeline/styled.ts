import styled from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'
import { Button } from '@/components/ui/Button'

export const TimelineBody = styled.div`
  position: absolute;
  top: 2rem;
  left: 50%;
  z-index: 1;
  display: inline-flex;
  flex: 1;
  align-items: center;
  max-width: 27.3125rem;
  height: 2.25rem;
  padding: 0rem 0.375rem;
  overflow: hidden;
  background: ${PALETTE.grey_deep};
  border-radius: 1.625rem;
  transform: translate(-50%, -50%);
`

export const DatesList = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  overflow-x: auto;
  list-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const DateItem = styled.li`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: center;
  height: 2.25rem;
  padding: 0rem 0.5rem;
  cursor: pointer;
`

export const Day = styled.div`
  min-width: 3.5rem;
  color: ${PALETTE.white};
  font-size: 0.9375rem;
  font-family: ${FONTS.regular};
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 0.5rem;
`

export const Forward = styled(Button)`
  height: 1.5rem;
  margin-left: 0.25rem;
  > svg {
      path {
        fill: ${PALETTE.white};
      }
    }
`

export const Back = styled(Button)`
  height: 1.5rem;
  transform: rotate(180deg);
  > svg {
      path {
        fill: ${PALETTE.white};
      }
    }
`
