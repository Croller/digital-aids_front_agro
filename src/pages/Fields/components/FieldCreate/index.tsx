import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { Field } from './components/Field'
import { type TPolygon } from '@/types/geojson'
import {
  Wrapper,
  Header,
  Title,
  Content,
  Note
} from './styled'

interface IFieldCreate {
  features: TPolygon[] | null
  event: string
  onSave: () => void
  onCancel: (key: null) => void
  onDelete: (feature: TPolygon) => void
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
          {t('words.cancel')}
        </Button>
        <Title>
          {t('fields.create.title')}
        </Title>
        <Button theme='primary' onClick={onSave}>
          {t('words.add')}
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
              feature={item}
              onChange={() => {}}
              onDelete={onDelete}
            />
          ))}
      </Content>
    </Wrapper>
  )
})
