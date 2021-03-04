// trouver l'element max: 
const biggest = (tab) => {
  let big = 0
  for (let i = 0; i < tab.length; i++) {
    tab[i] > big ? big = tab[i] : ''
  }
  return big
}
console.log(biggest([99, 100, 101, 1]))

// mettre les element du tableau en ordre croissant
const sort = (tab) => {
  let changed;
  do {
    changed = false;
    for (let i = 0; i < tab.length - 1; i++) {
      if (tab[i] > tab[i + 1]) {
        let tmp = tab[i];
        tab[i] = tab[i + 1];
        tab[i + 1] = tmp;
        changed = true;
      }
    }
  } while (changed);
}
let tab = [99, 100, 101, 1];
sort(tab);
console.log(tab);