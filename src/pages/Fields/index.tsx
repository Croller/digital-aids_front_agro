import React, { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { EventSelect } from './components/EventSelect'
import { FieldCreate } from './components/FieldCreate'
import { layersConfig } from './constants'
import { arrExludeExist } from '@/components/ui/MapBox/utils/arrExludeExist'
import { toggleLayer } from '@/components/ui/MapBox/utils/setLayer'
import { type TLayer, type TMapClick } from '@/components/ui/MapBox/type'
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
  const [selected, setSelected] = useState<any[] | null>(null)
  const [layers, setLayers] = useState<TLayer[]>(layersConfig)

  const onSelectEvent = (key: string): void => {
    setEventCreate(key)

    if (key === 'select') {
      setLayers(toggleLayer(layers, 'vectorLine_layer'))
    }
  }

  const onClickMap = (obj: TMapClick): void => {
    const { features } = obj

    features && setSelected((curr) => {
      const arr = arrExludeExist(features, curr ?? [], keyID)
      return arr.length !== 0 ? arr : null
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
              <EventSelect onSelect={onSelectEvent}/>
            </>
          )
          : (
            <FieldCreate
              features={selected}
              event={eventCreate}
              onSubmit={() => { setEventCreate(null) }}
              onCancel={() => { setEventCreate(null) }}
            />
          )}
      </LeftPanel>
      <MapPanel>
        <MapboxStyled
          defaultStyle="googleSat"
          layers={layers}
          selectKey={keyID}
          selected={selected}
          onClick={onClickMap}
        />
      </MapPanel>
    </Wrapper>
  )
})
