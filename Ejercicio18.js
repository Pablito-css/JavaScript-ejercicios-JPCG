//Desarrollar un algoritmo que capture un número y diga si negativo o positivo.

let numero = parseFloat(prompt("Digite un número:"));

if (numero > 0) {
    console.log("El número es positivo.");
} else if (numero < 0) {
    console.log("El número es negativo.");
} else {
    console.log("El número es cero.");
}
