const host = process.env.HOST ?? ''
const env = process.env.NODE_ENV ?? ''
const isDev = env === 'development'

export const getDomain = (): string => {
  if (isDev) return ''
  return `https://${host}`
}

export const getRedirectUrl = (key: 'auth'): string => {
  const localIP = process.env.LOCAL_IP ?? ''
  const services = {
    auth: process.env.AUTH_PORT ?? ''
  }

  return isDev ? `http://${localIP}:${services[key]}` : `https://${host}`
}
