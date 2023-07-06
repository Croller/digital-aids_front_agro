import styled from 'styled-components'
import { PALETTE } from '@/styles/constants'
import { Button } from '@/components/ui/Button'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  column-gap: .5rem;
`

export const Map = styled.div`
  display: flex;
  flex-direction: column;
  width: 4.25rem;
  height: 4.25rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  column-gap: .25rem;
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  row-gap: .25rem;
`

export const Delete = styled(Button)`
  > svg {
    width: 2rem;
    height: 2rem;

    path {
      fill: ${PALETTE.icon};
    }
  }
`
