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
  token?: string | null
  lng?: string
  redirect?: string | null
}

declare type TCookies = TLocalStorage

declare type TSocketChange = {
  id: string
  type: 'create' | 'update' | 'delete'
  name: string
  data: object
}
