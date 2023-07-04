import styled, { css } from 'styled-components'
import { BREAKPOINTS, FONTS, PALETTE, THEME, Z_INDEX } from '@/styles/constants'

export const Wrapper = styled.div<{ collapsed: boolean }>`
  display: block;
  padding: .25rem 0;

  > aside {
    display: ${p => p.collapsed ? 'block' : 'none'};
    width: 14.875rem;

    @media screen and (min-width: ${BREAKPOINTS.medium}) {
      display: flex;
      width: ${p => p.collapsed ? '14.875rem' : '60px'};
    }
  }

  > section {
    margin-left: 0px;

    @media screen and (min-width: ${BREAKPOINTS.medium}) {
      margin-left: ${p => p.collapsed ? '15.875rem' : '60px'};
    }
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${Z_INDEX.overlay};
  display: none;
  width: 100vw;
  height: 100vh;
  background-color: ${PALETTE.overlay};

  @media screen and (min-width: ${BREAKPOINTS.medium}) {
    display: none;
  }
`

export const Sider = styled.aside<{ collapsed: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1002;
  display: none;
  flex-direction: column;
  align-items: ${p => p.collapsed ? 'flex-start' : 'center'};
  justify-content: space-around;
  width: 14.875rem;
  margin-top: 0;
  padding: .5rem;
  background-color: ${THEME.slider.bg};

  > div:first-child > svg {
    margin-right: ${p => p.collapsed ? '.66rem' : '0'};
  }

  @media screen and (min-width: ${BREAKPOINTS.medium}) {
    display: flex;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: .5rem;
  color: ${PALETTE.black};
  font-size: 1.875rem;
  font-family: ${FONTS.medium};

  > svg {
    width: 2.24888rem;
    height: 2.24888rem;
    margin-right: .66rem;
  }
`

export const Menu = styled.div<{ collapsed: boolean }>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  margin-top: 1.5rem;

  > div {
    justify-content: ${p => p.collapsed ? 'flex-start' : 'center'};
    padding: ${p => p.collapsed ? '.5rem;' : '.8rem 0'};

    > span {
      display: ${p => p.collapsed ? 'block' : 'none'};
    }
  }

`

export const Footer = styled(Menu)`
  margin-top: auto;

  span {
    font-size: 1rem;
  }
`

export const Item = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: .5rem;
  color: ${PALETTE.black};
  font-size: 1.1875rem;
  font-family: ${FONTS.medium};
  background-color: transparent;
  border-radius: 0.375rem;
  cursor: pointer;

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

  > svg {
    width: 1.5rem;
    height: 1.5rem;

    path {
      fill: ${PALETTE.icon};
    }
  }

  &:hover {
    background-color: ${PALETTE.white};

    > span {
      color: ${PALETTE.primary};
    }
  }
`

export const Avatar = styled.div<{ url: string }>`
  display: block;
  width: 2.25rem;
  height: 2.25rem;
  background: url(${p => p.url}) no-repeat;
  background-color: #FFFFFF;
  background-size: cover;
  border-radius: 50%;
`

export const Text = styled.span`
  margin-left: .63rem;
  color: ${PALETTE.black};
`

export const Company = styled.div<{ collapsed: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${p => p.collapsed ? 'space-between' : 'center'};
  box-sizing: border-box;
  width: 100%;
  margin-top: .5rem;
  padding: .5rem;

  > div:last-child {
    display: ${p => p.collapsed ? 'block' : 'none'};
    margin-left: auto;
  }
`

export const Info = styled.div`
  color: ${PALETTE.icon};
  font-size: 0.75rem;
  font-family: ${FONTS.regular};
`

export const Container = styled.section`
  background-color: ${THEME.bg};
`

export const Content = styled.div`
  height: 100%;
  padding-left: .25rem;
  -webkit-overflow-scrolling: touch;
`
