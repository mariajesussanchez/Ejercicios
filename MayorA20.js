"use strict";
//ingreso numero mayor a 20
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var numDeseado = rls.questionFloat("ingreso un nro q deseo verificar si es o no >20:");
if (numDeseado > 20) {
    console.log("el nro > 20:", numDeseado);
}
else {
    console.log("nro <= 20:", numDeseado);
}
;
