import { contextManager } from '../../context-manager'
import { PaletteContext } from './palette-context'
import { ColorState } from '../types'
import { ui } from '../ui'

class PresentationContext {
  constructor (private state: ColorState) {}

  enter () {
    ui.setScreenColor(this.state)
    setTimeout(() => {
      contextManager.change(new PaletteContext(this.state))
    }, 2000)
  }

  exit () {}
}

export { PresentationContext }
