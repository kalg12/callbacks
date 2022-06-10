function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 10000);
    });
  }

async  function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    console.log('Esperando a que se ejecute la tarea ↑');
    // expected output: "resolved"
  }

  asyncCall();
