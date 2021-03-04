const showStars = (nbBase, reverse, str) => {
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      console.log(str.repeat(i))
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      console.log(str.repeat(i))
    }
  }
}
showStars(8, true, 'p')