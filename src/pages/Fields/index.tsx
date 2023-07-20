import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import { EventSelect } from './components/EventSelect'
import { FieldCreate } from './components/FieldCreate'
import { Timeline } from './components/Timeline'
import { InfoCard } from './components/InfoCard'
import { layersConfig } from './constants'
import { arrExludeExist } from '@/components/ui/MapBox/utils/arrExludeExist'
import { toggleLayer } from '@/components/ui/MapBox/utils/setLayer'
import { Status } from './components/Status'
import { FieldsGroup } from './components/FieldsGroup'
import { useStores } from '@/stores'
import { area } from '@turf/turf'
import { observer } from 'mobx-react'
import * as turf from '@turf/turf'
import { ChevronSvg } from '@/assets/images'
import { type TLayer, type TMapClick } from '@/components/ui/MapBox/type'
import { type TFeature } from '@/types/geojson'
import {
  Wrapper,
  LeftPanel,
  Block,
  Header,
  Title,
  Note,
  MapboxStyled,
  MapboxWrapper,
  Select,
  Calendar
} from './styled'

const mockedData: string[] = [
  '2023-07-04T13:02:25.195Z',
  '2023-07-05T13:02:25.195Z',
  '2023-07-06T13:02:25.195Z',
  '2023-07-09T13:02:25.195Z',
  '2023-07-10T13:02:25.195Z',
  '2023-07-11T13:02:25.195Z'
]

export default observer((): React.ReactElement => {
  const keyID = 'DN'
  const { t } = useTranslation()
  const { fieldStore: { fields, group_fields, create }, dictionaryStore: { culture } } = useStores()
  const [eventCreate, setEventCreate] = useState<string | null>(null)
  const [selected, setSelected] = useState<any[] | null>(null)
  const [layers, setLayers] = useState<TLayer[]>(layersConfig)
  const [isAdd, setIsAdd] = useState<boolean>(false)
  const [info, setInfo] = useState<TFeature | null>(null)

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

  const onAdd = (): void => {
    setInfo(null)
    setIsAdd(!isAdd)
  }

  const onSave = (): void => {
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

  const onSetInfo = (feature: TFeature): void => {
    setInfo(feature)
  }

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
                    <Button theme='primary' onClick={() => onAdd()}>
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
              {!isAdd && fields && culture && group_fields && group_fields.map((group, g) => (
                <FieldsGroup
                  key={`_group_${g + 1}`}
                  culture={culture}
                  selected={info}
                  group={group}
                  features={fields}
                  onClick={onSetInfo}
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
      <MapboxWrapper info={info}>
        <Select>
          NDVI
          <ChevronSvg />
        </Select>
        <Timeline dates={mockedData} selectDate={(value) => { console.log(value) }} />
        <Calendar />
        <MapboxStyled
          defaultStyle="googleSat"
          layers={layers}
          selectKey={keyID}
          selected={selected}
          zoomTo={(info && [info]) ?? fields}
          onClick={onClickMap}
          height={info ? '25rem' : '100%'}
        />
        {info && culture && (
          <InfoCard
            feature={info}
            culture={culture}
            onClose={() => setInfo(null)}
          />
        )}
      </MapboxWrapper>
    </Wrapper>
  )
})
