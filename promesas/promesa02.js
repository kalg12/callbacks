const resolver = new Promise ((resolve,reject) => {
    setTimeout(()=>{
        resolve("Hola mundo");
    }, 2000)
})

resolver
.then(resultadoDos => {
    console.log("Hola ucampers")
})

resolver
.then(resultadoDos => {
    console.log("Esta es una oración más")
})

resolver
.then(resultado => {
    console.log(resultado)
})

resolver
.catch(error => {
    console.log(error)
})

resolver
.finally(() => {
    console.log("En este ejercicio la promesa ha finalizado")
})