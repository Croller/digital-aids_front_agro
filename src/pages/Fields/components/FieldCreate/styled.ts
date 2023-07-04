import styled from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

export const Note = styled.p`
  margin: 20.19rem 0;
  color: ${PALETTE.note};
  font-family: ${FONTS.regular};
  text-align: center;
`
