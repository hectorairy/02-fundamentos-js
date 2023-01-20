// Let & const create scope variables
// var creates global variables
// const is lighter than let and the value never changes

var nombre = "Wolverine";

if (true) {
  var nombre = "Magneto";
}

console.log(nombre);

let nombreLet = "Wolverine";

if (true) {
  let nombreLet = "Magneto";
}

console.log(nombreLet);

const nombreConst = "Wolverine";

if (true) {
  const nombreConst = "Magneto";
}

console.log(nombreConst);
