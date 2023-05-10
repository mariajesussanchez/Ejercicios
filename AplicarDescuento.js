"use strict";
//Desarrolle un algoritmo que diga el precio de una compra
//La compra se compone del precio del producto y la cantidad
//Si el cliente gasta mas de $1000 debemos aplicarle un descuento del 10%
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var precioProducto1 = 300;
var precioProducto2 = 180;
var cantProducto1 = rls.questionInt("ingrese cantidad producto 1 que compro es: ");
var cantProducto2 = rls.questionInt("ingrese cantidad producto 2 que compro es: ");
var subtotalCompra1 = (precioProducto1 * cantProducto1);
var subtotalCompra2 = (precioProducto2 * cantProducto2);
var subtotalCompra = (subtotalCompra1 + subtotalCompra2);
var descuento = (subtotalCompra * 0.1);
var precioFinal = (subtotalCompra - descuento);
console.log("el cliente compro $: ", subtotalCompra1);
console.log("el cliente compro $: ", subtotalCompra2);
console.log("el total de la compra es $: ", subtotalCompra);
if (subtotalCompra > 1000) {
    console.log("usted ahorra: $", descuento, "por haber comprado una suma superior a $1000, usted debera pagar: $", precioFinal);
}
else
    (subtotalCompra < 1000);
{
    console.log("usted de pagar: $", subtotalCompra);
}
