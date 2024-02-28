import { burgerHandler } from './burgerHandler.js'
import { reverseHandler } from './reverseHandler.js'
import { passwordGenerator } from './passwordGenerator.js'
import { ProductList } from './Products/productsList.js'
import { dataService } from './dataService.js'
import { Product } from './Products/product.js'

window.addEventListener('DOMContentLoaded', init)

const getProducts = async () => {
  const data = await dataService.getData('products')
  if (data?.length > 0) {
    const products = data.map(item => new Product(item))
    return products
  }
  return null

}

async function init() {
  const productList = new ProductList('#products')

  burgerHandler()
  reverseHandler()
  passwordGenerator()
  
  const products = await getProducts()
  if (products?.length > 0) {
    products.forEach(item => productList.showProducts(item))
  }
}