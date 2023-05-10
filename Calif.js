"use strict";
/*Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula segun el siguiente criterio.
la parte practica vale el 10%
la parte de problemas vale el 50%
la parte teorica el 40%
Se debe ingresar el nombre del alumno y sus tres notas, se escribira
el resultado y se volvera a pedir los datos del siguiente alumno
hasta que el nombre sea una cadena vacia.
Las notas deben estar entre 0 y 10 (si no lo estan, no imprimira las notas
mostrara un mensaje de error y continuara con otro alumno)*/
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var nombreAlumno = rls.question("ingrese nombre alumno: ");
var notaPract = rls.questionInt("ingrese notaPract: ");
var notaProbl = rls.questionInt("ingrese notaProb: ");
var notaTeorica = rls.questionInt("ingrese notaTeorica: ");
var notaFinal = 0;
while ((nombreAlumno != "") && (notaPract >= 0 && notaPract <= 10) && (notaProbl >= 0 && notaProbl <= 10)
    && (notaTeorica >= 0 && notaTeorica <= 10)) {
    notaFinal = (notaPract * 0.1 + notaProbl * 0.5 + notaTeorica * 0.40);
    console.log("La nota Final es: ", notaFinal);
    nombreAlumno = rls.question("ingrese nombre alumno: ");
    if (nombreAlumno != "") {
        notaPract = rls.questionInt("ingrese nota Practica: ");
        notaProbl = rls.questionInt("ingrese nota Problematica: ");
        notaTeorica = rls.questionInt("ingrese nota Teorica: ");
    }
}
