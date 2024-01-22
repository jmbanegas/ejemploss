'use strict'
//ejemplo con Symbol.iterator
let range = {
    from: 1,
    to: 5
  };
  // 1. Una llamada a for..of inicializa una llamada a esto:
  range[Symbol.iterator] = function() {
  
    // ... devuelve el objeto iterador:
    // 2. En adelante, for..of trabaja solo con el objeto iterador debajo, pidiéndole los siguientes valores
    return {
      current: this.from,
      last: this.to,
      // 3. next() es llamado en cada iteración por el bucle for..of
      next() {
        // 4. debe devolver el valor como un objeto {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }; 
  for (let num of range) {
    alert(num); // 1, luego 2, 3, 4, 5
  }