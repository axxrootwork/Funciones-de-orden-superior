//------------------------------------------------------------------//
// Imprimir en consola solo las marcas con sus stock.
const products = [
    { name: "Codeo en Python", price: 1000 },
    { name: "Codeo en HTML, CSS y JS", price: 200 },
    { name: "Codeo en Solidity", price: 500 },
    { name: "Asesorio Blockchain", price: 200 },
    { name: "Codeo en Java (Proximamente...)", price: 800 }
];
//------------------------------------------------------------------//
// Imprimir en consola solo si alguno de los productos cuesta más de 200. 
for (let i = 0; i < products.length; i++) {
    if (products[i].price > 200) {
    console.log(products[i].name + ": $" + products[i].price);
    }
}
//------------------------------------------------------------------//
// Imprime en consola el precio promedio de los productos.
    let totalPrice = 0;

    for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
    }

    const averagePrice = totalPrice / products.length;

    console.log("El precio promedio es: $" + averagePrice);
//------------------------------------------------------------------//
// Imprime en consola alfabéticamente el nombre de los productos.
const sortedProducts = products.sort((a, b) => {
    return a.name.localeCompare(b.name);
});

for (let i = 0; i < sortedProducts.length; i++) {
    console.log(sortedProducts[i].name);
}
//------------------------------------------------------------------//
// Imprime en consola el producto más costoso, y redondea en un número entero.
let mostExpensiveProduct = products[0];

for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensiveProduct.price) {
    mostExpensiveProduct = products[i];
    }
}

console.log("El producto más costoso es: " + mostExpensiveProduct.name + " ($" + Math.round(mostExpensiveProduct.price) + ")");
//------------------------------------------------------------------//