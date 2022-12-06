import { State, Hue, Brightness, Saturation } from './types'
import { updateColors, h1, h2, h3, b1, b2, b3, s1, s2, s3 } from './ui'

let state: State = {
  h: 'blue',
  b: 'high',
  s: 'high'
}

updateColors(state)

const setHue = (hue: Hue) => () => {
  state = { ...state, h: hue }
  updateColors(state)
}

const setBright = (brightness: Brightness) => () => {
  state = { ...state, b: brightness }
  updateColors(state)
}

const setSat = (saturation: Saturation) => () => {
  state = { ...state, s: saturation }
  updateColors(state)
}

const main = () => {
  registerListeners()
}

const registerListeners = () => {
  h1.addEventListener('click', setHue('blue'))
  h2.addEventListener('click', setHue('green'))
  h3.addEventListener('click', setHue('red'))

  b1.addEventListener('click', setBright('high'))
  b2.addEventListener('click', setBright('medium'))
  b3.addEventListener('click', setBright('low'))

  s1.addEventListener('click', setSat('high'))
  s2.addEventListener('click', setSat('medium'))
  s3.addEventListener('click', setSat('low'))
}

document.addEventListener('DOMContentLoaded', main, { once: true })
