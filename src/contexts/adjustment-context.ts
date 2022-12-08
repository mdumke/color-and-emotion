import { ColorState } from '../types'
import { contextManager } from '../../context-manager'
import { PresentationContext } from './presentation-context'
import { ui } from '../ui'

class AdjustmentContext {
  constructor (private state: ColorState) {}

  enter () {
    ui.hideControls()
    ui.setScreenToWhite()
    setTimeout(() => {
      contextManager.change(new PresentationContext(this.state))
    }, 2000)
  }

  exit () {}
}

export { AdjustmentContext }
