//Ejercicio: Secuencia
//leemos la base y la altura desde el teclado y las guardanos en las variables
//calculamos el area y mostramos el resutado 

import * as rls from "readline-sync"


let base:number = rls.questionInt("Ingrese la base");
let altura: number = rls.questionInt("ingrese la altura");
let area: number = base * altura;
console.log("el area es:", area);
