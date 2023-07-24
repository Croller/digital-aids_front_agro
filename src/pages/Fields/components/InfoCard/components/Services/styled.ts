import { BugSvg } from '@/assets/images'
import { PALETTE, FONTS } from '@/styles/constants'
import styled from 'styled-components'

export const H1 = styled.h1`
  margin: 0;
  color: ${PALETTE.black};
  font-size: 2.25rem;
  font-family: ${FONTS.medium};
`

export const Wrapper = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  margin-top: 1rem;
  border-radius: 1rem;
`

export const ServicesList = styled.div`
  width: 100%;
  margin-top: 1rem;
`

export const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`

export const Service = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  align-self: stretch;
  min-height: 5.13rem;
  padding: 1rem;
  background: ${PALETTE.bg};
  border-radius: 0.75rem;
`

export const Name = styled.span`
  color: ${PALETTE.black};
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.125rem;
  letter-spacing: -0.01125rem;
`

export const Description = styled.span`
  color: ${PALETTE.note};
  font-weight: 400;
  font-size: 0.875rem;
  font-family: ${FONTS.regular};
  letter-spacing: -0.00875rem;
`

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background: ${PALETTE.white};
  border-radius: 0.5rem;
`

export const ColoredBugSvg = styled(BugSvg)<{ color?: string }>`
  fill: ${(p) => p.color};
`
