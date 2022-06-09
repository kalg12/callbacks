let mostrarComparacion = (algo) => {
    console.log(algo);
  };

  let myPromise = new Promise((resolucion, rechazo) => {
    let x = 5;
    if (x !== 0) {
      resolucion('OK');
    } else {
      rechazo('Error');
    }
  });

  myPromise.then(
    (value) => {
      mostrarComparacion(value);
    },
    (error) => {
      mostrarComparacion(error);
    }
  );