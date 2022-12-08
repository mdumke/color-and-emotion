import { contextManager } from '../../context-manager'
import { ArousalContext } from './arousal-context'
import { ColorState } from '../types'
import { ui } from '../ui'

class PresentationContext {
  constructor (private state: ColorState) {}

  enter () {
    ui.setScreenColor(this.state)
    setTimeout(() => {
      contextManager.change(new ArousalContext(this.state))
    }, 1000 * 15)
  }

  exit () {}
}

export { PresentationContext }
