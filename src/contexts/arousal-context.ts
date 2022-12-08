import { contextManager } from '../../context-manager'
import { ValenceContext } from './valence-context'
import { ColorState } from '../types'
import { ui } from '../ui'

class ArousalContext {
  constructor (private state: ColorState) {}

  enter () {
    ui.showArousal()
    this.registerListener()
  }

  exit () {
    ui.hideArousal()
    this.removeListener()
  }

  handleKeyUp = (e: KeyboardEvent) => {
    if (!['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(e.key)) {
      return
    }
    contextManager.change(new ValenceContext(this.state))
  }

  registerListener () {
    document.addEventListener('keyup', this.handleKeyUp)
  }

  removeListener () {
    document.removeEventListener('keyup', this.handleKeyUp)
  }
}

export { ArousalContext }
