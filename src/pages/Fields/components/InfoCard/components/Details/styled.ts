import { PALETTE, FONTS } from '@/styles/constants'
import styled from 'styled-components'

export const H1 = styled.h1`
  margin: 0;
  color: ${PALETTE.black};
  font-size: 2.25rem;
  font-family: ${FONTS.medium};
  line-height: 2.25rem;
  letter-spacing: -0.0675rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0 0;
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
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0rem;
  background: ${PALETTE.white};
  box-shadow: 0px -1px 0px 0px ${PALETTE.border} inset;
`

export const Name = styled.div`
  color: ${PALETTE.note};
  font-size: 0.875rem;
  font-family: ${FONTS.regular};
  line-height: 120%;
  letter-spacing: -0.00875rem;
`

export const Value = styled.div`
  color: ${PALETTE.black};
  font-size: 0.875rem;
  font-family: ${FONTS.regular};
  line-height: 120%;
  letter-spacing: -0.00875rem;
`
