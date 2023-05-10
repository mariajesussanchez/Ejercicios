"use strict";
//desarrolle un algoritmo que dados tres numeros determine cual es el mayor de los tres.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num1 = rls.questionInt("Ingrese num1: ");
var num2 = rls.questionInt("Ingrese num2: ");
var num3 = rls.questionInt("Ingrese num3: ");
if (num1 > num2 && num1 > num3) {
    console.log("El num1", num1, "es el mayor");
}
else if (num2 > num1 && num2 > num3) {
    console.log("El num2", num2, "es el mayor");
}
else {
    console.log("El num3", num3, "es el mayor");
}
