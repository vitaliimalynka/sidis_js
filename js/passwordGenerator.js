import { getElement } from './helpers.js'

const bigLetters = {
  start: 65,
  end: 90
}
const littleLetters = {
  start: 97,
  end: 122
}
const allowedSymbols = '!@#$%^&*()-_+=<>?'

const generateRandomChar = (start, end) => {
  return String.fromCharCode(start + Math.floor(Math.random() * (end - start + 1)))
}

const generateRandomSymbol = (symbols) => {
  return symbols.charAt(Math.floor(Math.random() * symbols.length))
}

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 10).toString();
}

export function passwordGenerator() {

  const btn = getElement('#generate-btn')
  const output = getElement('#password-output')
  
  btn.addEventListener('click', () => {
    const passwordLength = 8
    let password = ''
    const charGenerators = [
      () => generateRandomChar(bigLetters.start, bigLetters.end),
      () => generateRandomChar(littleLetters.start, littleLetters.end),
      () => generateRandomSymbol(allowedSymbols),
      () => generateRandomNumber(),
    ]

    const guaranteedChars = charGenerators.map(fn => fn())
    password = guaranteedChars.join('')
  
    while (password.length < passwordLength) {
      const randomGenerator = charGenerators[Math.floor(Math.random() * charGenerators.length)]
      password += randomGenerator()
    }
  
    password = password.split('').sort(() => Math.random() - 0.5).join('')
  
    output.innerText = password
  })
}
  
