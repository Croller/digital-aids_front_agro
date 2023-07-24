import { request } from '@/services/request'
import { type WeatherStore } from '@/stores/weatherStore'
import { type TResponseData } from '@/types/http'

const APP = process.env.APP_NAME ?? ''

export class WeatherServices {
  weather: WeatherStore

  constructor (weather: WeatherStore) {
    this.weather = weather
  }

  fetchCurrent = async (id: string, x: number, y: number): Promise<void> => {
    this.weather.setLoading(true)
    const resp: TResponseData = await request.get(`${APP}/weather/current`, { params: { x, y } })
    this.weather.setResponse({ id, weather_current: resp.weather_current ?? null })
    this.weather.setLoading(false)
  }
}
