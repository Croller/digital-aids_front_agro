import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { type Feature } from '@turf/turf'
import {
  Wrapper,
} from './styled'

interface IField {
  feature: Feature
  onDelete: (id: string | number) => void
}

export const Field: React.FC<IField> = memo(({ feature, onDelete }) => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      {feature.properties?.DN}
    </Wrapper>
  )
})
