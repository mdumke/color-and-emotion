import { contextManager } from '../../context-manager'
import { PaletteContext } from './palette-context'
import { ColorState } from '../types'
import { ui } from '../ui'

class ValenceContext {
  constructor (private state: ColorState) {}

  enter () {
    ui.showValence()
    this.registerListener()
  }

  exit () {
    ui.hideValence()
    this.removeListener()
  }

  handleKeyUp = (e: KeyboardEvent) => {
    if (!['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
      return
    }
    contextManager.change(new PaletteContext(this.state))
  }

  registerListener () {
    document.addEventListener('keyup', this.handleKeyUp)
  }

  removeListener () {
    document.removeEventListener('keyup', this.handleKeyUp)
  }
}

export { ValenceContext }
