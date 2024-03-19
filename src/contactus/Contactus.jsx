import { useForm } from "../hook/useForm";
import { useTranslation } from "react-i18next";

const initialForm = { user_name: "", phone: "", user_email: "", message: "" };

const validationsForm = (infoForm) => {
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
  } else if (!regexNameAndMessage(infoForm.message.trim())) {
    errors.message = "El campo solo acepta letras y espacios";
  }
  if (!regexPhoneNumber.test(infoForm.phone.trim())) {
    errors.phone = "El campo solo acepta numeros";
  }
  return errors;
};
export default function Contactus() {
  const { infoForm, errors, handleChange, handleSubmit, handleBlur } = useForm(
    initialForm,
    validationsForm
  );
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center bg-base">
      <h1 className="font-title text-darkBlue flex justify-center mt-16 s:text-2xl xs:text-2xl xs:mt-8 s:mt-11 md:text-3xl">
        {t("contactus")}
      </h1>
      <form
        id="contact-form"
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col lg:ml-80 px-4 lg:p-0 lg:w-[88vw] w-[70vw]"
      >
        <input
          value={infoForm.user_name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="font-title lg:w-2/3 lg:h-[50px] h-[30px] lg:my-2 my-0 lg:ml-0 rounded-md border-hidden bg-gray-100 shadow-xl "
          placeholder={t("completename")}
          type="text"
          name="user_name"
          required
        />
        {errors.user_name && (
          <p className="font-title text-red-500 text-xs">*{errors.user_name}</p>
        )}
        <input
          value={infoForm.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className="font-title lg:w-2/3 lg:h-[50px] h-[30px] lg:my-2 my-0 mt-2 lg:mt-0 lg:ml-0 rounded-md bg-gray-100  border-hidden shadow-xl "
          placeholder={t("phone")}
          type="text"
          name="phone"
        />
        {errors.phone && (
          <>
            <p className="font-title text-darkBlue text-xs">
              *Campo NO obligatorio
            </p>
            <p className="font-title text-red-500 text-xs">{errors.phone}</p>
          </>
        )}
        <input
          value={infoForm.user_email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="font-title  lg:w-2/3 lg:h-[50px] h-[30px] lg:my-2 my-0 mt-2 lg:mt-0 lg:ml-0 rounded-md bg-gray-100  border-hidden shadow-xl "
          placeholder={t("email")}
          type="text"
          name="user_email"
          required
        />
        {errors.user_email && (
          <p className="font-title text-red-500 text-xs">
            *{errors.user_email}
          </p>
        )}
        <textarea
          value={infoForm.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className="font-title  lg:w-2/3 lg:h-[90px] h-[50px] shadow-xl lg:my-2 my-0 mt-2 lg:mt-0 lg:ml-0 rounded-md bg-gray-100  border-hidden"
          placeholder={t("message")}
          type="text"
          name="message"
          required
        ></textarea>
        {errors.message && (
          <p className="font-title text-red-500 text-xs">*{errors.message}</p>
        )}
        <section className="flex lg:justify-center justify-center lg:w-2/3 lg:mt-10 mt-5 ">
          <button
            className="font-title lg:text-lg bg-darkBlue text-white rounded-md lg:w-64 w-40 xs:w-32 lg:py-2 lg:px-5  lg:h-[48px] h-[38px] lg:mb-10 mb-4 py-2 px-4"
            type="submit"
          >
            {t("sendButton")}
          </button>
        </section>
      </form>
    </div>
  );
}
