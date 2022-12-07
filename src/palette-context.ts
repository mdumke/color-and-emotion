import { PaletteState, Hue, Brightness, Saturation } from './types'
import { ui, updateColors } from './ui'

class PaletteContext {
  state: PaletteState = { h: 'blue', b: 'high', s: 'high' }

  enter (state: PaletteState) {
    this.state = state
    this.registerListeners()
    updateColors(this.state)
  }

  exit () {}

  updateState (nextState: PaletteState) {
    this.state = { ...nextState }
    updateColors(this.state)
  }

  setHue (hue: Hue) {
    return () => this.updateState({ ...this.state, h: hue })
  }

  setBrightness (brightness: Brightness) {
    return () => this.updateState({ ...this.state, b: brightness })
  }

  setSaturation (saturation: Saturation) {
    return () => this.updateState({ ...this.state, s: saturation })
  }

  registerListeners () {
    ui.h1.addEventListener('click', this.setHue('blue'))
    ui.h2.addEventListener('click', this.setHue('green'))
    ui.h3.addEventListener('click', this.setHue('red'))

    ui.b1.addEventListener('click', this.setBrightness('high'))
    ui.b2.addEventListener('click', this.setBrightness('medium'))
    ui.b3.addEventListener('click', this.setBrightness('low'))

    ui.s1.addEventListener('click', this.setSaturation('high'))
    ui.s2.addEventListener('click', this.setSaturation('medium'))
    ui.s3.addEventListener('click', this.setSaturation('low'))
  }
}

export { PaletteContext }
