const isOdd = (nb) => {
  /* autre méthode: 
  return nb %2 8== 0 ? true : false 
  ou
  return nb %2 8== 0
  */
  if (nb % 2 !== 0) {
    return true
  } else {
    return false
  }
}
//console.log(isOdd(1))

const isEven = (nb) => {
  return !isOdd(nb)
}
console.log(isOdd(1))
console.log(isEven(1))
