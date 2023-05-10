//Al tirar un dado tenemos 1/6 de probabilidad de sacar 6.
//Si tiramos dos dados tenemos 1/36 de probabilidad de sacar doble 6.
//Al aumentar el numero de dados la probabilidad de sacar todos 6 es cada vez menor.
//Escriba un programa que calcule la probabilidad de sacar todos los dados 6, siendo
//que tiramos N dados(dato ingresado por el usuario)-

import * as rls from "readline-sync";

let resultado:number = 0;
let probabilidad:number = 1/6;

let numero:number = rls.questionInt("Ingrese cantidad de dados: ");
resultado = (probabilidad)**(numero);
console.log("la probabilidad de sacar un 6 tirando cantDados", resultado);

