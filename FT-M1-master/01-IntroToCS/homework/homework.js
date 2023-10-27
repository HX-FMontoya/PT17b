"use strict";

function BinarioADecimal(string) {
  if (typeof string !== "string") throw Error("Debe ser un string");
  // indice que voy a definir debe empezar en la
  // 2 ** indice * number
  let sum = 0;
  // string.length -> 3
  // la i va a ir hasta 2
  // Recorriendo el string de izquierda a derecha
  /* var indice = string.length - 1
   for (var i = 0; i < string.length; i++){
      var number = string[i]
      var operation = 2 ** indice * number
      indice--
      sum = sum + operation
   }
   return sum */
  // Recorriendo el string de derecha a izquerda
  // 1 0 0
  /* var suma = 0
   var indexEnd = string.length - 1
  for (var i = indexEnd; i > -1; i--) {
     var numero = string[i]
     var indice = indexEnd - i
     //             2  - 0
     var operacion = 2 ** indice * numero
   suma += operacion
  }
   return suma */
  // Ronner
  /* var nDecimal = 0;
   for (let i = 0; i < string.length; i++) {
     nDecimal = nDecimal + string[i] * 2 ** (string.length - 1 - i);
   }
   return nDecimal; */
  // Majo
  // Array - Like -> Puede utilizar metodos de arreglos aunque no sea un arreglo
  // .length []
  /* for (let i = 0; i < string.length; i++) {
    let decimal = 0;
    const digito = string.charAt(i);
    const exponente = string.length - 1 - i;
    // Rendimiento
    if (digito === "1") {
      decimal += Math.pow(2, exponente);
    }
    return decimal;
  } */
  // Fabricio
  let decimal = string // "100"
    .split("") // ["1", "0", "0"]
    .reverse() // ["0", "0", "1"]
    .reduce((acc, cur, idx) => {
      return (acc += cur * Math.pow(2, idx));
    }, 0);
  return decimal;
}
console.log(BinarioADecimal(`10101`)); // 6
function DecimalABinario(num) {
  // 12
  while (num > 0) {
    var str = ""; // ""
    var residuo = num % 2;
    // residuo -> 6 % 2 -> 0
    num = Math.floor(num / 2);
    // num = 3
    str = residuo + str;
    // str = "1"
  }
  return str;
}
console.log(DecimalABinario(12));

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
