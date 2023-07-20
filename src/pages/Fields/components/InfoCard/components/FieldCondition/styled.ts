import { PALETTE, FONTS } from '@/styles/constants'
import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  margin-bottom: 0.69rem;
`
export const H3 = styled.div`
  margin: 0;
  color: ${PALETTE.black};
  font-size: 1.125rem;
  font-family: ${FONTS.medium};
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

export const Table = styled.table`
  > * {
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
  box-shadow: 0px -1px 0px 0px rgba(0, 0, 0, 0.08) inset;
`

export const TableHeader = styled.th`
  color: ${PALETTE.note};
  font-size: 0.75rem;
  font-family: ${FONTS.regular};
  line-height: 120%;
  text-align: end;
`
export const TableData = styled.td<{ textAlign?: string, color?: string }>`
  padding: 0.375rem 0rem;
  color: ${(p) => (p.color ? p.color : `${PALETTE.black}`)};
  font-family: ${FONTS.regular};
  text-align: ${(p) => (p.textAlign ? p.textAlign : 'end')};
`
