let saludar = (callback) => {
    let miMensaje = "Hola ucampers";
    callback(miMensaje)
}

saludar((mensaje) => {
    console.log(mensaje)
});