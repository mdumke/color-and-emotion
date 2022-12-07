import { ColorState } from './types'
import { contextManager } from '../context-manager'
import { PaletteContext } from './palette-context'
import { ui } from './ui'

class AdjustmentContext {
  constructor (private state: ColorState) {}

  enter () {
    ui.hideControls()
    setTimeout(() => {
      contextManager.change(new PaletteContext(this.state))
    }, 2000)
  }

  exit () {}
}

export { AdjustmentContext }
