let mostrarComparacion = (some) => {
    console.log(some);
  };

  let myPromise = new Promise((myResolve, myReject) => {
    let x = 3;
    if (x !== 0) {
      myResolve('OK');
    } else {
      myReject('Error');
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