import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { PALETTE } from '@/styles/constants'
import { TargetSvg, ViewSvg } from '@/assets/images'
import {
  H1,
  Wrapper,
  Service,
  Name,
  Description,
  ServicesList,
  Row,
  ColoredBugSvg
} from './styled'

export const Services: React.FC = memo(() => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <H1>{t('fields.services.title')}</H1>
      <ServicesList>
        <Row>
          <Service>
            <ColoredBugSvg color={PALETTE.light_green} />
            <Name>{t('fields.services.pest.name')}</Name>
            <Description>
              {t('fields.services.pest.description')}
            </Description>
          </Service>
          <Service>
            <TargetSvg />
            <Name>{t('fields.services.fertilizer.name')}</Name>
            <Description>
              {t('fields.services.fertilizer.description')}
            </Description>
          </Service>
        </Row>
        <Row>
          <Service>
            <ViewSvg />
            <Name>{t('fields.services.inspection.name')}</Name>
            <Description>
              {t('fields.services.inspection.description')}
            </Description>
          </Service>
          <Service>
            <ColoredBugSvg color={PALETTE.black} />
            <Name>{t('fields.services.secure.name')}</Name>
            <Description>
              {t('fields.services.secure.description')}
            </Description>
          </Service>
        </Row>
      </ServicesList>
    </Wrapper>
  )
})
