function saludar(nombre, callback) {
    let resultado = nombre.toUpperCase();
    callback(resultado);
}


saludar("kevin", function(parametro) {
    console.log(parametro);
});