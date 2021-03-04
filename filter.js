const filter = (array, fn) => {
  for (const word of array) {
    if (word.length < 4)
      console.log(fn(word))
  }
}

const add = (word) => {
  return word
}
const array = ['alice', 'bob', 'alex',]
console.log(filter(array, add))