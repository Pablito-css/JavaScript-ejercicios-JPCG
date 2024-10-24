//Desarrolle un algoritmo que lea de un registro: el nombre, la edad, el sexo, el estado civil de cualquier persona e imprima el nombre de la persona, si corresponde a un hombre casado mayor de 40 años o a una mujer soltera menor de 50 años.

let nombre = prompt("Digite el nombre de la persona:");
let edad = parseInt(prompt("Digite la edad de la persona:"));
let sexo = prompt("Digite el sexo de la persona (M para masculino, F para femenino):");
let estadoCivil = prompt("Digite el estado civil de la persona (casado/soltero):");

if (sexo === "M" && estadoCivil === "casado" && edad > 40) {
    console.log(nombre + " es un hombre casado mayor de 40 años.");
} else if (sexo === "F" && estadoCivil === "soltero" && edad < 50) {
    console.log(nombre + " es una mujer soltera menor de 50 años.");
} else {
    console.log(nombre + " no cumple con las condiciones especificadas.");
}

