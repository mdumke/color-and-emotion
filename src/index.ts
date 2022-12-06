import { State } from './types'
import { updateColors } from './ui'

let state: State = {
  h: 'blue',
  b: 'high',
  s: 'medium'
}

updateColors(state)

const main = () => {
  registerListeners()
}

const registerListeners = () => {
  document.querySelector('#controls')?.addEventListener('click', el => {
    console.log(el)
  })
}

document.addEventListener('DOMContentLoaded', main, { once: true })
