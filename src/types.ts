import { PaletteContext } from './contexts/palette-context'
import { PresentationContext } from './contexts/presentation-context'
import { AdjustmentContext } from './contexts/adjustment-context'

export type Hue = 'blue' | 'green' | 'red'
export type Brightness = 'high' | 'medium' | 'low'
export type Saturation = 'high' | 'medium' | 'low'

export type ColorState = {
  h: Hue
  b: Brightness
  s: Saturation
}

export type Context = PaletteContext | AdjustmentContext | PresentationContext
