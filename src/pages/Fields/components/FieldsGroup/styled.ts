import styled from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'

export const Wrapper = styled.div<{ collapsed: boolean }>`
  padding: .5rem;
  background-color: ${PALETTE.white};
  border-radius: 0.75rem;

  > div {
    &:first-child {
      > svg {
        transform: rotate(${p => p.collapsed ? '0' : '-90deg'});
      }
    }

    &:last-child {
      display: ${p => p.collapsed ? 'block' : 'none'};
    }
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: .5rem 1rem;
  cursor: pointer;

  > svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: auto;
  }
`

export const Title = styled.div`
  color: #151515;
  font-size: 1.125rem;
  font-family: ${FONTS.medium};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Field = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  padding: .5rem;
  background-color: ${p => p.active ? '#F1F1F1' : PALETTE.white};
  border-radius: 0.5rem;
  cursor: pointer;
`

export const Img = styled.img`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 0.375rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
  row-gap: .25rem;
  padding: .31rem 0;
`

export const Name = styled.div`
  color: ${PALETTE.black};
  font-size: 1.25rem;
  font-family: ${FONTS.medium};
`

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: .25rem;

  > div {
    &:first-child {
      padding-left: 0;
      border: unset;
    }

    &:last-child {
      padding-right: 0;
      border: unset;
    }
  }
`

export const Desc = styled.div`
  padding: 0 .5rem;
  color: #808080;
  font-size: 1rem;
  font-family: ${FONTS.regular};
  border-right: 0.0625rem solid #808080;
  border-left: 0.0625rem solid #808080;
`
