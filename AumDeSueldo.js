"use strict";
//Una empresa desea premiar a sus empleados con un aumento de sueldo.
//Este aumento se ajusta a una tabla.
//Desarrolle un algoritmo dado el salario actual de un empleado
//determine el aumento de suedo a aplicar y se lo mustre.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var salarioActual = rls.questionFloat("Ingrese su salario actual $: ");
if (salarioActual <= 15000) {
    var salarioNuevo = (salarioActual * 1.20);
    console.log("Ud recibio un aumento de salario de 20%, va a cobrar $: ", salarioNuevo);
}
else if (salarioActual > 15000 && salarioActual <= 20000) {
    var salarioNuevo = (salarioActual * 1.10);
    console.log("Ud recibio un aumento de salar1o de 10%, va a cobrar $: ", salarioNuevo);
}
else if (salarioActual > 20000 && salarioActual <= 25000) {
    var salarioNuevo = (salarioActual * 1.05);
    console.log("Ud recibio un aumento de salario de 5%, va a cobrar $: ", salarioNuevo);
}
else {
    console.log("Usted cobrara $ ", salarioActual);
}
;
