import { useState } from "react";

export const useForm = (initialForm, validationsForm) => {
  const [infoForm, setInfoForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoForm({ ...infoForm, [name]: value });
  };
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validationsForm(infoForm));
  };

  return {
    infoForm,
    errors,
    handleChange,
    handleBlur,
  };
};
