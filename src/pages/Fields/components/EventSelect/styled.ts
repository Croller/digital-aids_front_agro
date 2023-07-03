import styled from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${PALETTE.grey};
`

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.75rem;
  padding-right: 1rem;
  background-color: transparent;
  cursor: pointer;

  > svg:last-child {
    margin-left: auto;
  }
`

export const Text = styled.div`
  font-family: ${FONTS.medium};
  font-size: 1.25rem;
  color: ${PALETTE.black};
  margin-left: 1rem;
`
