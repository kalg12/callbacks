function saludar(nombre, callback) {
    let resultado = nombre.toUpperCase();
    callback(resultado);
}


saludar("kevin", function(resultado) {
    console.log(resultado);
});