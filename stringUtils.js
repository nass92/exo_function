
const reverseStr = (str) => {
  return str.split("").reverse().join("");
}

console.log(reverseStr("hello!"))

// deuxieme partie: pas trouvée encore la solution
const isPalindrome = (str) => {
  if (reverseStr(str) === str) {
    return true
  } else {
    return false
  }
}
console.log(isPalindrome("kayak"))