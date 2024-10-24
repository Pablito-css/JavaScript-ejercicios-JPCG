//Un vendedor desea calcular su comisión total sobre las ventas de varios artículos. Al vendedor le corresponde el 3% de comisión sobre artículos cuyo precio es menor de $2.000.oo y el 5% de comisión sobre artículos cuyo precio es de $2000.oo o más. El vendedor hizo 50 ventas y desea saber también cuántas ventas hizo menores de 2000 y cuantas mayores o iguales a 2000.

let comisionTotal = 0;
let ventasMenores = 0;
let ventasMayores = 0;

for (let i = 1; i <= 50; i++) {
    let precio = parseFloat(prompt("Digite el precio del artículo de la venta " + i + ":"));

    if (precio < 2000) {
        comisionTotal += precio * 0.03;
        ventasMenores++;
    } else {
        comisionTotal += precio * 0.05;
        ventasMayores++;
    }
}

console.log("La comisión total es:", comisionTotal);
console.log("Cantidad de ventas menores de 2000:", ventasMenores);
console.log("Cantidad de ventas mayores o iguales a 2000:", ventasMayores);

