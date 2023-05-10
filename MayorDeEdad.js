"use strict";
//dada la edad de una persona informa si es mayor de 18 o no.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var edad = rls.questionInt("La edad es: ");
if (edad >= 18) {
    console.log("Es mayor de edad");
}
else {
    console.log("No es mayor de edad");
}
