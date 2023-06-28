import React, { memo, useState } from 'react'
import { BREAKPOINTS } from '@/styles/constants'
import { useTranslation } from 'react-i18next'
import { useStores } from '@/stores'
import { useNavigate } from 'react-router-dom'
import {
  Wrapper,
  Overlay,
  Sider,
  Logo,
  Menu,
  Item,
  Text,
  Header,
  Container,
  Content
} from './styled'

interface ILayout {
  header?: React.ReactNode
  menu?: React.ReactNode
  children?: React.ReactNode
}

export const Layout: React.FC<ILayout> = memo(({ header, menu, children }) => {
  const { userStore: { isRule, setToken } } = useStores()
  const [collapsed, setCollapsed] = useState(false)
  const [t] = useTranslation()
  const navigate = useNavigate()
  const env = process.env.NODE_ENV ?? ''
  const isDev = env === 'development'
  const isUserRepo = window.location.href.includes('/user')
  const host = isDev ? `http://${process.env.LOCAL_IP ?? ''}:${process.env.AUTH_PORT ?? ''}` : `https://${process.env.HOST ?? ''}`
  const path = isUserRepo ? '' : host
  window.addEventListener('resize', () => { setCollapsed(false) })

  const onRoute = (url: string): void => {
    if (url.includes('/user/auth')) {
      setToken(null)
    }
    isUserRepo ? navigate(url) : window.location.href = `${host}${url}`
  }

  const isActive = (url: string): boolean => window.location.href.includes(url)

  const noPadding = (): boolean => ['/geo/map'].some((path: string) => window.location.href.includes(path))

  return (
    <Wrapper collapsed={collapsed}>
      {collapsed && innerWidth < Number(BREAKPOINTS.medium.replace('px', '')) && (
        <Overlay onClick={() => { setCollapsed(false) }}/>
      )}
      <Sider>
        <Logo>
          {collapsed ? 'T1 - Aero' : 'T1'}
        </Logo>
        <Menu collapsed={collapsed}>
          {/* {isRule('root') && (
            <Item onClick={() => { onRoute('/user/admin') }}>
              <UserCircleSvg />
              <Text>{t('common.words.users')}</Text>
            </Item>
          )} */}
          <Item
            active={isActive('/user/apps')}
            onClick={() => { onRoute('/user/apps') }}
          >
            <Text>{t('common.words.apps')}</Text>
          </Item>
          {menu}
        </Menu>
      </Sider>
      <Container noPadding={noPadding()}>
        <Header>
          {header}
        </Header>
        <Content>
          {children}
        </Content>
      </Container>
    </Wrapper>
  )
})
