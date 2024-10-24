//Desarrollar un algoritmo que halle la nota total de una materia en el SENA, y determine si la gano o la reprobó.

let nota1 = parseFloat(prompt("Digite la primera nota:"));
let nota2 = parseFloat(prompt("Digite la segunda nota:"));
let nota3 = parseFloat(prompt("Digite la tercera nota:"));

let notaTotal = (nota1 + nota2 + nota3) / 3;

if (notaTotal >= 3.5) { 
    console.log("Aprobaste la materia. Nota total:", notaTotal);
} else {
    console.log("Reprobaste la materia. Nota total:", notaTotal);
}

