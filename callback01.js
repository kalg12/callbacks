let saludar = (callback) => {
    let miMensaje = "Hola ucampers";
    callback(miMensaje)
}

saludar((mensaje) => {
    alert(mensaje)
});