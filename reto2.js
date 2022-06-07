function saludar (nombre, callback) {
    let resultado = nombre.toLowerCase();
    callback(resultado)
}

saludar("UCAMPERS", (final) => {
    setTimeout(() => {
        console.log(`${final}`);
    }, 4000);
})