import { PaletteContext } from './contexts/palette-context'
import { contextManager } from '../context-manager'

const main = () => {
  contextManager.change(
    new PaletteContext({
      h: 'blue',
      b: 'medium',
      s: 'medium'
    })
  )
}

document.addEventListener('DOMContentLoaded', main, { once: true })
