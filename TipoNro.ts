/*Tipos de Números en Arreglo (con Métodos)
  • Almacene en un arreglo de dimensión N números (la
  cantidad es ingresada por el usuario)
  • Muestre cuántos números son positivos, cuántos son
  negativos y cuántos ceros hay
*/
 

import * as rls from "readline-sync"

let n:number = rls.questionInt("Ingrese la cantidad de números a almacenar: ");

let numeros = new Array(n);
let positivos:number = 0;
let negativos:number = 0;
let ceros:number= 0;


for (let i = 0; i < n; i++) {
  numeros[i] = rls.questionInt(`Ingrese el número ${i+1}: `);
}


for (let i = 0; i < n; i++) {
  if (numeros[i] > 0) {
    positivos++;
  } else if (numeros[i] < 0) {
    negativos++;
  } else {
    ceros++;
  }
}

console.log(`Cantidad de números positivos: ${positivos}`);
console.log(`Cantidad de números negativos: ${negativos}`);
console.log(`Cantidad de ceros: ${ceros}`);
