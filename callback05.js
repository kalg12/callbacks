const milisegundo = 2000;

const saludar = (mensaje) => {
    setTimeout(() => {
        console.log(mensaje.toUpperCase());
    }, milisegundo);
}

const ejemplo = () => {
    saludar('Hola a todos');
};

console.log("Final");
ejemplo();