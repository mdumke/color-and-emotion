import { State, Hue, Brightness, Saturation } from './types'
import { getChromaticColor } from './colors'

const screen = document.querySelector('#screen') as HTMLDivElement
const controls = document.querySelector('#controls') as HTMLDivElement

export const ui = {
  h1: controls.querySelector('#h-1') as HTMLDivElement,
  h2: controls.querySelector('#h-2') as HTMLDivElement,
  h3: controls.querySelector('#h-3') as HTMLDivElement,
  b1: controls.querySelector('#b-1') as HTMLDivElement,
  b2: controls.querySelector('#b-2') as HTMLDivElement,
  b3: controls.querySelector('#b-3') as HTMLDivElement,
  s1: controls.querySelector('#s-1') as HTMLDivElement,
  s2: controls.querySelector('#s-2') as HTMLDivElement,
  s3: controls.querySelector('#s-3') as HTMLDivElement
}

export const updateColors = ({ h, b, s }: State) => {
  if (s === null) return

  screen.style.backgroundColor = getChromaticColor(h, b, s)
  updateHueControls(b, s)
  updateBrightnessControls(h, s)
  updateSaturationControls(h, b)
}

const updateHueControls = (b: Brightness, s: Saturation) => {
  ui.h1.style.backgroundColor = getChromaticColor('blue', b, s)
  ui.h2.style.backgroundColor = getChromaticColor('green', b, s)
  ui.h3.style.backgroundColor = getChromaticColor('red', b, s)
}

const updateBrightnessControls = (h: Hue, s: Saturation) => {
  ui.b1.style.backgroundColor = getChromaticColor(h, 'high', s)
  ui.b2.style.backgroundColor = getChromaticColor(h, 'medium', s)
  ui.b3.style.backgroundColor = getChromaticColor(h, 'low', s)
}

const updateSaturationControls = (h: Hue, b: Brightness) => {
  ui.s1.style.backgroundColor = getChromaticColor(h, b, 'high')
  ui.s2.style.backgroundColor = getChromaticColor(h, b, 'medium')
  ui.s3.style.backgroundColor = getChromaticColor(h, b, 'low')
}
