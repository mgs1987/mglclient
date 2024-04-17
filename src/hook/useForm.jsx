import { useState } from "react";

export default function useForm(validationsForm) {
  const [infoForm, setInfoForm] = useState({
    user_name: "",
    phone: "",
    user_email: "",
    message: "",
  });
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
    setInfoForm,
    errors,
    handleChange,
    handleBlur,
  };
}
