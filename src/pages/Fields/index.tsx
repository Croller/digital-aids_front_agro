import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { EventSelect } from './components/EventSelect'
import { FieldCreate } from './components/FieldCreate'
import { layersConfig } from './constants'
import { arrExludeExist } from '@/components/ui/MapBox/utils/arrExludeExist'
import { toggleLayer } from '@/components/ui/MapBox/utils/setLayer'
import { Status } from './components/Status'
import { FieldsGroup } from './components/FieldsGroup'
import { useStores } from '@/stores'
import { area } from '@turf/turf'
import { observer } from 'mobx-react'
import * as turf from '@turf/turf'
import { type TLayer, type TMapClick } from '@/components/ui/MapBox/type'
import { type TFeature } from '@/types/geojson'
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

export default observer((): React.ReactElement => {
  const keyID = 'DN'
  const { t } = useTranslation()
  const { fieldStore: { fields, group_field, create }, dictionaryStore: { culture } } = useStores()
  const [eventCreate, setEventCreate] = useState<string | null>(null)
  const [selected, setSelected] = useState<any[] | null>(null)
  const [layers, setLayers] = useState<TLayer[]>(layersConfig)
  const [isAdd, setIsAdd] = useState<boolean>(false)

  const editSelected = (features: TFeature[]): void => setSelected((curr) => {
    const edited = features.map((f, i) => ({
      ...f,
      properties: {
        ...f.properties,
        name: `Поле ${i + 1}`,
        culture_key: 'corn',
        culture_desc: 'Крахмалистая',
        square: (area(f) * 0.0001)
      }
    }))
    const arr = arrExludeExist(edited, curr ?? [], keyID)
    return arr.length !== 0 ? arr : null
  })

  const onSelectEvent = (key: string): void => {
    key === 'select' && setLayers(toggleLayer(layers, 'vectorLine_layer'))
    setEventCreate(key)
  }

  const onClickMap = (obj: TMapClick): void => {
    const features = obj.features as TFeature[]
    features && editSelected(features)
  }

  const onSave = (): void => {
    // setNewFields(selected)
    selected && create(selected)
    setIsAdd(false)
    setSelected(null)
    setEventCreate(null)
    setLayers(toggleLayer(layers, 'vectorLine_layer', false))
  }

  const onCancel = (): void => {
    setIsAdd(false)
    setSelected(null)
    setEventCreate(null)
    setLayers(toggleLayer(layers, 'vectorLine_layer', false))
  }

  const onDelete = (feature: TFeature): void => editSelected([feature])

  useEffect(() => {
    if (fields) {
      setLayers(layers.map((l) => {
        if (l.layer.id === 'fieldLine_layer' && l.source) {
          return {
            ...l,
            source: {
              ...l.source,
              data: turf.featureCollection(fields)
            }
          }
        }
        return l
      }))
    }
  }, [fields])

  return (
    <Wrapper>
      <LeftPanel existFields={!!fields && !isAdd}>
        {!eventCreate
          ? (
            <>
              <Block>
                <Header>
                  <Title>
                    {t('layout.fields')}
                  </Title>
                  {fields && (
                    <Button theme='primary' onClick={() => setIsAdd(!isAdd)}>
                      {t(`form.controls.${isAdd ? 'cancel' : 'add'}`)}
                    </Button>
                  )}
                </Header>
                {!fields || isAdd
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
              {!isAdd && fields && culture && group_field?.map((group, g) => (
                <FieldsGroup
                  key={`_group_${g + 1}`}
                  culture={culture}
                  group={group}
                  features={fields}
                />
              ))}
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
          zoomTo={fields}
          onClick={onClickMap}
        />
      </MapPanel>
    </Wrapper>
  )
})
