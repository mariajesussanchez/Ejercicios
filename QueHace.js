"use strict";
//Dados tres numeros, ingresados por el usuario, el algoritmo se fija
//si el primer numero es negativo en cuyo caso muestra el producto de
//los tres numeros, sino muestra la suma de estos.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num1 = rls.questionInt("Ingrese el primer numero: ");
var num2 = rls.questionInt("Ingrese el segundo numero: ");
var num3 = rls.questionInt("Ingrese el tercer numero: ");
var resultado = 0;
if (num1 < 0) {
    resultado = num1 * num2 * num3;
}
else {
    resultado = num1 + num2 + num3;
}
console.log(resultado);
