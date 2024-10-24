//Prepare un algoritmo que identifique e imprima el número medio de un conjunto de tres números únicos. El número medio es aquel que no es el menor ni el mayor.
// Capturar los tres números

let num1 = parseInt(prompt("Digite el primer número:"));
let num2 = parseInt(prompt("Digite el segundo número:"));
let num3 = parseInt(prompt("Digite el tercer número:"));

let medio;

if ((num1 > num2 && num1 < num3) || (num1 > num3 && num1 < num2)) {
    medio = num1;
} else if ((num2 > num1 && num2 < num3) || (num2 > num3 && num2 < num1)) {
    medio = num2;
} else {
    medio = num3;
}

console.log("El número medio es: " + medio);
