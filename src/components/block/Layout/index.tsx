import React, { memo, useState } from 'react'
import { BREAKPOINTS } from '@/styles/constants'
import { ProfileSvg } from '@/assets/images'
import { useTranslation } from 'react-i18next'
import { useStores } from '@/stores'
import { useNavigate } from 'react-router-dom'
import { Account } from './components/Account'
import {
  Wrapper,
  Overlay,
  Sider,
  Logo,
  Menu,
  Item,
  Text,
  Header,
  HamburgerSvgStyled,
  Container,
  Content
} from './styled'

interface ILayout {
  header?: React.ReactNode
  menu?: React.ReactNode
  children?: React.ReactNode
}

export const Layout: React.FC<ILayout> = memo(({ header, menu, children }) => {
  const { userStore: { setToken } } = useStores()
  const [collapsed, setCollapsed] = useState(false)
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
    isUserRepo ? navigate(url) : window.location.href = `${host}${url}`
  }

  const isActive = (url: string): boolean => window.location.href.includes(url)

  return (
    <Wrapper collapsed={collapsed}>
      {collapsed && innerWidth < Number(BREAKPOINTS.medium.replace('px', '')) && (
        <Overlay onClick={() => { setCollapsed(false) }}/>
      )}
      <Sider>
        <Logo>
          {collapsed ? 'DA - Account' : 'DA'}
        </Logo>
        <Menu collapsed={collapsed}>
          {menu}
        </Menu>
        <Menu collapsed={collapsed}>
          <Item
            active={isActive('/user/account')}
            onClick={() => { onRoute('/user/account') }}
          >
            <ProfileSvg />
            <Text>{t('common.words.account')}</Text>
          </Item>
        </Menu>
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
