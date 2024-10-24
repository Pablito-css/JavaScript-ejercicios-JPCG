//1. Desarrolle un algoritmo que lea un número, en caso de ser negativo lo imprima junto con su positivo.
let num = parseInt(prompt("Digite un número"));
if (num < 0) {
    console.log("El positivo de", num, "es", num * -1);
} else {
    console.log("El número que digitaste es:", num);
}
