import { PALETTE, FONTS } from '@/styles/constants'
import styled from 'styled-components'

export const H1 = styled.h1`
  font-family: ${FONTS.medium};
  color: ${PALETTE.black};
  font-size: 2.25rem;
  margin: 0;
`

export const Wrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
`

export const DetailsList = styled.div`
  margin-top: 1rem;
  > * {
    &:last-child {
      box-shadow: none;
    }
  }
`

export const Detail = styled.div`
  display: flex;
  height: 1.875rem;
  padding: 0.5rem 0rem;
  justify-content: space-between;
  align-items: center;
  background: ${PALETTE.white};
  box-shadow: 0px -1px 0px 0px ${PALETTE.border} inset;
`

export const Name = styled.div`
  color: ${PALETTE.note};
  font-family: ${FONTS.regular};
  font-size: 0.875rem;
`

export const Value = styled.div`
  color: ${PALETTE.black};
  font-family: ${FONTS.regular};
  font-size: 0.875rem;
`
