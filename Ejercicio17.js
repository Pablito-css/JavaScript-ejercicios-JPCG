//Desarrollar un algoritmo que capture un número y diga si negativo o positivo.

let num1 = parseInt(prompt("Digite el primer número:"));
let num2 = parseInt(prompt("Digite el segundo número:"));
let num3 = parseInt(prompt("Digite el tercer número:"));

if (num1 % num2 === 0) {
    console.log(num1 + " es divisible por " + num2);
} else {
    console.log(num1 + " no es divisible por " + num2);
}

if (num1 % num3 === 0) {
    console.log(num1 + " es divisible por " + num3);
} else {
    console.log(num1 + " no es divisible por " + num3);
}

if (num2 % num1 === 0) {
    console.log(num2 + " es divisible por " + num1);
} else {
    console.log(num2 + " no es divisible por " + num1);
}

if (num2 % num3 === 0) {
    console.log(num2 + " es divisible por " + num3);
} else {
    console.log(num2 + " no es divisible por " + num3);
}

if (num3 % num1 === 0) {
    console.log(num3 + " es divisible por " + num1);
} else {
    console.log(num3 + " no es divisible por " + num1);
}

if (num3 % num2 === 0) {
    console.log(num3 + " es divisible por " + num2);
} else {
    console.log(num3 + " no es divisible por " + num2);
}
