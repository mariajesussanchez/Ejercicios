"use strict";
//leemos la base y la altura desde el teclado y las guardanos en las variables
//calculamos el area y mostramos el resutado 
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-Sync");
var base = readlineSync.questionInt("Ingrese la base");
var altura = readlineSync.questionInt("ingrese la altura");
var area = base * altura;
console.log("el area es:", area);
