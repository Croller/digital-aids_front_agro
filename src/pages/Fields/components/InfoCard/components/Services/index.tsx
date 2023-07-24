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
  IconWrapper,
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
            <IconWrapper>
              <ColoredBugSvg color={PALETTE.light_green} />
            </IconWrapper>
            <Name>
              {t('fields.services.pest.name')}
            </Name>
            <Description>
              {t('fields.services.pest.description')}
            </Description>
          </Service>
          <Service>
            <IconWrapper>
              <TargetSvg />
            </IconWrapper>
            <Name>
              {t('fields.services.fertilizer.name')}
            </Name>
            <Description>
              {t('fields.services.fertilizer.description')}
            </Description>
          </Service>
        </Row>
        <Row>
          <Service>
            <IconWrapper>
              <ViewSvg />
            </IconWrapper>
            <Name>
              {t('fields.services.inspection.name')}
            </Name>
            <Description>
              {t('fields.services.inspection.description')}
            </Description>
          </Service>
          <Service>
            <IconWrapper>
              <ColoredBugSvg color={PALETTE.black} />
            </IconWrapper>
            <Name>
              {t('fields.services.secure.name')}
            </Name>
            <Description>
              {t('fields.services.secure.description')}
            </Description>
          </Service>
        </Row>
      </ServicesList>
    </Wrapper>
  )
})
