import React, { memo } from 'react'
import {
  Wrapper,
  Background,
  Container,
  Content,
  BounceFirst,
  BounceSecond
} from './styled'

export interface ILoader {
  color?: string
  height?: string
}

export const Loader: React.FC<ILoader> = memo((props) => (
  <Wrapper {...props}>
    <Background />
    <Container>
      <Content>
        <BounceSecond />
        <BounceFirst color={props.color} />
      </Content>
    </Container>
  </Wrapper>
))
