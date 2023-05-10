//Realice un programa que devuelva el area del triangulo
//usando los siguientes pares de base-altura:
//  (1,2)(2,4)(3,6)(4,8)(5,10)(6,12)(7,14)
//Implente un metodo llamado calcularAreaTriangulo que reciba
//dos numeros por parametro (base y altura).

import * as rls from "readline-sync"

let base: number =rls.questionInt("ingrese la base del triangulo: ");
let altura: number = (base * 2);
const areaTriangulo = (base * altura)/2;


console.log("la altura del triangulo es: ",altura);
console.log("el area del triangulo es: ",areaTriangulo);
