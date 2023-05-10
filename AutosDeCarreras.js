"use strict";
//en una prueba, un piloto tiene que completar cuatro vueltas
//se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta
//el programa debe retomar el tiempo total y el promedio de vuelta
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var v1 = rls.questionFloat("ingrese tiempo primera vuelta");
var v2 = rls.questionFloat("ingrese tiempo segunda vuelta");
var v3 = rls.questionFloat("ingrese tiempo tercera vuelta");
var v4 = rls.questionFloat("ingrese tiempo cuarta vuelta");
var tiempoTotal = v1 + v2 + v3 + v4;
var tiempoPromedio = tiempoTotal / 4;
console.log("el tiempo total es:", tiempoTotal);
console.log("el promedio de vuelta es:", tiempoPromedio);
