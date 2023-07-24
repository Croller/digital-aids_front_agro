import { makeAutoObservable } from 'mobx'
import { WeatherServices } from '@/services/weather'
import { type TResponseData } from '@/types/http'
import { type TOWCurrent } from '@/types/openweather'

type TCurrent = {
  id: string
  weather: TOWCurrent
}

export class WeatherStore {
  current: TCurrent[] = []
  loading: boolean = false

  weatherServices: WeatherServices

  constructor () {
    makeAutoObservable(this)
    this.weatherServices = new WeatherServices(this)
  }

  setLoading = (bool: boolean): void => {
    this.loading = bool
  }

  setResponse = (resp: TResponseData): void => {
    if (resp.weather_current) {
      this.current = [...(this.current ?? []), {
        id: resp.id ?? '',
        weather: resp.weather_current
      }]
    }
  }
}
