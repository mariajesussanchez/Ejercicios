//Ejercicio: Secuencia
//Leemos los numros desde el teclado y los guardamos en las variables.

import * as readlineSync from "readline-sync";

let nro1:number = readlineSync.questionInt("ingrese nro1:");
console.log("el nro1 es", nro1);
let nro2:number = readlineSync.questionInt("ingrese nro2:");
console.log("el nro2 es", nro2);
let suma:number = nro1 + nro2;
console.log("el resultado de la suma es:", suma);
