import { useState } from "react";

export default function useForm(validationsForm) {
  const [infoForm, setInfoForm] = useState({
    user_name: "",
    phone: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...infoForm, [name]: value };
    setInfoForm(updatedForm);

    // Validar en tiempo real mientras el usuario escribe
    const allErrors = validationsForm(updatedForm);
    setErrors(allErrors);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    // Marcar el campo como tocado cuando pierde el foco
    setTouched({ ...touched, [name]: true });
    // Validar todo el formulario
    setErrors(validationsForm(infoForm));
  };

  return {
    infoForm,
    setInfoForm,
    errors,
    handleChange,
    handleBlur,
  };
}
