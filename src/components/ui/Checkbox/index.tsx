import React from 'react'
import {
  Wrapper,
  CheckboxLabel
} from './styled'

interface ICheckbox {
  label: string
  value: boolean
  isBlocked: boolean
  onChange?: () => void
}

export const Checkbox: React.FC<ICheckbox> = ({ label, value, isBlocked, onChange }) => (
  <Wrapper>
    <input type="checkbox" checked={value} onChange={onChange} disabled={isBlocked} />
    <CheckboxLabel>{label}</CheckboxLabel>
  </Wrapper>
)
