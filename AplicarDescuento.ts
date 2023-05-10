//Desarrolle un algoritmo que diga el precio de una compra
//La compra se compone del precio del producto y la cantidad
//Si el cliente gasta mas de $1000 debemos aplicarle un descuento del 10%

import * as rls from "readline-sync";

let precioProducto1:number = 300;
let precioProducto2:number = 180;
let cantProducto1:number = rls.questionInt("ingrese cantidad producto 1 que compro es: ");
let cantProducto2:number = rls.questionInt("ingrese cantidad producto 2 que compro es: ");
let subtotalCompra1:number = (precioProducto1*cantProducto1);
let subtotalCompra2:number = (precioProducto2*cantProducto2);
let subtotalCompra:number = (subtotalCompra1+subtotalCompra2); 
let descuento:number = (subtotalCompra*0.1);
let precioFinal:number = (subtotalCompra-descuento);

console.log("el cliente compro $: ", subtotalCompra1);
console.log("el cliente compro $: ", subtotalCompra2);
console.log("el total de la compra es $: ", subtotalCompra);

if (subtotalCompra>1000) {
    console.log("usted ahorra: $", descuento, 
    "por haber comprado una suma superior a $1000, usted debera pagar: $", precioFinal);
} else (subtotalCompra<1000); {
    console.log("usted de pagar: $", subtotalCompra);
}
    


