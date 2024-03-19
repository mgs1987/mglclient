const regexOnlyLetters = /^[a-zA-Z\s]+$/;
const regexSpaces = /^\s*$/;
const regexOnlyNumbers = /^[0-9]+$/;
const regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2}$/i;

const validate = (input) => {
  const errors = {};

  if (!input.name || input.name === undefined) {
    errors.name = "El campo no puede estar vacio";
  } else if (input.name.length > 20) {
    errors.name = "El nombre no puede exceder 20 caracteres";
  } else if (!regexOnlyLetters.test(input.name)) {
    errors.name = "El nombre solo puede contener letras";
  } else if (regexSpaces.test(input.name)) {
    errors.name = "El nombre no puede ser un string de espacios";
  }

  if (!input.rol || input.rol === undefined) {
    errors.rol = "El campo no puede estar vacio";
  } else if (input.rol.length > 20) {
    errors.rol = "El rol no puede superar 20 caracteres";
  } else if (regexSpaces.test(input.rol)) {
    errors.rol = "El rol no puede ser un string de espacios";
  }

  /* if (!input.specialty || input.specialty === undefined) {
    errors.specialty = "El campo no puede estar vacio";
  } else if (input.specialty.length > 40) {
    errors.specialty = "La descripción no puede superar 40 caracteres";
  } else if (regexSpaces.test(input.specialty)) {
    errors.specialty = "La especialidad no puede ser un string de espacios";
  } */

  if (!input.email || input.email === undefined) {
    errors.email = "El campo no puede estar vacio";
  } else if (regexEmail.test(input.email)) {
    errors.email = "Ingrese un correo electronico valido";
  }

  if (!input.linkedin || input.linkedin === undefined) {
    errors.linkedin = "El campo no puede estar vacio";
  }

  if (!input.description || input.description === undefined) {
    errors.description = "Debe definir una fecha para su servicio";
  } else if (regexSpaces.test(input.description)) {
    errors.description = "La descripción no puede ser un string de espacios";
  }

  return errors;
};

export default validate;
