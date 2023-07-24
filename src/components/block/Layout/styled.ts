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

    > header {
      left: 0px;

      @media screen and (min-width: ${BREAKPOINTS.medium}) {
        left: ${p => p.collapsed ? '14.875rem' : '60px'};
      }
    }

    @media screen and (min-width: ${BREAKPOINTS.medium}) {
      margin-left: ${p => p.collapsed ? '14.875rem' : '60px'};
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

export const Sider = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1002;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 13.875rem;
  margin-top: 0;
  padding: 1rem .5rem;
  background-color: ${THEME.slider.bg};

  @media screen and (min-width: ${BREAKPOINTS.medium}) {
    display: flex;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  color: ${PALETTE.black};
  font-size: 1.875rem;
  font-family: ${FONTS.medium};

  > svg {
    width: 2.24888rem;
    height: 2.24888rem;
    margin-right: .48em;
    margin-left: .5rem;
  }
`

export const Menu = styled.div<{ collapsed: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  width: 100%;
  margin-top: .5rem;
  padding: 0 .5rem;


  > div:last-child {
    display: ${p => p.collapsed ? 'block' : 'none'};
    margin-left: auto;
  }
`

export const Info = styled.div`
  padding: 0 .5rem;
  color: ${PALETTE.icon};
  font-size: 0.75rem;
  font-family: ${FONTS.regular};
`

export const Container = styled.section`
  max-height: 100%;
  background-color: ${THEME.bg};
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 0 1.25rem 0 calc(1.25rem / 2);
  background-color: ${PALETTE.white};
  box-shadow: ${THEME.shadow};
`

export const Content = styled.div`
  height: 100%;
  padding-left: .25rem;
  -webkit-overflow-scrolling: touch;
`
