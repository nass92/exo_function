
const nb_monocy = (nb1) => {
  return nb1
}

const nb_mot = (nb2) => {

  return nb2 * 2
}
const nb_car = (nb4) => {

  return nb4 * 4
}
const nb_limousin = (nb6) => {

  return nb6 * 6
}


const countWheels = (nb_monocycle, nb_moto, nb_voiture, nb_limousine) => {

  return nb_monocy(nb_monocycle) + nb_mot(nb_moto) + nb_car(nb_voiture) + nb_limousin(nb_limousine)
}
console.log(countWheels(10, 20, 7, 2))
console.log(countWheels(2, 3, 4, 5))

