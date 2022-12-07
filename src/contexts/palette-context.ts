import { ColorState } from '../types'
import { ui, updateColors } from '../ui'
import { AdjustmentContext } from './adjustment-context'
import { contextManager } from '../../context-manager'
class PaletteContext {
  constructor (private state: ColorState) {}

  enter () {
    this.registerListeners()
    updateColors(this.state)
    ui.showControls()
  }

  exit () {
    this.removeListeners()
  }

  updateState (nextState: ColorState) {
    this.state = { ...nextState }
    updateColors(this.state)
  }

  setHueBlue = () => this.updateState({ ...this.state, h: 'blue' })
  setHueGreen = () => this.updateState({ ...this.state, h: 'green' })
  setHueRed = () => this.updateState({ ...this.state, h: 'red' })
  setBrightnessHigh = () => this.updateState({ ...this.state, b: 'high' })
  setBrightnessMedium = () => this.updateState({ ...this.state, b: 'medium' })
  setBrightnessLow = () => this.updateState({ ...this.state, b: 'low' })
  setSaturationHigh = () => this.updateState({ ...this.state, s: 'high' })
  setSaturationMedium = () => this.updateState({ ...this.state, s: 'medium' })
  setSaturationLow = () => this.updateState({ ...this.state, s: 'low' })

  startTrial = () => {
    contextManager.change(new AdjustmentContext(this.state))
  }

  registerListeners () {
    ui.h1.addEventListener('click', this.setHueBlue)
    ui.h2.addEventListener('click', this.setHueGreen)
    ui.h3.addEventListener('click', this.setHueRed)
    ui.b1.addEventListener('click', this.setBrightnessHigh)
    ui.b2.addEventListener('click', this.setBrightnessMedium)
    ui.b3.addEventListener('click', this.setBrightnessLow)
    ui.s1.addEventListener('click', this.setSaturationHigh)
    ui.s2.addEventListener('click', this.setSaturationMedium)
    ui.s3.addEventListener('click', this.setSaturationLow)
    ui.trialBtn.addEventListener('click', this.startTrial)
  }

  removeListeners () {
    ui.h1.removeEventListener('click', this.setHueBlue)
    ui.h2.removeEventListener('click', this.setHueGreen)
    ui.h3.removeEventListener('click', this.setHueRed)
    ui.b1.removeEventListener('click', this.setBrightnessHigh)
    ui.b2.removeEventListener('click', this.setBrightnessMedium)
    ui.b3.removeEventListener('click', this.setBrightnessLow)
    ui.s1.removeEventListener('click', this.setSaturationHigh)
    ui.s2.removeEventListener('click', this.setSaturationMedium)
    ui.s3.removeEventListener('click', this.setSaturationLow)
    ui.trialBtn.removeEventListener('click', this.startTrial)
  }
}

export { PaletteContext }
