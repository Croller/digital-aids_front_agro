import styled from 'styled-components'
import { Z_INDEX, PALETTE } from '@/styles/constants'
import { type ILoader } from '.'

export const Wrapper = styled.div<ILoader>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: ${Z_INDEX.loader};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${p => p.height ?? '100%'};
`

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${Z_INDEX.loader + 1};
  background-color: ${PALETTE.white};
  opacity: 0.6;
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${Z_INDEX.loader + 2};
  display: flex;
  align-items: center;
`

export const Content = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  margin: 0 auto;

  @-webkit-keyframes sk-doublebounce {
    0%,
    100% {
      transform: scale(0);
      transform: scale(0);
    }

    50% {
      border: 5px solid ${PALETTE.white};
      transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes sk-doublebounce {
    0%,
    100% {
      transform: scale(0);
      transform: scale(0);
    }

    50% {
      border: 5px solid ${PALETTE.white};
      transform: scale(1);
      transform: scale(1);
    }
  }
`

export const BounceFirst = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${p => (p.color ?? `${PALETTE.green1}`)};
  border: 5px solid ${PALETTE.white};
  border-radius: 50%;
  box-shadow: 0 0 21px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 21px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 21px 3px rgba(0, 0, 0, 0.2);
  opacity: 0.8;
  animation: sk-doublebounce 2s infinite ease-in-out;
  animation: sk-doublebounce 2s infinite ease-in-out;
  animation-delay: -1s;
  animation-delay: -1s;
`

export const BounceSecond = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${p => (p.color ?? `${PALETTE.green1}`)};
  border: 5px solid ${PALETTE.white};
  border-radius: 50%;
  box-shadow: 0 0 21px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 21px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 21px 3px rgba(0, 0, 0, 0.2);
  opacity: 0.8;
  animation: sk-doublebounce 2s infinite ease-in-out;
  animation: sk-doublebounce 2s infinite ease-in-out;
`
