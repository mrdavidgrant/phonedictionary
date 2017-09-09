let input = process.argv[2]
console.log(input)
var results = []

const numberPairs = {
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
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  inc: function(x){
    this[x]++
    if (this[x] > 2) {
      this.inc(x+1)
      this[x] = 0
    }
  }
}

const obj = {
  testInput: testInput
}

function testInput (input){
  let re = /[^2-9]/.test(input)
  // console.log(re)
  let Bad = !input || re || input.split('').length != 7
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

const makeWord = function (input, numberPairs, counter) {
  let wordArray = []
  for (let letters = 0; letters < input.length; letters ++) {
    wordArray.push(getLetter(input[letters], counter[letters]))
  }
  word = wordArray.join('').toLowerCase()
  return word
}

//program run
testInput(input)
while (counter['6'] != 2 || counter['5'] != 2 || counter['4'] != 2 || counter['3'] != 2 || counter['2'] != 2 || counter['1'] != 2 || counter['0'] != 2) {
  results.push(makeWord(input, numberPairs, counter))
  counter.inc(0)
}
console.log(results)
module.exports = obj