"use strict";
//Desarrolle un algoritmo que, de acuerdo a la altura de una persona,
//decida si puede entrar a un juego en un parque de diversiones.
//Para poder subir a la montaña rusa la persona debe medir 1.30 mts. o mas.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var alturaMimima = 1.30;
var alturaPersona = rls.questionFloat("ingrese su altura: ");
if (alturaPersona >= alturaMimima) {
    console.log("usted puede ingresar");
}
else {
    console.log("lamentamos, no puede ingresar");
}
