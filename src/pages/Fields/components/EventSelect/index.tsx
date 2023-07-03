import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { FieldsDrawSvg, FieldsSelectSvg, FieldsUploadSvg, ShevronSvg } from '@/assets/images'
import {
  Wrapper,
  Item,
  Text
} from './styled'

const items: { key: string, icon: React.ReactElement }[] = [
  {
    key: 'select',
    icon: <FieldsSelectSvg />
  },
  {
    key: 'draw',
    icon: <FieldsDrawSvg />
  },
  {
    key: 'upload',
    icon: <FieldsUploadSvg />
  }
]

interface IEventSelect {
  onSelect: (key: string) => void
}

export const EventSelect: React.FC<IEventSelect> = memo(({ onSelect }) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      {items.map((item) => (
        <Item
          key={`_item_${item.key}`}
          onClick={() => { onSelect(item.key) }}
        >
          {item.icon}
          <Text>
            {t(`fields.create.${item.key}`)}
          </Text>
          <ShevronSvg />
        </Item>
      ))}
    </Wrapper>
  )
})
