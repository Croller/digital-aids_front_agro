export const getDicValue = (key: string, arr: TEnum[]): string => {
  const obj = arr.find(f => f.key === key)
  return obj?.name ?? ''
}
