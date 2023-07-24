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
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  letter-spacing: -0.00875rem;
`
