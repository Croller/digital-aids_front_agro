import React, { memo } from 'react'
import { NoteSvg } from '@/assets/images'
import { useTranslation } from 'react-i18next'
import {
  Header,
  H1,
  NotesPlusSvg,
  Wrapper,
  Note,
  Description,
  NotesList,
  Date
} from './styled'

export const Notes: React.FC = memo(() => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <Header>
        <H1>{t('fields.notes.title')}</H1>
        <NotesPlusSvg />
      </Header>
      <NotesList>
        <Note>
          <Date>
            <NoteSvg />
            13 июня
          </Date>
          <Description>
            На севере ветром повалило дерево. Культура не пострадала, но надо убрать до 22 августа — мешает уборке.
          </Description>
        </Note>
        <Note>
          <Date>
            <NoteSvg />
            14 июня
          </Date>
          <Description>
            Сильные осадки и град, обработка отложена для наступления подходящей погоды.
          </Description>
        </Note>
      </NotesList>
    </Wrapper>
  )
})
