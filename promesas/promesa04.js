let saludar = new Promise((resolve, reject) => {
    //resolve("Hola mundo. Soy llamado desde una promesa");
    //reject();
  });

  console.log("****************");

  saludar.then((value) => {
    setTimeout(() => {
      console.log(value);
    }, 3000);
  }).catch( () => console.log('Estoy en el catch')
  );

  console.log("----------------");