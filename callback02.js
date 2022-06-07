/* let operaciones = (numA, numB, sumaCB) => {
    let suma = numA + numB;
    sumaCB(suma)
}

operaciones(5,9,function(numero){
    console.log(numero)
}) */

let operacionResta = (numA, numB, restaCB) => {
    let resta = numA - numB;
    restaCB(resta)
}

operacionResta(5, 8, function(numero){
    console.log(numero)
})