import styled, { css } from 'styled-components'
import { BREAKPOINTS, FONTS, PALETTE, THEME, Z_INDEX } from '@/styles/constants'

export const Wrapper = styled.div<{ collapsed: boolean }>`
  display: block;
  padding: .25rem 0;

  > aside {
    display: ${({ collapsed }) => collapsed ? 'block' : 'none'};
    width: 250px;

    @media screen and (min-width: ${BREAKPOINTS.medium}) {
      display: flex;
      width: ${({ collapsed }) => collapsed ? '14.875rem' : '60px'};
    }
  }

  > section {
    margin-left: 0px;

    > header {
      left: 0px;

      @media screen and (min-width: ${BREAKPOINTS.medium}) {
        left: ${({ collapsed }) => collapsed ? '14.875rem' : '60px'};
      }
    }

    @media screen and (min-width: ${BREAKPOINTS.medium}) {
      margin-left: ${({ collapsed }) => collapsed ? '14.875rem' : '60px'};
    }
  }
`

export const Overlay = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${PALETTE.overlay};
  z-index: ${Z_INDEX.overlay};

  @media screen and (min-width: ${BREAKPOINTS.medium}) {
    display: none;
  }
`

export const Sider = styled.aside`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  max-width: 13.875rem;
  z-index: 1002;
  margin-top: 0;
  background-color: ${THEME.slider.bg};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem .5rem;

  @media screen and (min-width: ${BREAKPOINTS.medium}) {
    display: flex;
  }
`

export const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${PALETTE.black};
  font-size: 1.875rem;
  font-family: ${FONTS.medium};

  > svg {
    width: 2.24888rem;
    height: 2.24888rem;
    margin-left: .5rem;
    margin-right: .48em;
  }
`

export const Menu = styled.div<{ collapsed: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  padding: 0 .5rem;

  > div {
    justify-content: ${({ collapsed }) => collapsed ? 'flex-start' : 'center'};
    padding: ${({ collapsed }) => collapsed ? '.5rem;' : '.8rem 0'};

    > span {
      display: ${({ collapsed }) => collapsed ? 'block' : 'none'};
    }
  }

`

export const Footer = styled(Menu)`
  margin-top: auto;
`

export const Item = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-family: ${FONTS.medium};
  color: ${PALETTE.black};
  background-color: transparent;
  cursor: pointer;
  padding: .5rem;
  border-radius: 0.375rem;

  &:hover {
    background-color: ${PALETTE.white};

    > span {
      color: ${PALETTE.primary};
    }
  }

  > svg {
    width: 1.5rem;
    height: 1.5rem;

    path {
      fill: ${PALETTE.icon};
    }
  }

  ${p => p.active && css`
    background-color: ${PALETTE.white};

    > span {
      color: ${PALETTE.primary};
    }

    > svg {
      path {
        fill: ${PALETTE.primary};
      }
    }
  `}
`

export const Avatar = styled.div<{ url: string }>`
  display: block;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: url(${p => p.url}) no-repeat;
  background-color: #fff;
  background-size: cover;
`

export const Text = styled.span`
  color: ${PALETTE.black};
  margin-left: .63rem;
`

export const Container = styled.section`
  max-height: 100%;
  background-color: ${THEME.bg};
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  height: 70px;
  background-color: ${PALETTE.white};
  box-shadow: ${THEME.shadow};
  padding: 0 1.25rem 0 calc(1.25rem / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`

export const Content = styled.div`
  height: 100%;
  padding-left: .25rem;
  -webkit-overflow-scrolling: touch;
`
