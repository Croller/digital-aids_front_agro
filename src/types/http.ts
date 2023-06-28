import { type TRule, type TUser } from './user'

export type TResponse = {
  data: TResponseData
}

export type TResponseData = {
  token?: string
  user?: TUser
  rules?: TRule[]
  error?: TError
  success?: boolean
}

export type TSocketSubscribe = TSocketChange & {
  data: {
  }
}
