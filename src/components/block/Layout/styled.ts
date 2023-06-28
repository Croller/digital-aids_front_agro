import styled from 'styled-components'
import { BREAKPOINTS, FONTS, PALETTE, THEME, Z_INDEX } from '@/styles/constants'

export const Wrapper = styled.div<{ collapsed: boolean }>`
  display: block;


  > aside {
    display: ${({ collapsed }) => collapsed ? 'block' : 'none'};
    width: 250px;

    @media screen and (min-width: ${BREAKPOINTS.medium}) {
      display: block;
      width: ${({ collapsed }) => collapsed ? '250px' : '60px'};
    }
  }

  > section {
    margin-left: 0px;

    > header {
      left: 0px;

      @media screen and (min-width: ${BREAKPOINTS.medium}) {
        left: ${({ collapsed }) => collapsed ? '250px' : '60px'};
      }
    }

    @media screen and (min-width: ${BREAKPOINTS.medium}) {
      margin-left: ${({ collapsed }) => collapsed ? '250px' : '60px'};
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
  max-width: 250px;
  z-index: 1002;
  margin-top: 0;
  background-color: ${THEME.slider.bg};

  @media screen and (min-width: ${BREAKPOINTS.medium}) {
    display: block;
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  padding: 0 1.3rem;
  text-align: center;
  color: ${PALETTE.white};
  font-size: 24px;
  font-family: ${FONTS.bold};
`

export const Menu = styled.div<{ collapsed: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 4rem;

  > div {
    justify-content: ${({ collapsed }) => collapsed ? 'flex-start' : 'center'};
    padding: ${({ collapsed }) => collapsed ? '.8rem 1rem' : '.8rem 0'};

    > span {
      display: ${({ collapsed }) => collapsed ? 'block' : 'none'};
    }
  }
`

export const Item = styled.div<{ active: boolean }>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  font-family: ${FONTS.medium};
  cursor: pointer;
  background-color: ${(p) => p.active ? '#A0A8C4' : 'transparent'};

  &:not(:last-child) {
    margin-bottom: 4rem;
  }

  &:hover {
    background-color: #A0A8C4;
  }

  > svg {
    width: 26px;
    height: 24px;

    path:first-child {
      fill: ${PALETTE.white}
    }
  }
`

export const Text = styled.span`
  color: ${PALETTE.white};
  margin-left: .5rem;
`

export const Container = styled.section<{ noPadding: boolean }>`
  min-height: 100vh;
  padding: ${(p) => p.noPadding ? '70px 0 0' : 'calc(70px + 1.25rem) calc(2.5rem * .5) 60px calc(2.5rem * .5)'};
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
  -webkit-overflow-scrolling: touch;
`
