"use strict";
/*Tipos de Números en Arreglo (con Métodos)
  • Almacene en un arreglo de dimensión N números (la
  cantidad es ingresada por el usuario)
  • Muestre cuántos números son positivos, cuántos son
  negativos y cuántos ceros hay
*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var n = rls.questionInt("Ingrese la cantidad de números a almacenar: ");
var numeros = new Array(n);
var positivos = 0;
var negativos = 0;
var ceros = 0;
for (var i = 0; i < n; i++) {
    numeros[i] = rls.questionInt("Ingrese el n\u00FAmero ".concat(i + 1, ":"));
}
for (var i = 0; i < n; i++) {
    if (numeros[i] > 0) {
        positivos++;
    }
    else if (numeros[i] < 0) {
        negativos++;
    }
    else {
        ceros++;
    }
}
console.log("Cantidad de n\u00FAmeros positivos: ".concat(positivos));
console.log("Cantidad de n\u00FAmeros negativos: ".concat(negativos));
console.log("Cantidad de ceros: ".concat(ceros));
