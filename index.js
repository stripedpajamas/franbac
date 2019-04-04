#!/usr/bin/env node

const decodeAlphabet = {
  aaaaa: 'A',
  aaaab: 'B',
  aaaba: 'C',
  aaabb: 'D',
  aabaa: 'E',
  aabab: 'F',
  aabba: 'G',
  aabbb: 'H',
  abaaa: 'I',
  abaab: 'K',
  ababa: 'L',
  ababb: 'M',
  abbaa: 'N',
  abbab: 'O',
  abbba: 'P',
  abbbb: 'Q',
  baaaa: 'R',
  baaab: 'S',
  baaba: 'T',
  baabb: 'V',
  babaa: 'W',
  babab: 'X',
  babba: 'Y',
  babbb: 'Z'
}

const encodeAlphabet = {
  A: 'aaaaa',
  B: 'aaaab',
  C: 'aaaba',
  D: 'aaabb',
  E: 'aabaa',
  F: 'aabab',
  G: 'aabba',
  H: 'aabbb',
  I: 'abaaa',
  K: 'abaab',
  L: 'ababa',
  M: 'ababb',
  N: 'abbaa',
  O: 'abbab',
  P: 'abbba',
  Q: 'abbbb',
  R: 'baaaa',
  S: 'baaab',
  T: 'baaba',
  V: 'baabb',
  W: 'babaa',
  X: 'babab',
  Y: 'babba',
  Z: 'babbb'
}

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
function decode (a, text) {
  const translatedInput = []
  for (c of text) {
    translatedInput.push(c === a ? 'a' : 'b')
  }
  const output = []
  for (let i = 0; i < translatedInput.length; i += 5) {
    const chunk = translatedInput.slice(i, i + 5).join('')
    const decoded = decodeAlphabet[chunk]
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
    const encoded = encodeAlphabet[c]
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
  return [decode(letters[0], input), decode(letters[1], input)]
}


// present possibilities
function present ([a, b]) {
  if (a && b) {
    console.log('Option A:\n\t%s\nOption B:\n\t%s', a, b)
  } else if (!b) {
    console.log(a)
  } else if (!a) {
    console.log(b)
  } else {
    console.log('Invalid ciphertext')
  }
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
