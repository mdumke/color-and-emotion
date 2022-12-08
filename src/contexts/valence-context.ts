import { contextManager } from '../../context-manager'
import { PaletteContext } from './palette-context'
import { ColorState } from '../types'
import { ui } from '../ui'

class ValenceContext {
  constructor (private state: ColorState) {}

  enter () {
    ui.showValence()
    setTimeout(() => {
      contextManager.change(new PaletteContext(this.state))
    }, 2000)
  }

  exit () {
    ui.hideValence()
  }
}

export { ValenceContext }
