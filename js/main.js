import { burgerHandler } from './burgerHandler.js'
import { reverseHandler } from './reverseHandler.js'
import { passwordGenerator } from './passwordGenerator.js'

window.addEventListener('DOMContentLoaded', init)

function init() {
  burgerHandler()
  reverseHandler()
  passwordGenerator()
}