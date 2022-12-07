import { PaletteContext } from './palette-context'

const main = () => {
  new PaletteContext().enter({
    h: 'blue',
    b: 'medium',
    s: 'medium'
  })
}

document.addEventListener('DOMContentLoaded', main, { once: true })
