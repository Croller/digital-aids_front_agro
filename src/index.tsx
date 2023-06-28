import React from 'react'
import { observer } from 'mobx-react'
import { createRoot } from 'react-dom/client'
import { Router } from '@/router'
import { RootStoreProvider } from '@/stores'
import { GlobalStyle } from '@/styles/base'
import './i18n'
import 'antd/dist/reset.css'
import 'mapbox-gl/dist/mapbox-gl.css'

const container = document.getElementById('root')
const root = container && createRoot(container)

const App = observer(() => (
  <RootStoreProvider>
    <GlobalStyle />
    <Router />
  </RootStoreProvider>
))

root?.render(<App />)
