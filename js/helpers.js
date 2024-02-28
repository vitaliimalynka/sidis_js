const checkResult = (result, selector) => {
  if (!result ) {
      console.warn(`Can't found element with selector "${selector}"`)
  } else {
      return result
  }
}

export const getElement = selector => {
  return checkResult(document.querySelector(selector), selector)
}
