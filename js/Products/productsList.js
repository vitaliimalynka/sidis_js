import { getElement } from '../helpers.js'
import { Product } from './product.js'

export class ProductList {
  #productList

  constructor(listId) {
    this.#productList = getElement(listId)
    this.#productList.addEventListener('click', ({ target }) => {
      const card = target.closest('.card')
      if (card) {
        console.dir(card.original_obj)
      }
    })
  }

  showProducts(item) {
    if (!(item instanceof Product)) {
      return
    }
    this.#productList.append(item.createElement())
  }
}