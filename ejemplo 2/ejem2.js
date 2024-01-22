
'use strict'

//Array.from
  let arrayLike = {
    0: "Hola",
    1: "Mundo",
    length: 2
  };
  
  let arr = Array.from(arrayLike); // (*)
  alert(arr.pop()); // Mundo (el método pop funciona)
