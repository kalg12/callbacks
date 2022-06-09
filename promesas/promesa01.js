const usoDePromesa = new Promise ((resolve, reject) => {
    if(true){
        resolve("Promesa cumplida")
    }
    else{
        reject("Promesa no cumplida")
    }
})

usoDePromesa
.then(resultado => console.log(resultado))
.catch(error => console.log(error))
.finally(() =>{
    console.log("Finalizado")
})