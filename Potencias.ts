//Realice un programa que devuelva la porencia de un numero.
//La basa y exponente deben ser ingresados x teclado.
//Solo deben admitirse exponentes mayores o iguales a cero.
//Recuerde que el resutado de un numero elevado a 0 = 1.
//Separe la logica de calcular la potencia utilizando metodos.



import * as rls from "readline-sync";

let base:number = rls.questionInt("ingrese la base: ");
let exponente:number = rls.questionInt("ingrese la exponente: ");
let resultado:number = 1;
   
for(let i = 0; i<exponente; i++){
    resultado = resultado * base
}
console.log("la potencia es: "+resultado);
