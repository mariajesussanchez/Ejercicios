"use strict";
//Una tienda al cumplir años en Octubre ofece un descuento del 15% 
//a sus clientes en todas sus compras.
//Desarrolle un algoritmo que dada una compra: precio unitario, cantidad 
//y el mes, determine si el cliente tiene descuento o no.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var montoCompra = rls.questionInt("Ingresar montoCompra $: ");
var cantidad = rls.questionFloat("Ingresar cantidad: ");
var mes = rls.question("mes: ");
var descuento = 0;
var montoConDto = 0;
var totalPagar = (montoCompra * cantidad);
if (mes == "Octubre") {
    descuento = (totalPagar * 15) / 100;
    montoConDto = (totalPagar - descuento);
    console.log("Por realizar la compra en el mes de Octubre, ud tiene una bonificacion de 15%");
    console.log("Debe pagar $: ", montoConDto);
}
else {
    console.log("Debe pagar $: ", totalPagar);
}
