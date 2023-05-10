"use strict";
//Desarrollar un algoritmo que dado un numero, ingresado por el usuario
//determine si el numero es par o impar y le informe al usuario.
//En el caso de ser 0 el algoritmo debera informalo.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero = rls.questionInt("Ingrese un numero: ");
if (numero == 0) {
    console.log("el numero es cero");
}
else if (numero % 2 == 0) {
    console.log("El numero", numero, "es par");
}
else {
    console.log("El numero", numero, "es impar");
}
