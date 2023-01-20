/*  
    A callback is a function that will be executed after another 
    function gets executed.

    This is also a function that you can pass as an argument.
*/

// setTimeout(() => {
//   console.log("Hola mundo");
// }, 1000);

const getUsuarioByID = (id, callback) => {
  const usuario = {
    id,
    nombre: "Héctor",
  };

  setTimeout(() => {
    callback(usuario);
  }, 1500);
};

getUsuarioByID(10, (usuario) => {
  console.log(usuario.id);
  console.log(usuario.nombre.toUpperCase());
});
