import { contextManager } from '../../context-manager'
import { ValenceContext } from './valence-context'
import { ColorState } from '../types'
import { ui } from '../ui'

class ArousalContext {
  constructor (private state: ColorState) {}

  enter () {
    ui.showArousal()
    setTimeout(() => {
      contextManager.change(new ValenceContext(this.state))
    }, 2000)
  }

  exit () {
    ui.hideArousal()
  }
}

export { ArousalContext }
