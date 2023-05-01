let nombre ="fermin";
let apellido="palacios";

let estudiante= (nombre.concat(" ", apellido));
let estudianteMayus=(estudiante.toUpperCase(estudiante));
let estudianteMinus=(estudiante.toLowerCase(estudiante));
let numletras= estudiante.length;
let primeraletra= nombre.charAt(0);
let ultimaletra= apellido.slice(-1);
let sinespacios= estudiante.replace(/ /g,"");
let esnombre =  estudiante.includes("fermin");


console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(numletras);
console.log(primeraletra);
console.log(ultimaletra);
console.log(sinespacios);
console.log(esnombre);








