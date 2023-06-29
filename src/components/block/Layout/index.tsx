import React, { memo, useState } from 'react'
import { BREAKPOINTS } from '@/styles/constants'
import { LogoSvg, TileMapPng } from '@/assets/images'
import { useTranslation } from 'react-i18next'
import { useStores } from '@/stores'
import { useNavigate } from 'react-router-dom'
import {
  Wrapper,
  Overlay,
  Sider,
  Logo,
  Menu,
  Footer,
  Item,
  Text,
  Avatar,
  Header,
  Container,
  Content
} from './styled'
import { items } from './constants'

interface ILayout {
  header?: React.ReactNode
  menu?: React.ReactNode
  children?: React.ReactNode
}

export const Layout: React.FC<ILayout> = memo(({ header, menu, children }) => {
  const { userStore: { setToken, user } } = useStores()
  const [collapsed, setCollapsed] = useState(true)
  const [t] = useTranslation()
  const navigate = useNavigate()
  const isDev = process.env.NODE_ENV === 'development'
  const isUserRepo = window.location.href.includes('/user')
  const host = isDev ? `http://${process.env.LOCAL_IP ?? ''}:${process.env.AUTH_PORT ?? ''}` : `https://${process.env.HOST ?? ''}`

  window.addEventListener('resize', () => { setCollapsed(false) })

  const onRoute = (url: string): void => {
    if (url.includes('/user/auth')) {
      setToken(null)
    }
    !isUserRepo ? navigate(url) : window.location.href = `${host}${url}`
  }

  const isActive = (url: string): boolean => window.location.href.includes(url)

  return (
    <Wrapper collapsed={collapsed}>
      {collapsed && innerWidth < Number(BREAKPOINTS.medium.replace('px', '')) && (
        <Overlay onClick={() => { setCollapsed(false) }}/>
      )}
      <Sider>
        <Logo>
          <LogoSvg />
          {collapsed && t('words.app')}
        </Logo>
        <Menu collapsed={collapsed}>
          {items.map((item) => (
            <Item
              key={`_item_${item.key}`}
              active={isActive(item.path)}
              onClick={() => { onRoute(item.path) }}
            >
              {item.icon}
              <Text>{t(`layout.${item.key}`)}</Text>
            </Item>
          ))}
          {menu}
        </Menu>
        <Footer collapsed={collapsed}>
          <Item
            active={isActive('/user/account')}
            onClick={() => { onRoute('/user/account') }}
          >
            <Avatar url={TileMapPng} />
            <Text>Test{`${user.middlename} ${user.name}`}</Text>
          </Item>
        </Footer>
      </Sider>
      <Container>
        {/* <Header>
          <HamburgerSvgStyled onClick={() => { setCollapsed(!collapsed) }} />
          {header}
          <Account
            isRule={isRule}
            onRoute={onRoute}
          />
        </Header> */}
        <Content>
          {children}
        </Content>
      </Container>
    </Wrapper>
  )
})
