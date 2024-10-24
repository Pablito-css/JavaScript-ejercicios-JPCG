//Desarrollar el algoritmo que evalué la formula cuadrática o general.

let a = parseFloat(prompt("Digite el coeficiente a:"));
let b = parseFloat(prompt("Digite el coeficiente b:"));
let c = parseFloat(prompt("Digite el coeficiente c:"));

let discriminante = b * b - 4 * a * c;

if (discriminante > 0) {

    let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    console.log("Las soluciones son x1:", x1, "y x2:", x2);
} else if (discriminante === 0) {

    let x = -b / (2 * a);
    console.log("La solución es x:", x);
} else {

    console.log("No hay soluciones reales.");
}
