import styled from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'

export const Wrapper = styled.div`
  position: absolute;
  bottom: 30px;
  left: 5px;
  z-index: 1;
  display: flex;
  flex-direction: row;
  width: 80px;
  height: 80px;
`

export const Item = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 0.2rem;
  cursor: pointer;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 0.2rem;
`

export const Name = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: .2rem 0;
  color: ${PALETTE.black};
  font-size: .8rem;
  font-family: ${FONTS.regular};
  text-align: center;
  background-color: ${PALETTE.white};
  border-bottom-right-radius: .2rem;
  border-bottom-left-radius: .2rem;
`

export const List = styled.div<{ show: boolean }>`
  display: ${(p) => p.show ? 'flex' : 'none'};
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-left: .5rem;
  column-gap: 0.5rem;
`
