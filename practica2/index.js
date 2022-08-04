
function aleatorio() {
  return Math.floor(Math.random()* 3)
}

function tipoJugada(eleccion) {
  let resultado = ""
  if (eleccion == 1) {
    resultado = "Piedra"
  } else if (eleccion == 2) {
    resultado = "Papel"
  } else if (eleccion == 3) {
    resultado = "Tijera"
  } else {
    resultado = "No existe la opcion"
  }
  return resultado
}

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio()
  jugador = prompt("Elige: 1. Piedra, 2. Papel, 3. Tijera")

  alert("PC elige " + tipoJugada(pc))
  alert("Tú eliges " + tipoJugada(jugador))

  // Logica de combate
  if (pc == jugador) {
    alert("EMPATE")
  } else if (jugador == 1 && pc == 3) {
    alert("GANASTE")
    triunfos = triunfos + 1
  } else if (jugador == 2 && pc == 1) {
    alert("GANASTE")
    triunfos = triunfos + 1
  } else if (jugador == 3 && pc == 2) {
    alert("GANASTE")
    triunfos = triunfos + 1
  } else {
    alert("PERDISTE")
    perdidas = perdidas + 1
  }
}
console.log(`Ganadas: ${triunfos}`, `Perdidas: ${perdidas}`)