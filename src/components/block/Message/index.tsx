import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStores } from '@/stores'
import { useTranslation } from 'react-i18next'

export const Message = observer((): React.ReactElement => {
  const { userStore } = useStores()
  const [t] = useTranslation()

  useEffect(() => {
    const success = userStore.success
    if (success) {
      // msg.open({
      //   type: 'success',
      //   content: t('common.words.success')
      // })
      userStore.setSuccess(false)
    }
  }, [userStore.success])

  return (<></>)
})
