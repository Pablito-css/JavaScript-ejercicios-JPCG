//desarrollar un programa que capture tres números e imprima por pantalla cual es el número mayor, el menor, cuales son iguales, si los tres diferentes.

let num1 = parseInt(prompt("Digite el primer número"));
let num2 = parseInt(prompt("Digite el segundo número"));
let num3 = parseInt(prompt("Digite el tercer número"));

if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales.");
} else if (num1 === num2) {
    console.log("El primer y el segundo número son iguales.");
} else if (num1 === num3) {
    console.log("El primer y el tercer número son iguales.");
} else if (num2 === num3) {
    console.log("El segundo y el tercer número son iguales.");
} else {
    console.log("Los tres números son diferentes.");
}

let mayor = Math.max(num1, num2, num3);
let menor = Math.min(num1, num2, num3);

console.log("El número mayor es:", mayor);
console.log("El número menor es:", menor);
