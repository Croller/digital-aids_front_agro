import styled, { css } from 'styled-components'
import { Spin } from 'antd'
import { PALETTE, THEME } from '@/styles/constants'

export const ButtonStyled = styled.button<{ theme: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: ${THEME.button.font.size};
  font-family: ${THEME.button.font.family};
  color: ${THEME.button.font.color};
  cursor: pointer;
  padding: ${THEME.button.padding};
  background-color: transparent;
  border-radius: ${THEME.button.border.radius};
  border: 1px solid ${PALETTE.purple};
  color: ${THEME.button.font.color};

  &:focus {
    outline: none;
  }

  ${p => p.disabled && css`
    background-color: ${THEME.button.disabled} !important;
    cursor: not-allowed !important;
    color: ${PALETTE.white};
    border-width: 0;
  `}

  .ant-spin {
    .anticon {
      font-size: 18px;
    }
  }

  ${p => p.theme === 'primary' && css`
    background-color: ${THEME.button.bg};
    color: ${PALETTE.white};
  `}

  ${p => p.theme === 'text' && css`
    background-color: transparent;
    padding: 0;
    border-width: 0;
  `}

`

export const SpinStyled = styled(Spin)`
  margin-right: 1rem;
  color: ${PALETTE.white};
`
