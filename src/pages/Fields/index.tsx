import React, { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { EventSelect } from './components/EventSelect'
import { FieldCreate } from './components/FieldCreate'
import { layers } from './constants'
import { type TMapClick } from '@/components/ui/MapBox/type'
import { arrExludeExist } from '@/components/ui/MapBox/utils/arrExludeExist'
import {
  Wrapper,
  LeftPanel,
  Header,
  Title,
  Note,
  MapPanel,
  MapboxStyled
} from './styled'

export default memo((): React.ReactElement => {
  const keyID = 'DN'
  const { t } = useTranslation()
  const [eventCreate, setEventCreate] = useState<string | null>(null)
  const [selected, setSelected] = useState<any[]>([])

  const handleOnClick = (obj: TMapClick): void => {
    const { features } = obj

    features && setSelected((curr) => {
      console.log(arrExludeExist(features, curr, keyID))

      return arrExludeExist(features, curr, keyID)
    })
  }

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
      <MapPanel>
        <MapboxStyled
          configStyle="googleSat"
          layers={layers}
          selectKey={keyID}
          selected={selected}
          onClick={handleOnClick}
        />
      </MapPanel>
    </Wrapper>
  )
})
