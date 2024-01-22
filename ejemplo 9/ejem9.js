'use strict'

//Sin argumentos – crea un objeto Date para la fecha y la hora actuales:
  let now = new Date();
alert( now ); // muestra en pantalla la fecha y la hora actuales


let date = new Date();
alert(+date); // devuelve el número de milisegundos, al igual que date.getTime()

//Por lo tanto, es mejor hacerlo de esta manera:Date.now()

let start = Date.now(); // milisegundos transcurridos a partir del 1° de Enero de 1970

// la función realiza su trabajo
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // listo

alert( `El bucle tardó ${end - start} ms` ); // restamos números en lugar de fechas

//Para realizar un benchmarking más confiable, todas las benchmarks deberían ser ejecutadas múltiples veces.

  //Como por ejemplo:
function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  let time1 = 0;
  let time2 = 0;
  // ejecuta bench(diffSubtract) y bench(diffGetTime) cada 10 iteraciones alternándolas
  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
  }
  alert( 'Tiempo total de diffSubtract: ' + time1 );
  alert( 'Tiempo total de diffGetTime: ' + time2 );