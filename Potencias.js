"use strict";
//Realice un programa que devuelva la porencia de un numero.
//La basa y exponente deben ser ingresados x teclado.
//Solo deben admitirse exponentes mayores o iguales a cero.
//Recuerde que el resutado de un numero elevado a 0 = 1.
//Separe la logica de calcular la potencia utilizando metodos.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var base = rls.questionInt("ingrese la base: ");
var exponente = rls.questionInt("ingrese la exponente: ");
var resultado = 1;
for (var i = 0; i < exponente; i++) {
    resultado = resultado * base;
}
console.log("la potencia es: " + resultado);
