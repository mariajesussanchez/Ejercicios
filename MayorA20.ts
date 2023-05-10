//ingreso numero mayor a 20

import * as rls from "readline-sync";

let numDeseado: number = rls.questionInt("ingreso un nro q deseo verificar si es o no >20:");

if(numDeseado > 20){console.log("el nro > 20:", numDeseado);}
else{console.log("nro <= 20:", numDeseado)};
