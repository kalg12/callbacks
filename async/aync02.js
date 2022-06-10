let  mostrar = async ( ) => {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("Animos Ucampers");
    });
    console.log(await myPromise) ;
  }
  mostrar();