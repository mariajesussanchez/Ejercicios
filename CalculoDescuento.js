"use strict";
//Ejercicio: Secuencia
//Implemento un algoritmo que calcule y muestre
//por pantalla el precio de un producto
//despues de aplicarle un descuento
//El descuento es el 10%
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var precioProducto = rls.questionFloat("Ingrese el precioProducto $: ");
var porcentajeDescuento = 0.1;
var descuento = precioProducto * porcentajeDescuento;
var precioConDescuento = precioProducto - descuento;
console.log("Usted tiene un descuento de de $: ", descuento);
console.log("Usted debe abonar es $:", precioConDescuento, "Gracias por su compra");
