import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Field } from './components/Field'
import { type Feature } from '@turf/turf'
import {
  Wrapper,
  Header,
  Title,
  Note
} from './styled'

interface IFieldCreate {
  features: Feature[] | null
  event: string
  onSubmit: (key: null) => void
  onCancel: (key: null) => void
}

export const FieldCreate: React.FC<IFieldCreate> = memo(({
  features,
  onSubmit,
  onCancel
}) => {
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

      {!features
        ? (
          <Note>
            {t('fields.text.select')}
          </Note>
        )
        : features.map((item, i) => (
          <Field
            key={`_field_${i + 1}`}
            feature={item}
            onDelete={() => {}}
          />
        ))}
    </Wrapper>
  )
})
