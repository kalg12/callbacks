function devuelvePromesa() {
    return new Promise( (resolve, reject) => {
      setTimeout(() => {
        let todoCorrecto = true;
        if (todoCorrecto) {
          resolve('Todo ha ido bien');
        } else {
          reject("Algo ha fallado")
        }
      }, 1500)
    })
  }

  devuelvePromesa().then((value => {
      console.log(value)
  }))
    .catch((error => {
        console.log(error)
        }
))
    .finally(() => {
        console.log("Fin del programa")
    })
