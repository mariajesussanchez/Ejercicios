
//desarrolle un algoritmo que dados tres numeros determine cual es el mayor de los tres.

import * as rls from "readline-sync";

let num1:number = rls.questionInt("Ingrese num1: ");
let num2:number = rls.questionInt("Ingrese num2: ");
let num3:number = rls.questionInt("Ingrese num3: ");

if (num1>num2 && num1>num3) {
    console.log("El num1", num1, "es el mayor");
} else if (num2>num1 && num2>num3) {
    console.log("El num2", num2, "es el mayor");
} else { 
    console.log("El num3", num3, "es el mayor");
}