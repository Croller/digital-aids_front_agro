import { BugSvg } from '@/assets/images'
import { PALETTE, FONTS } from '@/styles/constants'
import styled from 'styled-components'

export const H1 = styled.h1`
  font-family: ${FONTS.medium};
  color: ${PALETTE.black};
  font-size: 2.25rem;
  margin: 0;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 1rem;
`
export const ServicesList = styled.div`
  margin-top: 1.5rem;
  width: 100%;
`
export const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`

export const Service = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
  min-height: 5.13rem;
  gap: 0.5rem;
  flex: 1 0 0;
  align-self: stretch;
  background: ${PALETTE.grey};
  border-radius: 0.75rem;
  background: ${PALETTE.bg};
`

export const Name = styled.span`
  color: ${PALETTE.black};
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.125rem;
  letter-spacing: -0.01125rem;
`
export const Description = styled.span`
  color: ${PALETTE.note};
  font-family: ${FONTS.regular};
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: -0.00875rem;
`
export const ColoredBugSvg = styled(BugSvg)<{ color?: string }>`
  fill: ${(p) => p.color};
`
