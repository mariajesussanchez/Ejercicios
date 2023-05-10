//Dados tres numeros, ingresados por el usuario, el algoritmo se fija
//si el primer numero es negativo en cuyo caso muestra el producto de
//los tres numeros, sino muestra la suma de estos.

import * as rls from "readline-sync";

let num1:number = rls.questionInt("Ingrese el primer numero: ");
let num2:number = rls.questionInt("Ingrese el segundo numero: ");
let num3:number = rls.questionInt("Ingrese el tercer numero: ");
let resultado:number = 0;
if (num1<0) {
    resultado = (num1*num2*num3); 
    
} else {
    resultado = (num1+num2+num3); 
}
console.log(resultado);
