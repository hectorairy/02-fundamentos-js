// With arrow functions you have the possibility to create an implicit return

/* Main difference between arrow functions and regular functions is that
Arrow functions don’t have their own this, and they don’t redefine 
the value of this within the function.

this inside an arrow function always refers to this from the outer context.

*/

function sumar(a, b) {
  return a + b;
}

// const sumar = (a, b) => a + b;

const saludar = () => "Hola Mundo";

console.log(sumar(5, 10));
console.log(saludar());
