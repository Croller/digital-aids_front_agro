declare type TError = {
  key: string
  name: string
  desc: string | null
}

declare type TDictionary = {
  id: number
  name: string
}

declare type TEnum = {
  key: string
  name: string
}

declare type TLocalStorage = {
  cr_token?: string | null
  cr_lng?: string
  cr_redirect?: string | null
}

declare type TCookies = TLocalStorage

declare type TSocketChange = {
  id: string
  type: 'create' | 'update' | 'delete'
  name: string
  data: object
}
