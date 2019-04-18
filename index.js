#!/usr/bin/env node

const {
  decodeAlphabetDefault,
  encodeAlphabetDefault,
  decodeAlphabetAlt
} = require('./alphabets')


// get input from command line
async function getInput () {
  return [...process.argv].slice(3).join(' ')
}

// check that only two characters are present
async function validateInput (input) {
  const seen = new Set()
  let count = 0
  for (c of input) {
    if (seen.has(c)) continue
    
    seen.add(c)
    if (++count > 2) throw new Error('Input must contain only two character types')
  }
  return [[...seen], input]
}

// decode given a = something
function decode (a, text, alt) {
  const translatedInput = []
  for (c of text) {
    translatedInput.push(c === a ? 'a' : 'b')
  }
  const alphabet = alt ? decodeAlphabetAlt : decodeAlphabetDefault
  const output = []
  for (let i = 0; i < translatedInput.length; i += 5) {
    const chunk = translatedInput.slice(i, i + 5).join('')
    const decoded = alphabet[chunk] || '?'
    if (!decoded) return ''
    output.push(decoded)
  }
  return output.join('')
}

function getAB (input) {
  const [a, b, ...text] = input.split(' ')
  return [a, b, text.join('').toUpperCase()]
}

function encode ([a, b, text]) {
  if (a === 'b' || b === 'a') {
    throw new Error('setting a to b or b to a is too confusing')
  }
  const output = []
  for (let c of text) {
    const encoded = encodeAlphabetDefault[c]
    if (!encoded) continue
    output.push(encoded)
  }
  return [output
    .join('')
    .split('')
    .map(x => x === 'a' ? a : b)
    .join('')]
}

// decode given first letter = a and second letter = a
function decodeOptions ([letters, input]) {
  return [
    decode(letters[0], input),
    decode(letters[1], input),
    decode(letters[0], input, true), // alternate alphabet
    decode(letters[1], input, true)  // alternate alphabet
  ].filter(Boolean)
}


// present possibilities
function present (possibilities) {
  if (!possibilities.length) {
    console.log('Invalid ciphertext')
    return
  }
  if (possibilities.length === 1) {
    console.log(possibilities.pop())
    return
  }
  possibilities.forEach((possibility, idx) => {
    console.log('Option %d:\n\t%s\n', idx + 1, possibility)
  })
}

function main() {
  const mode = process.argv[2]
  switch (mode) {
    case 'encode':
      getInput()
      .then(getAB)
      .then(encode)
      .then(present)
      .catch((e) => console.error(e))
    break
    case 'decode':
      getInput()
      .then(validateInput)
      .then(decodeOptions)
      .then(present)
      .catch((e) => console.error(e))
    break
    default:
    break
  }
}

main()
