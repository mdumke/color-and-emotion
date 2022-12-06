import { State, Hue, Brightness, Saturation } from './types'
import { getChromaticColor } from './colors'

const screen = document.querySelector('#screen') as HTMLDivElement
const controls = document.querySelector('#controls') as HTMLDivElement

export const updateColors = ({ h, b, s }: State) => {
  if (s === null) return

  screen.style.backgroundColor = getChromaticColor(h, b, s)
  updateHueControls(b, s)
  updateBrightnessControls(h, s)
  updateSaturationControls(h, b)
}

const updateHueControls = (b: Brightness, s: Saturation) => {
  const h1 = controls.querySelector('#h-1') as HTMLDivElement
  const h2 = controls.querySelector('#h-2') as HTMLDivElement
  const h3 = controls.querySelector('#h-3') as HTMLDivElement

  h1.style.backgroundColor = getChromaticColor('blue', b, s)
  h2.style.backgroundColor = getChromaticColor('green', b, s)
  h3.style.backgroundColor = getChromaticColor('red', b, s)
}

const updateBrightnessControls = (h: Hue, s: Saturation) => {
  const b1 = controls.querySelector('#b-1') as HTMLDivElement
  const b2 = controls.querySelector('#b-2') as HTMLDivElement
  const b3 = controls.querySelector('#b-3') as HTMLDivElement

  b1.style.backgroundColor = getChromaticColor(h, 'high', s)
  b2.style.backgroundColor = getChromaticColor(h, 'medium', s)
  b3.style.backgroundColor = getChromaticColor(h, 'low', s)
}

const updateSaturationControls = (h: Hue, b: Brightness) => {
  const s1 = controls.querySelector('#s-1') as HTMLDivElement
  const s2 = controls.querySelector('#s-2') as HTMLDivElement
  const s3 = controls.querySelector('#s-3') as HTMLDivElement

  s1.style.backgroundColor = getChromaticColor(h, b, 'high')
  s2.style.backgroundColor = getChromaticColor(h, b, 'medium')
  s3.style.backgroundColor = getChromaticColor(h, b, 'low')
}