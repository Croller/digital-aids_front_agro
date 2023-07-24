import { PlusSvg } from '@/assets/images'
import { PALETTE, FONTS } from '@/styles/constants'
import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
`

export const H1 = styled.h1`
  margin: 0;
  color: ${PALETTE.black};
  font-size: 2.25rem;
  font-family: ${FONTS.medium};
`

export const Wrapper = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  margin-top: 1rem;
  border-radius: 1rem;
`

export const NotesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  margin-top: 1.5rem;
`

export const Note = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 5.13rem;
  padding: 1rem;
  background: #FFF9E2;
  border-radius: 1rem;
`

export const Date = styled.span`
  display: flex;
  gap: 0.5rem;
  color: ${PALETTE.black};
  font-size: 1.125rem;
  font-family: ${FONTS.medium};
  line-height: 110%;
  letter-spacing: -0.0225rem;
`

export const Description = styled.span`
  color: ${PALETTE.note};
  font-size: 0.875rem;
  font-family: ${FONTS.regular};
  letter-spacing: -0.00875rem;
`

export const NotesPlusSvg = styled(PlusSvg)`
  width: 2rem;
  height: 2rem;
  margin-left: 0.5rem;
  background-color: ${PALETTE.light_blue};
  border-radius: 2rem;
`
