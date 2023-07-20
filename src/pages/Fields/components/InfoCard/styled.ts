import { FONTS, PALETTE } from '@/styles/constants'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  background: ${PALETTE.white};
  border-radius: 0.75rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  > svg {
    cursor: pointer;
  }
`

export const H1 = styled.h1`
  margin: 0;
  color: ${PALETTE.black};
  font-size: 2.25rem;
  font-family: ${FONTS.medium};
`

export const BlueDot = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${PALETTE.blue};
  border-radius: 1.5rem;
`

export const FieldType = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1.5rem;
`

export const FieldTypeText = styled.div`
  color: ${PALETTE.black};
  font-size: 1rem;
  opacity: 0.5;
`

export const Divider = styled.div`
  display: inline;
  padding: 0 0.6rem;
`

export const Section = styled.section`
  display: flex;
`
