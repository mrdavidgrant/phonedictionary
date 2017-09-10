let input = process.argv[2]
console.log(input)
var resultsActual = []
var resultsCombo = []
const fs = require('fs')

const numberPairs = {
  0: ['0', '0', '0'],
  1: ['1', '1', '1'],
  2: ['A', 'B', 'C'],
  3: ['D', 'E', 'F'],
  4: ['G', 'H', 'I'],
  5: ['J', 'K', 'L'],
  6: ['M', 'N', 'O'],
  7: ['P', 'R', 'S'],
  8: ['T', 'U', 'V'],
  9: ['W', 'X', 'Y']
}

let counter = {
  inc: function(x){
    this[x]++
    if (this[x] > 2) {
      this.inc(x - 1)
      this[x] = 0
    }
  },
  create: function(input){
    for (var y = 0; y < input.length; y++){
      if (input[y] != 0 && input[y] != 1)
        counter[y] = 0
    }
  }
}

const obj = {
  testInput: testInput
}

function testInput (input){
  let re = /[^2-9]/.test(input)
  // console.log(re)
  let Bad = !input || re
  // console.log(Bad)
  if (!Bad) {
    // console.log('input good: ', input)
    input = input.split('')
  } else {
    input = ''
    console.log("Please input a 7 digit number, with no zeros ('0') or ones ('1')")
  } 
  return (input)
}

function getLetter (x, y) {
  return numberPairs[x][y]
}

function testWord(letter, word){
  var filePath = './dict/'+letter+'.txt'
  var data = fs.readFileSync(filePath)
  data = data.toString().split(', ').filter(function(dictLength){
    return dictLength.length === word.length && dictLength[0] === word[0]
  })
  for (let j = 0; j < data.length; j++){
    if (word === data[j]){
      return true
    }
  }
  return false
}

const makeWord = function (input, numberPairs, counter) {
  let wordArray = []
  for (let letters = 0; letters < input.length; letters ++) {
    wordArray.push(getLetter(input[letters], counter[letters]))
  }
var firstLetter = wordArray[0]
  word = wordArray.join('').toLowerCase()
  if (testWord(firstLetter, word)){
    console.log('Word Found: ' + word)
    resultsActual.push(word)
  }
  for (let x = 0; x < word.length - 1; x++){
    secondLetter = word[x]
    if (testWord(firstLetter, word.slice(0,x)) && testWord(secondLetter, word.slice(x))) {
      console.log('Word combo Found: ' + word.slice(0,x) + ' + ' + word.slice(x))
      resultsCombo.push(word.slice(0,x) + " + " + word.slice(x))
    }
  }
  
  // for (let x = 0; x < word.length - 2; x++){
  //   secondLetter = word[x]
  //   for (z = x + 1; z < word.length; z++){
  //     thirdLetter = word[z]
  //     if (testWord(firstLetter, word.slice(0,x)) && testWord(secondLetter, word.slice(x, z)) && testWord(thirdLetter, word.slice(z))) {
  //       console.log('Word combo Found: ' + word.slice(0,x) + ' + ' + word.slice(x,z) + ' + ' + word.slice(z))
  //       resultsCombo.push(word.slice(0,x) + ' + ' + word.slice(x,z) + ' + ' + word.slice(z))
  //     }
  //   }
  // }
  return
}

//program run

testInput(input)
// dictionary(input.length)
console.log("Checking for words")
counter.create(input)
while (counter['6'] != 2 || counter['5'] != 2 || counter['4'] != 2 || counter['3'] != 2 || counter['2'] != 2 || counter['1'] != 2 || counter['0'] != 2) {
  word = makeWord(input, numberPairs, counter)
  if (word){
    results.push(word)
  }
  counter.inc(6)
}
console.log(resultsActual.length + ' actual words were found: ' + resultsActual.join(', '))
console.log(resultsCombo.length + ' combo words were found: ' + resultsCombo.join(', '))

module.exports = obj