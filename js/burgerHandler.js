import { getElement } from './helpers.js'

export function burgerHandler() {
  const burgerBtn = getElement('.burger-menu')
  const nav = getElement('.nav')
  const { classList } = nav
  const body = getElement('body')

  const bodyBurgerListener = ({target}) => {
    if(target.closest('.nav') || target.closest('.burger-menu')) return
    classList.add('hidden')
    body.removeEventListener('click', bodyBurgerListener)
  }

  burgerBtn.addEventListener('click', () => {
    classList.toggle('hidden')

    if(classList.contains('hidden')) {
      body.removeEventListener('click', bodyBurgerListener)
    } else {
      body.addEventListener('click', bodyBurgerListener)
    }
  })
}