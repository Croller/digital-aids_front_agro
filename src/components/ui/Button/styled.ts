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
  padding: ${THEME.button.padding};
  background-color: ${THEME.button.bg};
  border-radius: ${THEME.button.border.radius};
  border-width: 0;
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
    background-color: ${THEME.button.disabled} !important;
    cursor: not-allowed !important;
    color: ${PALETTE.white};
    border-width: 0;
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
    background-color: ${THEME.button.text.bg};
    color: ${THEME.button.text.font.color};
    padding: ${THEME.button.text.padding};

    > svg {
      path {
        fill: ${THEME.button.text.font.color};
      }
    }
  `}

  ${p => p.theme === 'link' && css`
  background-color: ${THEME.button.link.bg};
    color: ${THEME.button.link.font.color};
    padding: ${THEME.button.link.padding};

    > svg {
      path {
        fill: ${THEME.button.link.font.color};
      }
    }
  `}

`
