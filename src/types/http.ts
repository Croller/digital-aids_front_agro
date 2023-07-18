import { type TRule, type TUser } from './user'
import { type TField, type TGroupField } from './field'

export type TResponse = {
  data: TResponseData
}

export type TResponseData = {
  token?: string
  user?: TUser
  rules?: TRule[]
  error?: TError
  success?: boolean
  group_field?: TGroupField[]
  fields?: TField[]
  culture?: TEnum[]
}

export type TSocketSubscribe = TSocketChange & {
  data: null
}
