import React, { createContext, type ReactNode, useContext } from 'react'
import { RootStore } from '@/stores/rootStore'
import { observer } from 'mobx-react'

type TStore = {
  children: ReactNode
}

const rootStore = new RootStore()
const RootStoreContext = createContext(rootStore)

export const useStores = (): RootStore => useContext(RootStoreContext)

export const RootStoreProvider = observer(({ children }: TStore) => (
  <RootStoreContext.Provider value={rootStore}>
    {children}
  </RootStoreContext.Provider>
))
