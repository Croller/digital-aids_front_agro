export type TGroupField = {
  id?: string
  user_id?: string
  name: string
  is_deleted?: boolean
}

export type TFieldCreate = {
  name: string
  culture_key: string
  culture_desc: string
  square: number
}

export type TField = TFieldCreate & {
  id: string
  group_id: string
  ndvi: number
  geom: any
  is_deleted: string
}
