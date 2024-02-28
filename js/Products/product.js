export class Product {
  #title
  #description
  #image
  #price

  constructor(product) {
    const {
      title,
      description,
      image,
      price
    } = product
    this.#title = title
    this.#description = description
    this.#image = image
    this.#price = price
  }

  createElement() {
    const div = document.createElement('div')
    div.original_obj = this

    div.classList.add('card')
    div.insertAdjacentHTML('beforeend',
      `<img class="card-img" src="${this.#image}" alt=${this.#title}" />`
    )
    div.insertAdjacentHTML('beforeend',
      `<div class="card-title">${this.#title}</div>`
    )
    div.insertAdjacentHTML('beforeend',
      `<div class="card-desc">${this.#description}</div>`
    )
    div.insertAdjacentHTML('beforeend',
      `<div class="card-price">$${this.#price}</div>`
    )

    return div
  }
}