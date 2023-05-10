//Ejercicio: Secuencia
//Implemento un algoritmo que calcule y muestre
//por pantalla el precio de un producto
//despues de aplicarle un descuento
//El descuento es el 10%

import * as rls from "readline-sync";

const precioProducto: number = rls.questionFloat("Ingrese el precioProducto $: ",);
const porcentajeDescuento: number = 0.1;
const descuento: number = precioProducto * porcentajeDescuento;
const precioConDescuento: number = precioProducto - descuento;
console.log("Usted tiene un descuento de de $: ", descuento);
console.log("Usted debe abonar es $:", precioConDescuento, "Gracias por su compra");

