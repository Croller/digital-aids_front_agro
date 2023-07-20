import styled from 'styled-components'
import { Z_INDEX, PALETTE } from '@/styles/constants'
import { type ILoader } from '.'

export const Wrapper = styled.div<ILoader>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${p => p.height ?? '100%'};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${Z_INDEX.loader};
`

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: ${PALETTE.white};
  opacity: 0.6;
  z-index: ${Z_INDEX.loader + 1};
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: ${Z_INDEX.loader + 2};
  display: flex;
  align-items: center;
`

export const Content = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  margin: 0 auto;

  @-webkit-keyframes sk-doublebounce {
    0%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    50% {
      -webkit-transform: scale(1);
      transform: scale(1);
      border: 5px solid ${PALETTE.white};
    }
  }

  @keyframes sk-doublebounce {
    0%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    50% {
      -webkit-transform: scale(1);
      transform: scale(1);
      border: 5px solid ${PALETTE.white};
    }
  }
`

export const BounceFirst = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid ${PALETTE.white};
  background-color: ${p => (p.color ?? `${PALETTE.green1}`)};
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: sk-doublebounce 2s infinite ease-in-out;
  animation: sk-doublebounce 2s infinite ease-in-out;
  -webkit-box-shadow: 0 0 21px 3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 21px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 21px 3px rgba(0, 0, 0, 0.2);
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
`

export const BounceSecond = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid ${PALETTE.white};
  background-color: ${p => (p.color ?? `${PALETTE.green1}`)};
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: sk-doublebounce 2s infinite ease-in-out;
  animation: sk-doublebounce 2s infinite ease-in-out;
  -webkit-box-shadow: 0 0 21px 3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 21px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 21px 3px rgba(0, 0, 0, 0.2);
`
