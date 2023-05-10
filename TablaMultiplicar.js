"use strict";
//Diseñar un algoritmo que muestre por pantalla la tabla de
//multiplicación del número ingresado por el usuario.
//Para definir hasta qué número desea que muestre la tabla de
//multiplicación, el usuario también deberá ingresar dicho valor.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numero = rls.questionInt("tabla de multiplicar del numero: ");
for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log("".concat(numero, " x ").concat(i, " = ").concat(resultado));
}
