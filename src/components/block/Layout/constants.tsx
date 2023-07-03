import React from 'react'
import {
  BoltSvg,
  WeatherSvg,
  ReportSvg,
  RotateSvg,
  ServicesSvg,
  TelemetrySvg,
  FieldsSvg,
  BookSvg
} from '@/assets/images'

const APP = process.env.APP_NAME ?? ''

export const items: { key: string, icon: React.ReactElement, path: string }[] = [
  {
    key: 'summary',
    icon: <BoltSvg />,
    path: `/${APP}/summary`
  },
  {
    key: 'fields',
    icon: <FieldsSvg />,
    path: `/${APP}/fields`
  },
  {
    key: 'rotation',
    icon: <RotateSvg />,
    path: `/${APP}/rotation`
  },
  {
    key: 'services',
    icon: <ServicesSvg />,
    path: `/${APP}/services`
  },
  {
    key: 'reports',
    icon: <ReportSvg />,
    path: `/${APP}/reports`
  },
  {
    key: 'telemetry',
    icon: <TelemetrySvg />,
    path: `/${APP}/telemetry`
  },
  {
    key: 'weather',
    icon: <WeatherSvg />,
    path: `/${APP}/weather`
  },
  {
    key: 'base',
    icon: <BookSvg />,
    path: `/${APP}/base`
  }
]
