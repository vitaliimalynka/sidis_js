import { burgerHandler } from './burgerHandler.js'
import { reverseHandler } from './reverseHandler.js'

window.addEventListener('DOMContentLoaded', init)

function init() {
  burgerHandler()
  reverseHandler()
}