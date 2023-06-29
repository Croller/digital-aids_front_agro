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

export const items: { key: string, icon: React.ReactElement, path: string }[] = [
  {
    key: 'summary',
    icon: <BoltSvg />,
    path: '/summary'
  },
  {
    key: 'fields',
    icon: <FieldsSvg />,
    path: '/fields'
  },
  {
    key: 'rotation',
    icon: <RotateSvg />,
    path: '/rotation'
  },
  {
    key: 'services',
    icon: <ServicesSvg />,
    path: '/services'
  },
  {
    key: 'reports',
    icon: <ReportSvg />,
    path: '/reports'
  },
  {
    key: 'telemetry',
    icon: <TelemetrySvg />,
    path: '/telemetry'
  },
  {
    key: 'weather',
    icon: <WeatherSvg />,
    path: '/weather'
  },
  {
    key: 'base',
    icon: <BookSvg />,
    path: '/base'
  }
]
