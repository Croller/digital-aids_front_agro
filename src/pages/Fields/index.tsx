import React, { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { EventSelect } from './components/EventSelect'
import {
  Wrapper,
  LeftPanel,
  Header,
  Title,
  Note,
  MapboxStyled
} from './styled'
import { FieldCreate } from './components/FieldCreate'

export default memo((): React.ReactElement => {
  const { t } = useTranslation()
  const [eventCreate, setEventCreate] = useState<string | null>(null)

  return (
    <Wrapper>
      <LeftPanel>
        {!eventCreate
          ? (
            <>
              <Header>
                <Title>
                  {t('layout.fields')}
                </Title>
                <Button theme='primary'>
                  {t('words.add')}
                </Button>
              </Header>
              <Note>
                {t('fields.text.create')}
              </Note>
              <EventSelect onSelect={setEventCreate}/>
            </>
          )
          : (
            <FieldCreate
              event={eventCreate}
              onSubmit={() => { setEventCreate(null) }}
              onCancel={() => { setEventCreate(null) }}
            />
          )}
      </LeftPanel>
      <MapboxStyled height='calc(100vh - .5rem)' layers={[]}/>
    </Wrapper>
  )
})
