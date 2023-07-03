import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@/components/ui/Button'
import {
  Wrapper,
  LeftPanel,
  Header,
  Title,
  Note,
  MapboxStyled
} from './styled'
import { GearSvg } from '@/assets/images'

export default memo((): React.ReactElement => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <LeftPanel>
        <Header>
          <Title>
            {t('layout.summary')}
          </Title>
          <Button theme='link'>
            <GearSvg />
          </Button>
        </Header>
        <Note>
          {t('summary.text.create')}
        </Note>
      </LeftPanel>
      <MapboxStyled height='calc(100vh - .5rem)' layers={[]}/>
    </Wrapper>
  )
})
