const empleados = [
  { id: 1, nombre: "Héctor" },
  { id: 2, nombre: "Ana" },
  { id: 3, nombre: "Iyari" },
];

const salarios = [
  { id: 1, salario: 1000 },
  { id: 2, salario: 5000 },
];

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    empleado
      ? resolve(empleado)
      : reject(`El empleado con el id ${id} no existe`);
  });
};

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find((s) => s.id === id)?.salario;
    salario
      ? resolve(salario)
      : reject(`El salario para el empleado con id ${id} no existe`);
  });
};

const id = 4;

// getEmpleado(id)
//   .then((empleado) => console.log(empleado))
//   .catch((err) => console.error(err));

// getSalario(id)
//   .then((salario) => console.log(salario))
//   .catch((err) => console.error(err));

// !This is a bad use for promises
// getEmpleado(id)
//   .then((empleado) =>
//     getSalario(id)
//       .then((salario) =>
//         console.log(`El empleado ${empleado} tiene un salario de ${salario}`)
//       )
//       .catch((err) => console.error(err))
//   )
//   .catch((err) => console.error(err));

// Primises chaining

let nombre;
getEmpleado(id)
  .then((empleado) => {
    nombre = empleado;
    return getSalario(id);
  })
  .then((salario) =>
    console.log(`El empleado ${nombre} tiene un salario de ${salario}`)
  )
  .catch((err) => console.error(err));
