//Ejercicio: Estructura de Control
//en una prueba, un piloto tiene que completar cuatro vueltas
//se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta
//el programa debe retomar el tiempo total y el promedio de vuelta

import * as rls from  "readline-sync";

const v1:number = rls.questionFloat("ingrese tiempo primera vuelta");
const v2:number = rls.questionFloat("ingrese tiempo segunda vuelta");
const v3:number = rls.questionFloat("ingrese tiempo tercera vuelta");
const v4:number = rls.questionFloat("ingrese tiempo cuarta vuelta");

const tiempoTotal:number = v1 + v2 + v3 + v4;
const tiempoPromedio: number = tiempoTotal/4;

console.log("el tiempo total es:", tiempoTotal);
console.log("el promedio de vuelta es:", tiempoPromedio);

