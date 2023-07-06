import React, { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { EventSelect } from './components/EventSelect'
import { FieldCreate } from './components/FieldCreate'
import { layersConfig } from './constants'
import { arrExludeExist } from '@/components/ui/MapBox/utils/arrExludeExist'
import { toggleLayer } from '@/components/ui/MapBox/utils/setLayer'
import { type TLayer, type TMapClick } from '@/components/ui/MapBox/type'
import { type TPolygon } from '@/types/geojson'
import {
  Wrapper,
  LeftPanel,
  Block,
  Header,
  Title,
  Note,
  MapPanel,
  MapboxStyled
} from './styled'
import { Status } from './components/Status'
import { FieldsGroup } from './components/FieldsGroup'

export default memo((): React.ReactElement => {
  const keyID = 'DN'
  const { t } = useTranslation()
  const [eventCreate, setEventCreate] = useState<string | null>(null)
  const [selected, setSelected] = useState<any[] | null>(null)
  const [layers, setLayers] = useState<TLayer[]>(layersConfig)
  const [fields, setFields] = useState<TPolygon[] | null>(null)

  const editSelected = (features: TPolygon[]): void => setSelected((curr) => {
    const arr = arrExludeExist(features, curr ?? [], keyID)
    return arr.length !== 0 ? arr : null
  })

  const onSelectEvent = (key: string): void => {
    key === 'select' && setLayers(toggleLayer(layers, 'vectorLine_layer'))
    setEventCreate(key)
  }

  const onClickMap = (obj: TMapClick): void => {
    const features = obj.features as TPolygon[]
    features && editSelected(features)
  }

  const onSave = (): void => {
    setFields(selected)
    setSelected(null)
    setEventCreate(null)
    setLayers(toggleLayer(layers, 'vectorLine_layer', false))
  }

  const onCancel = (): void => {
    setFields(null) // set store if exist
    setSelected(null)
    setEventCreate(null)
    setLayers(toggleLayer(layers, 'vectorLine_layer', false))
  }

  const onDelete = (feature: TPolygon): void => editSelected([feature])

  const onCreateNew = (): void => {
    setFields(null)
  }

  return (
    <Wrapper>
      <LeftPanel existFields={!!fields}>
        {!eventCreate
          ? (
            <>
              <Block>
                <Header>
                  <Title>
                    {t('layout.fields')}
                  </Title>
                  {fields && (
                    <Button theme='primary' onClick={onCreateNew}>
                      {t('form.controls.add')}
                    </Button>
                  )}
                </Header>
                {!fields
                  ? (
                    <>
                      <Note>
                        {t('fields.text.create')}
                      </Note>
                      <EventSelect onSelect={onSelectEvent}/>
                    </>
                  )
                  : (
                    <Status features={fields ?? []} />
                  )}
              </Block>
              {fields && (
                <FieldsGroup features={fields} />
              )}
            </>
          )
          : (
            <FieldCreate
              features={selected}
              event={eventCreate}
              onSave={onSave}
              onCancel={onCancel}
              onDelete={onDelete}
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
