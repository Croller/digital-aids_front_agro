import Cookies from 'js-cookie'

export const removeCookies = (key: string): void => { Cookies.remove(key) }

export const setCookies = (obj: TCookies): void => {
  const keys = Object.keys(obj) as Array<keyof TCookies>
  keys.map((key: keyof TCookies) => {
    if (!obj[key]) {
      removeCookies(key)
      return key
    }
    Cookies.set(key, obj[key] ?? '')
    return key
  })
}

export const getCookies = (value: string): string | null => Cookies.get(value) ?? null
