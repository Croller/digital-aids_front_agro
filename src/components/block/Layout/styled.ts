import styled, { css } from 'styled-components'
import { BREAKPOINTS, FONTS, PALETTE, THEME, Z_INDEX } from '@/styles/constants'

export const Wrapper = styled.div<{ collapsed: boolean }>`
  display: block;
  padding: .25rem 0;

  > aside {
    display: ${p => p.collapsed ? 'block' : 'none'};
    width: 250px;

    @media screen and (min-width: ${BREAKPOINTS.medium}) {
      display: flex;
      width: ${p => p.collapsed ? '14.875rem' : '60px'};
    }
  }

  > section {
    margin-left: 0px;

    @media screen and (min-width: ${BREAKPOINTS.medium}) {
      margin-left: ${p => p.collapsed ? '14.875rem' : '60px'};
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

export const Sider = styled.aside<{ collapsed: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  max-width: 13.875rem;
  z-index: 1002;
  margin-top: 0;
  background-color: ${THEME.slider.bg};
  flex-direction: column;
  align-items: ${p => p.collapsed ? 'flex-start' : 'center'};
  justify-content: space-around;
  padding: 1rem .5rem;

  > div:first-child > svg {
    margin-right: ${p => p.collapsed ? '.66rem' : '0'};
  }

  @media screen and (min-width: ${BREAKPOINTS.medium}) {
    display: flex;
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${PALETTE.black};
  font-size: 1.875rem;
  font-family: ${FONTS.medium};
  padding: 0 1rem;

  > svg {
    width: 2.24888rem;
    height: 2.24888rem;
    margin-right: .66rem;
  }
`

export const Menu = styled.div<{ collapsed: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  padding: 0 .5rem;

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
  justify-content: center;
  align-items: center;
  font-size: 1.1875rem;
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

export const Company = styled.div<{ collapsed: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${p => p.collapsed ? 'space-between' : 'center'};
  padding: 0 .5rem;
  margin-top: .5rem;


  > div:last-child {
    margin-left: auto;
    display: ${p => p.collapsed ? 'block' : 'none'};
  }
`

export const Info = styled.div`
  font-size: 0.75rem;
  font-family: ${FONTS.regular};
  color: ${PALETTE.icon};
  padding: 0 .5rem;
`

export const Container = styled.section`
  max-height: 100%;
  background-color: ${THEME.bg};
`

export const Content = styled.div`
  height: 100%;
  padding-left: .25rem;
  -webkit-overflow-scrolling: touch;
`
