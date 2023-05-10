//Una tienda al cumplir años en Octubre ofece un descuento del 15% 
//a sus clientes en todas sus compras.
//Desarrolle un algoritmo que dada una compra: precio unitario, cantidad 
//y el mes, determine si el cliente tiene descuento o no.

import * as rls from "readline-sync";


let montoCompra:number = rls.questionInt("Ingresar montoCompra $: ");
let cantidad:number = rls.questionFloat("Ingresar cantidad: ");
let mes:string = rls.question("mes: ");
let descuento:number = 0;
let montoConDto:number = 0;
let totalPagar:number = (montoCompra*cantidad);

if (mes == "Octubre") {
    descuento = (totalPagar*15)/100;
    montoConDto = (totalPagar - descuento);
    console.log("Por realizar la compra en el mes de Octubre, ud tiene una bonificacion de 15%");
    console.log("Debe pagar $: ", montoConDto); 
} else {
    console.log("Debe pagar $: ", totalPagar); 
}

    

