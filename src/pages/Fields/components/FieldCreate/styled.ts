import styled from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.div`
  font-family: ${FONTS.medium};
  font-size: 1.5rem;
`

export const Note = styled.p`
  font-family: ${FONTS.regular};
  color: ${PALETTE.note};
  margin: 20.19rem 0;
  text-align: center;
`
