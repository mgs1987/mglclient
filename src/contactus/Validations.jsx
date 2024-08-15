export const validationsForm = (infoForm) => {
  let errors = {};
  let regexNameAndMessage = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPhoneNumber = /^(\+[1-9]{1}[0-9]{3,14})?([0-9]{9,14})$/;

  if (!infoForm.user_name.trim()) {
    errors.user_name = "El campo Nombre es requerido";
  } else if (!regexNameAndMessage.test(infoForm.user_name.trim())) {
    errors.user_name = "El campo Nombre solo acepta letras y espacios";
  }
  if (!infoForm.user_email.trim()) {
    errors.user_email = "La direccion de correo electronico es requerida";
  } else if (!regexEmail.test(infoForm.user_email.trim())) {
    errors.user_email = "La direccion de correo electronico es incorrecta";
  }
  if (!infoForm.message.trim()) {
    errors.message = "El mensaje es requerido";
  } else if (!regexNameAndMessage.test(infoForm.message.trim())) {
    errors.message = "El campo solo acepta letras y espacios";
  }
  if (!regexPhoneNumber.test(infoForm.phone.trim())) {
    errors.phone = "El campo solo acepta numeros";
  }
  return errors;
};
