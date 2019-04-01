#!/usr/bin/env node

const alphabet = {
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

// get input from command line
async function getInput () {
  return [...process.argv].slice(2).join(' ')
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
    const decoded = alphabet[chunk]
    if (!decoded) return ''
    output.push(decoded)
  }
  return output.join('')
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
  getInput()
    .then(validateInput)
    .then(decodeOptions)
    .then(present)
    .catch((e) => console.error(e))
}

main()
