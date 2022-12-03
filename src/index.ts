import { getChromaticColor, getGrayScale } from './colors'

const screen = document.querySelector('#screen') as HTMLDivElement

screen.style.backgroundColor = getChromaticColor('red', 'medium', 'low')
screen.style.backgroundColor = getGrayScale('low')
