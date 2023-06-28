import path from 'path'
import { config } from 'dotenv'
import express, { type Express } from 'express'

config()

const APP = process.env.APP_NAME ?? ''
const PORT = process.env.LOCAL_PORT ?? ''
const app: Express = express()

app.use(`/${APP}`, express.static('dist'))
app.use(`/${APP}`, (_, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})
app.listen(process.env.LOCAL_PORT)

console.log(`Client listen on port: ${PORT}`)
