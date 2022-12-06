import chroma from 'chroma-js'
import { Hue, Brightness, Saturation } from './types'

const COLOR_DEFINITIONS = [
  [50.0, 2.31, 5.06],
  [50.0, 1.4, 5.06],
  [49.99, 0.48, 5.04],
  [34.99, 2.23, 5.07],
  [34.99, 1.39, 5.09],
  [34.95, 0.53, 5.07],
  [19.96, 2.34, 5.08],
  [19.89, 1.45, 4.99],
  [20.1, 0.52, 5.06],
  [50.03, 2.26, 2.63],
  [50.0, 1.39, 2.65],
  [50.01, 0.5, 2.61],
  [34.9, 2.29, 2.57],
  [34.99, 1.46, 2.66],
  [34.99, 0.56, 2.63],
  [20.19, 2.33, 2.48],
  [19.87, 1.21, 2.77],
  [19.91, 0.39, 2.75],
  [50.0, 2.31, 0.79],
  [50.01, 1.4, 0.72],
  [49.98, 0.5, 0.7],
  [34.98, 2.35, 0.78],
  [35.02, 1.43, 0.74],
  [34.94, 0.49, 0.66],
  [20.01, 2.42, 0.75],
  [19.94, 1.31, 0.41],
  [20.24, 0.43, 0.47]
]

const GRAY_SCALE = [
  [49.99, 0.02],
  [35.01, 0.05],
  [20.13, 0.08]
]

export const getChromaticColor = (
  hue: Hue,
  brightness: Brightness,
  saturation: Saturation
) => {
  const colId = ['blue', 'green', 'red'].indexOf(hue)
  const brtId = ['high', 'medium', 'low'].indexOf(brightness)
  const satId = ['high', 'medium', 'low'].indexOf(saturation)

  const [l, s, h] = COLOR_DEFINITIONS[colId * 9 + brtId * 3 + satId]
  return chroma.lch(l, l * s, radToDeg(h)).hex()
}

export const getGrayScale = (brightness: Brightness) => {
  const idx = ['high', 'medium', 'low'].indexOf(brightness)
  const [l, s] = GRAY_SCALE[idx]
  return chroma.lch(l, l * s, 0).hex()
}

const radToDeg = (rad: number) => (rad * 180) / Math.PI
