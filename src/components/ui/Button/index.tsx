import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { ButtonStyled, SpinStyled } from './styled'

interface IButton {
  type?: 'button' | 'submit' | 'reset'
  theme?: 'default' | 'primary' | 'text' | 'link'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

export const Button: React.FC<IButton> = ({ theme = 'default', children, loading, ...props }) => {
  const indicator = (<LoadingOutlined spin />)

  return (
    <ButtonStyled {...props} theme={theme}>
      {loading && (<SpinStyled indicator={indicator} />)}
      {children}
    </ButtonStyled>
  )
}
