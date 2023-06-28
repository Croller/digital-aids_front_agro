import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStores } from '@/stores'

export const ErrorMessage = observer((): React.ReactElement => {
  const { userStore } = useStores()

  useEffect(() => {
    const error = userStore.error
    if (error) {
      // api.error({
      //   message: `Error: ${error.name}`,
      //   description: error.desc,
      //   placement: 'topRight'
      // })
      userStore.setError(null)
    }
  }, [userStore.error])

  return (<></>)
})
