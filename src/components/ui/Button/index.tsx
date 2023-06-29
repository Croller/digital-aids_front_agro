import React from 'react'
import { ButtonStyled } from './styled'

interface IButton {
  type?: 'button' | 'submit' | 'reset'
  theme?: 'default' | 'primary' | 'text' | 'link'
  disabled?: boolean
  loading?: boolean
  children?: React.ReactNode
  onClick?: () => void
}

export const Button: React.FC<IButton> = ({ theme = 'default', children, loading, ...props }) => (
  <ButtonStyled {...props} theme={theme}>
    {loading}
    {children}
  </ButtonStyled>
)
