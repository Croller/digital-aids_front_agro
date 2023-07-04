import styled from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${PALETTE.grey};
  border-radius: 1rem;
  row-gap: 1.5rem;
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
  background-color: transparent;
  border-radius: 0.75rem;
  cursor: pointer;

  > svg:last-child {
    margin-left: auto;
  }
`

export const Text = styled.div`
  margin-left: 1rem;
  color: ${PALETTE.black};
  font-size: 1.25rem;
  font-family: ${FONTS.medium};
`
