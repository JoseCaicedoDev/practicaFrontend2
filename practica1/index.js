//Equipo 9
let array = [1, 2, 4, 8]
let suma = 0

//Solución 1

/* for (let i = 0; i < array.length - 1; i++) {
  if (i == 0) {
    suma = array[i];
    console.log(`0 + ${suma} =`, suma)
  } else {
    suma += array[i]
  }
  console.log(`${suma} + ${array[i + 1]} =`, suma + array[i + 1])
} */

//Solución 2
for (let arr of array) {
  console.log(`${suma} + ${arr} = `, suma += arr);
};
