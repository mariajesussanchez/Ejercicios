"use strict";
//Al tirar un dado tenemos 1/6 de probabilidad de sacar 6.
//Si tiramos dos dados tenemos 1/36 de probabilidad de sacar doble 6.
//Al aumentar el numero de dados la probabilidad de sacar todos 6 es cada vez menor.
//Escriba un programa que calcule la probabilidad de sacar todos los dados 6, siendo
//que tiramos N dados(dato ingresado por el usuario)-
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var resultado = 0;
var probabilidad = 1 / 6;
var numero = rls.questionInt("Ingrese cantidad de dados: ");
resultado = Math.pow((probabilidad), (numero));
console.log("la probabilidad de sacar un 6 tirando cantDados", resultado);
