import { type Map, type MapMouseEvent } from 'mapbox-gl'

export const getPixelColor = (map: Map, e: MapMouseEvent): string | undefined => {
  const canvas = map.getCanvas()
  const gl = canvas.getContext('webgl') ?? canvas.getContext('webgl2')

  if (gl) {
    const data = new Uint8Array(4)
    const canvasWidth = parseFloat(canvas.style.width)
    const canvasHeight = parseFloat(canvas.style.height)
    const canvasX = e.point.x
    const canvasY = e.point.y
    const bufferX = Number((gl.drawingBufferWidth / canvasWidth * canvasX).toFixed(0))
    const bufferY = Number((gl.drawingBufferHeight / canvasHeight * (canvasHeight - canvasY)).toFixed(0))

    gl.readPixels(
      bufferX,
      bufferY,
      1,
      1,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      data
    )
    const [r, g, b, a] = data
    const color = `rgba(${r}, ${g}, ${b}, ${a})`
    console.log(`Color by click: ${color}`)
    return color
  }
}
