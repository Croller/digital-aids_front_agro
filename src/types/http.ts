import { type TRule, type TUser } from './user'
import { type TGroupField } from './field'
import { type TFeature } from './geojson'

export type TResponse = {
  data: TResponseData
}

export type TResponseData = {
  token?: string
  user?: TUser
  rules?: TRule[]
  error?: TError
  success?: boolean
  group_fields?: TGroupField[]
  fields?: TFeature[]
  culture?: TEnum[]
}

export type TSocketSubscribe = TSocketChange & {
  data: null
}
