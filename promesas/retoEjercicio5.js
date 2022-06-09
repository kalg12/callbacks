/* Crea una promesa que se llame status. Dentro de la promesa se debe crear una variable que se llame valor, la cual debe  ser igual a 5. Dentro de la promesa se debe validar si la variable valor es mayor o menor a 5. Si es mayor se debe imprimir en consola "El valor es mayor a 5" y si es menor se debe imprimir en consola "El valor es menor a 5".
 */

const estado = new Promise((resolve, reject) => {
    let valor = 0;
    if (valor >= 5) {
        resolve('El valor es mayor a 5');
    } else {
        reject('El valor es menor a 5');
    }
});


estado
.then(resultado => {
    console.log(resultado);
})
.catch(error => {
    console.log(error);
});