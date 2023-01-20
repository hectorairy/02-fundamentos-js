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

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return `El empleado ${empleado} tiene un salario de ${salario}`;
  } catch (error) {
    throw error;
  }
};

const id = 4;

getInfoUsuario(id)
  .then((msg) => {
    console.log("TODO BIEN!!!");
    console.log(msg);
  })
  .catch((error) => {
    console.log("TODO MAL!!!");
    console.log(error);
  });
