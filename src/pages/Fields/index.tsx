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

export default memo((): React.ReactElement => {
  const { t } = useTranslation()
  const [eventCreate, setEventCreate] = useState<string | null>(null)

  return (
    <Wrapper>
      <LeftPanel>
        <Header>
          <Title>
            {t('fields.title')}
          </Title>
          <Button theme='primary'>
            {t('words.add')}
          </Button>
        </Header>
        <Note>
          {t('fields.text.create')}
        </Note>
        <EventSelect onClick={setEventCreate}/>
      </LeftPanel>
      <MapboxStyled height='calc(100vh - .5rem)' layers={[]}/>
    </Wrapper>
  )
})
