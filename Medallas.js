"use strict";
//Desarrolle un algoritmo que, dada una posicion en una carrera se determine 
//el tipo de medalla a entregar.
//Tenga en cuenta que para el primer puesto se entrega medalla de oro,
//segundo puesto medalla de plata y tercer puesto medalla de bronce.
//En caso que quede en otra posicion se entrega certificado de participacion.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var posicion = rls.questionInt("Ingrese posicion de llegada del competidor: ");
if (posicion <= 0) {
    console.log("Debe ser numero entero > 0");
}
else if (posicion == 1) {
    console.log("Medalla de Oro");
}
else if (posicion == 2) {
    console.log("Medalla de Plata");
}
else if (posicion == 3) {
    console.log("Medalla de Bronce");
}
else {
    console.log("Certificado de participacion");
}
