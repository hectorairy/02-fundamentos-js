/*
  The phenomenon which happens when we nest multiple callbacks 
  within a function is called a callback hell. 
*/

const empleados = [
  { id: 1, nombre: "Héctor" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Iyari" },
];

const salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 5000 },
];

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;
  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con el id ${id} no existe`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((s) => s.id === id)?.salario;

  if (salario) {
    callback(null, salario);
  } else {
    callback(`El salario para el empleado con id ${id} no existe`);
  }
};

const id = 10;

getEmpleado(id, (err, empleado) => {
  if (err) {
    console.log("ERROR!");
    return console.log(err);
  }

  getSalario(id, (err, salario) => {
    if (err) {
      return console.log(err);
    }
    console.log(`El empleado: ${empleado} tiene un salario de ${salario}`);
  });
});
