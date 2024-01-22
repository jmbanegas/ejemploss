'use strict'

//Aquí hay un ejemplo del uso de Object.values para recorrer los valores de propiedad:
let user = {
    name: "John",
    age: 30
  };
  
  // bucle sobre los valores
  for (let value of Object.values(user)) {
    alert(value); // John, luego 30
  }