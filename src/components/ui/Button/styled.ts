import styled, { css } from 'styled-components'
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
  border: 1px solid ${PALETTE.primary};

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
    background-color: ${THEME.button.primary.bg};
    color: ${THEME.button.primary.font.color};
  `}

  ${p => p.theme === 'text' && css`
    background-color: transparent;
    color: #00000066;
    padding: 0;
    border-width: 0;
  `}

  ${p => p.theme === 'link' && css`
    background-color: transparent;
    color: ${THEME.button.bg};
    padding: 0;
    border-width: 0;
  `}

`
