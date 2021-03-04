
const forEach = (array, fn) => {
  for (const elem of array) {
    console.log(fn(elem))
  }
}

const add = (elem) => {
  return elem
}
const array = ['alice', 'bob', 'alex',]
console.log(forEach(array, add))
