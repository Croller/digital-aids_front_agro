import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import {
  Wrapper,
  Header,
  Title,
  Note
} from './styled'

interface IFieldCreate {
  event: string
  onSubmit: (key: null) => void
  onCancel: (key: null) => void
}

export const FieldCreate: React.FC<IFieldCreate> = memo(({ onSubmit, onCancel }) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Header>
        <Button onClick={() => { onCancel(null) }}>
          {t('words.cancel')}
        </Button>
        <Title>
          {t('fields.create.title')}
        </Title>
        <Button theme='primary' onClick={() => { onSubmit(null) }}>
          {t('words.add')}
        </Button>
      </Header>
      <Note>
        {t('fields.text.select')}
      </Note>
    </Wrapper>
  )
})
