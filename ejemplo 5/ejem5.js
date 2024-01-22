'use strict'

//ejemplo Iteración sobre Set
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// lo mismo que forEach:
set.forEach((value, valueAgain, set) => {
  alert(value);
});
