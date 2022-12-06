export type Hue = 'blue' | 'green' | 'red'
export type Brightness = 'high' | 'medium' | 'low'
export type Saturation = 'high' | 'medium' | 'low'

export type State = {
  h: Hue
  b: Brightness
  s: Saturation | null
}
