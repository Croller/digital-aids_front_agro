import { PALETTE } from '@/styles/constants'
import styled from 'styled-components'

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  accent-color: ${PALETTE.light_blue};
  border-color: white;
`

export const CheckboxLabel = styled.div`
  margin-left: 0.25rem;
  letter-spacing: -0.00875rem;
`
