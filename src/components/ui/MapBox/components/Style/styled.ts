import styled from 'styled-components'
import { FONTS, PALETTE } from '@/styles/constants'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  left: 5px;
  bottom: 30px;
  width: 80px;
  height: 80px;
  z-index: 1;
`

export const Item = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  cursor: pointer;
  border-radius: 0.2rem;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 0.2rem;
`

export const Name = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: .2rem 0;
  font-family: ${FONTS.regular};
  font-size: .8rem;
  color: ${PALETTE.black};
  background-color: ${PALETTE.white};
`

export const List = styled.div<{ show: boolean }>`
  display: ${(p) => p.show ? 'flex' : 'none'};
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  column-gap: 0.5rem;
  margin-left: .5rem;
`
