import { getElement } from './helpers.js'

export function reverseHandler() {
  const input = getElement('#string')
  const btn = getElement('#reverse-btn')
  const output = getElement('#reverse-output')

  btn.addEventListener('click', () => {
    const { value } = input
    if (value === "") {
      return
    }

    const reversedString = value.split('')
      .reverse()
      .join('')
      
    output.innerText = reversedString
  })



}