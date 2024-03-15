const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2}$/i;

const regexPassword =
  /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,10}$/;

const validation = (inputs) => {
  let error = {};
  console.log(inputs, regexEmail.test(inputs.email));

  if (regexEmail.test(inputs.email)) {
    error.email = "Ingrese un correo electronico valido";
  }
  if (inputs.email === "") {
    error.email = "El nombre de usuario no puede estar vacío";
  }
  if (!regexPassword.test(inputs.password)) {
    error.password =
      "la contraseña debe tener al menos un número, cáracter especial, mayuscula y debe tener entre 6 y 10 caracteres";
  }
  if (inputs.password?.length === 0) {
    error.password = "Ingrese una contraseña";
  }

  return error;
};

export default validation;
