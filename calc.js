const add = (nb1, nb2) => {
  return nb1 + nb2
}
let result = add(7, 2)

const sub = (nb1, nb2) => {
  return nb1 - nb2
}
let result2 = sub(7, 2)

const mul = (nb1, nb2) => {
  return nb1 * nb2
}
let result3 = add(7, 2)

const div = (nb1, nb2) => {
  return nb1 / nb2
}
let result4 = add(7, 2)

const calc = (op, nb1, nb2) => {
  if (op === add) {
    return add(nb1, nb2)
  } else if (op === sub) {
    return sub(nb1, nb2)
  } else if (op === mul) {
    return mul(nb1, nb2)
  } else if (op === div) {
    return div(nb1, nb2)
  } else {
    return false
  }
}
console.log(calc(mul, 10, 2))