import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Field } from './components/Field'
import { type TFeature } from '@/types/geojson'
import {
  Wrapper,
  Header,
  Title,
  Content,
  Note
} from './styled'

interface IFieldCreate {
  features: TFeature[] | null
  event: string
  onSave: () => void
  onCancel: (key: null) => void
  onDelete: (feature: TFeature) => void
}

export const FieldCreate: React.FC<IFieldCreate> = memo(({
  features,
  onSave,
  onCancel,
  onDelete
}) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Header>
        <Button onClick={() => onCancel(null)}>
          {t('form.controls.cancel')}
        </Button>
        <Title>
          {t('fields.create.title')}
        </Title>
        <Button theme='primary' onClick={onSave}>
          {t('form.controls.add')}
        </Button>
      </Header>
      <Content>
        {!features
          ? (
            <Note>
              {t('fields.text.select')}
            </Note>
          )
          : features.map((item, i) => (
            <Field
              key={`_field_${i + 1}`}
              number={i + 1}
              feature={item}
              onChange={() => {}}
              onDelete={onDelete}
            />
          ))}
      </Content>
    </Wrapper>
  )
})
