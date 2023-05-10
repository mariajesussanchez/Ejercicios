//Diseñar un algoritmo que muestre por pantalla la tabla de
//multiplicación del número ingresado por el usuario.
//Para definir hasta qué número desea que muestre la tabla de
//multiplicación, el usuario también deberá ingresar dicho valor.

import * as rls from "readline-sync";

const numero:number = rls.questionInt("tabla de multiplicar del numero: ");

for (let i:number = 1; i <= 10; i++){
    let resultado = numero*i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

