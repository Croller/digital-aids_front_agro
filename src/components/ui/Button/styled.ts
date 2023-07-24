import styled, { css } from 'styled-components'
import { PALETTE, THEME } from '@/styles/constants'

export const ButtonStyled = styled.button<{ theme: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${THEME.button.padding};
  color: ${THEME.button.font.color};
  font-size: ${THEME.button.font.size};
  font-family: ${THEME.button.font.family};
  background-color: ${THEME.button.bg};
  border-width: 0;
  border-radius: ${THEME.button.border.radius};
  cursor: pointer;

  &:focus {
    outline: none;
  }

  > svg {
    path {
      fill: ${THEME.button.font.color};
    }
  }

  ${p => p.disabled && css`
    color: ${PALETTE.white};
    background-color: ${THEME.button.disabled} !important;
    border-width: 0;
    cursor: not-allowed !important;
  `}

  ${p => p.theme === 'primary' && css`
    color: ${THEME.button.primary.font.color};
    background-color: ${THEME.button.primary.bg};

    > svg {
      path {
        fill: ${THEME.button.primary.font.color};
      }
    }
  `}

  ${p => p.theme === 'text' && css`
    padding: ${THEME.button.text.padding};
    color: ${THEME.button.text.font.color};
    background-color: ${THEME.button.text.bg};

    > svg {
      path {
        fill: ${THEME.button.text.font.color};
      }
    }
  `}

  ${p => p.theme === 'link' && css`
  padding: ${THEME.button.link.padding};
  color: ${THEME.button.link.font.color};
  background-color: ${THEME.button.link.bg};

  > svg {
    path {
      fill: ${THEME.button.link.font.color};
    }
  }
  `}

`
