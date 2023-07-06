import styled from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  font-size: 1.5rem;
  font-family: ${FONTS.medium};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  margin-top: 2.19rem;
  row-gap: 1rem;
`

export const Note = styled.p`
  margin: 20.19rem 0;
  color: ${PALETTE.note};
  font-family: ${FONTS.regular};
  text-align: center;
`
