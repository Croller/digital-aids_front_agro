import React, { type FC, lazy, Suspense } from 'react'
import { observer } from 'mobx-react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useStores } from '@/stores'

import { Loader } from '@/components/block/Loader'
import { Layout } from '@/components/block/Layout'

const APP = process.env.APP_NAME ?? ''

const Error = lazy(() => import('./pages/Error'))
const Summary = lazy(() => import('./pages/Summary'))
const Fields = lazy(() => import('./pages/Fields'))

export const Router: FC = observer(() => {
  const { userStore: { token, user, loading } } = useStores()

  return (
    <Suspense fallback={<Loader />}>
      {!user && loading && <Loader />}
      <BrowserRouter>
        <Routes>
          {token && (
            <Route path={`/${APP}/*`} element={
              <Layout>
                <Routes>
                  <Route path="/summary" element={<Summary />} />
                  <Route path="/fields" element={<Fields />} />
                  <Route path="*" element={<Navigate replace to={`/${APP}/fields`} />} />
                </Routes>
              </Layout>
            } />
          )}
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
})
