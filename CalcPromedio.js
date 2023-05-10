"use strict";
//Calculo Promedio de diez notas.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nota, suma, promedio, cantidadNotas, contador;
contador = 1;
suma = 0;
cantidadNotas = 10;
while (contador <= cantidadNotas) {
    nota = rls.questionInt("Ingrese una nota: ");
    suma = suma + nota;
    contador = contador + 1;
    console.log("Interaccion numero: ", contador, "Valor de la suma: ", suma);
}
promedio = suma / cantidadNotas;
console.log("El promedio de las notas es: ", promedio);
