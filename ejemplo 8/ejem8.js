'use strict'

// `rest` es un array de ítems, comenzando en este caso por el tercero.
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2

//Desestructuración anidada
let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // la asignación desestructurante fue dividida en varias líneas para mayor claridad
  let {
    size: { // colocar tamaño aquí
      width,
      height
    },
    items: [item1, item2], // asignar ítems aquí
    title = "Menu" // no se encuentra en el objeto (se utiliza valor predeterminado)
  } = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  alert(item1);  // Cake
  alert(item2);  // Donut