var fs = require("fs") 

var letter = 'a'
var counter = 0
function nextChar(c) {
  return String.fromCharCode(c.charCodeAt(0) + 1);
}

for (var i = 0; i < 24; i++) {
  if (letter == 'q'){
    letter = nextChar(letter)
  }
  console.log(letter)
  var filePath = './dict/orig/'+letter+'.txt'
  var data = fs.readFileSync(filePath)
  data = data.toString().split(', ')
  counter += data.length
  var newData = data.filter(function(word){
    return !/[qz]/.test(word) && word.length < 8
  }).sort(function(a, b){
    return a.length - b.length || a.localeCompare(b)
  })
  console.log("Letter " + letter + ": Reduced by " + (data.length - newData.length))

  var writeData = newData.join(', ')
  // console.log(totalData)
  filePath = './dict/'+letter+'.txt'
  fs.writeFile(filePath, writeData,  function(err) {
    if (err) {
      return console.error(err);
    }
  });
  letter = nextChar(letter)
}

console.log(counter, "words checked in total")
// console.log(data.length)
// console.log(newData.length)