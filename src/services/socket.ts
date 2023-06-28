import { io } from 'socket.io-client'
import { getApiUrl } from '@/utils/url'

export class SocketServices {
  socket: any = null
  port = process.env.SERVER_PORT ?? ''
  app = process.env.APP_NAME ?? ''
  isDev = process.env.NODE_ENV === 'development'
  url = this.isDev ? `http://0.0.0.0:${this.port}` : getApiUrl()

  create = (id: string = 'test'): void => {
    this.socket = io(this.url, {
      path: `/socket/${this.app}/socket.io`
      // extraHeaders: {
      //   Authorization: 'Bearer authorization_token_here'
      // }
    })
    if (this.socket && id) {
      this.socket.emit('join', id)
      console.log(`Socket join ${id}`)
    }
  }

  close = (): void => {
    if (!this.socket) return
    this.socket.disconnect()
    console.log('Socket disconnect')
  }

  subscribe = (cb: any): void => {
    if (!this.socket) return
    this.socket.on('change', (msg: TSocketChange) => cb(msg))
  }

  emit = (obj = null, method = 'change'): void => {
    if (!this.socket) return
    this.socket.emit(method, obj)
  }
}
