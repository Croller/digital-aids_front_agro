const key = (process.env.HOST ?? '').replace('.com', '')

export const removeLocalStorage = (): void => { localStorage.removeItem(key) }

export const setLocalStorage = (value: any): void => {
  const local = getLocalStorage()
  localStorage.setItem(key, JSON.stringify({ ...local, ...value }))
}

export const getLocalStorage = (): any | null => {
  const local = localStorage.getItem(key)
  return local ? JSON.parse(local) : null
}
