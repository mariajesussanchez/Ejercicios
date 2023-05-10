"use strict";
//Leemos los numros desde el teclado y los guardamos en las variables
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var nro1 = readlineSync.questionInt("ingrese nro1:");
console.log("el nro1 es", nro1);
var nro2 = readlineSync.questionInt("ingrese nro2:");
console.log("el nro2 es", nro2);
var suma = nro1 + nro2;
console.log("el resultado de la suma es:", suma);
