import { PALETTE, FONTS } from '@/styles/constants'
import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  margin-bottom: 0.69rem;
`

export const H3 = styled.h3`
  margin: 0;
  color: ${PALETTE.black};
  font-size: 1.125rem;
  font-family: ${FONTS.medium};
  line-height: 110%;
  letter-spacing: -0.0225rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  margin-right: 1rem;
  padding: 1rem;
  background: ${PALETTE.grey};
  border-radius: 1rem;
`

export const Percents = styled.div`
  display: flex;
  gap: 0.6875rem;
  align-items: center;
`

export const PercentText = styled.div`
  color: ${PALETTE.black};
  font-size: 2.25rem;
  font-family: ${FONTS.medium};
  line-height: 100%;
`

export const Table = styled.table``

export const TableBody = styled.tbody`
  > tr {
    &:first-child {
      box-shadow: none;
    }
    &:last-child {
      box-shadow: none;
    }
  }
`

export const TableRow = styled.tr`
  background: ${PALETTE.grey};
  box-shadow: 0px -1px 0px 0px #00000014 inset;

  > td {
    &:first-child {
      text-align: start;
    }
  }
`

export const TableHeader = styled.th`
  color: ${PALETTE.note};
  font-weight: 400;
  font-size: 0.75rem;
  font-family: ${FONTS.regular};
  line-height: 120%;
  text-align: end;
`

export const TableData = styled.td<{ color?: string }>`
  padding: 0.375rem 0rem;
  color: ${(p) => (p.color ? p.color : `${PALETTE.black}`)};
  font-size: 0.875rem;
  font-family: ${FONTS.regular};
  text-align: end;
`
