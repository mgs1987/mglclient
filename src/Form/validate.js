import React from "react";
const regexOnlyLetters = /^[a-zA-Z\s]+$/;
const regexSpaces = /^\s*$/;
const regexOnlyNumbers = /^[0-9]+$/;

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

  if (!input.type_bike || input.type_bike === undefined) {
    errors.type_bike = "El campo no puede estar vacio";
  } else if (input.type_bike.length > 20) {
    errors.type_bike = "La descripción no puede superar 20 caracteres";
  } else if (regexSpaces.test(input.type_bike)) {
    errors.type_bike = "El tipo no puede ser un string de espacios";
  }

  if (!input.upkeep || input.upkeep === "" || input.upkeep === undefined) {
    errors.upkeep = "El campo no puede estar vacio";
  } else if (input.upkeep.length > 40) {
    errors.upkeep = "La descripción no puede superar 40 caracteres";
  } else if (regexSpaces.test(input.upkeep)) {
    errors.upkeep = "El servicio no puede ser un string de espacios";
  }

  if (!input.phone_number || input.phone_number === undefined) {
    errors.phone_number = "El campo no puede estar vacio";
  } else if (input.phone_number.length > 11) {
    errors.phone_number = "El campo no puede exceder 10 caracteres";
  } else if (!regexOnlyNumbers.test(input.phone_number)) {
    errors.phone_number = "El número no puede contener letras";
  }

  if (!input.date || input.date === undefined) {
    errors.date = "Debe definir una fecha para su servicio";
  }

  return errors;
};

export default validate;
