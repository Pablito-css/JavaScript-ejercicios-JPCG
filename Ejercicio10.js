//A ciertos estudiantes se les dice que su calificación final será el promedio de las dos calificaciones más altas de entre las tres que se han obtenido en el curso. Haga un algoritmo que permita a un estudiante efectuar el cálculo correspondiente a su nota final.

let cal1 = parseFloat(prompt("Digite la primera calificación:"));
let cal2 = parseFloat(prompt("Digite la segunda calificación:"));
let cal3 = parseFloat(prompt("Digite la tercera calificación:"));

let suma, notaFinal;

if (cal1 <= cal2 && cal1 <= cal3) {

    suma = cal2 + cal3;
} else if (cal2 <= cal1 && cal2 <= cal3) {

    suma = cal1 + cal3;
} else {

    suma = cal1 + cal2;
}

notaFinal = suma / 2;

console.log("La nota final, basada en el promedio de las dos calificaciones más altas, es:", notaFinal);
