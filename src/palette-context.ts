import { PaletteState, Hue, Brightness, Saturation } from './types'
import { ui, updateColors } from './ui'

class PaletteContext {
  state: PaletteState = { h: 'blue', b: 'high', s: 'high' }

  enter (state: PaletteState) {
    this.state = state
    this.registerListeners()
    updateColors(this.state)
  }

  exit () {
    this.removeListeners()
  }

  updateState (nextState: PaletteState) {
    this.state = { ...nextState }
    updateColors(this.state)
  }

  setBrightness (brightness: Brightness) {
    return () => this.updateState({ ...this.state, b: brightness })
  }

  setSaturation (saturation: Saturation) {
    return () => this.updateState({ ...this.state, s: saturation })
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
  }
}

export { PaletteContext }
