'use strict'

  //Un ejemplo de cómo el array es desestructurado en variables:
  // tenemos un array con el nombre y apellido
let arr = ["John", "Smith"]

// asignación desestructurante
// fija firstName = arr[0]
// y surname = arr[1]
let [firstname, surName] = arr;

alert(firstName); // John
alert(surname);  // Smith

//Ahora podemos trabajar con variables en lugar de miembros de array.

//Se ve genial cuando se combina con split u otro método que devuelva un array:

let [firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname);  // Smith


let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
