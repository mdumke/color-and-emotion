import { PaletteContext } from './palette-context'

const main = () => {
  new PaletteContext().enter({
    h: 'blue',
    b: 'high',
    s: 'high'
  })
}

document.addEventListener('DOMContentLoaded', main, { once: true })
