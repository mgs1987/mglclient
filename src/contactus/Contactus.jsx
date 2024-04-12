import { useTranslation } from "react-i18next";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "../hook/useForm";
import { toast } from "react-toastify";
import axios from "axios";

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
  } else if (!regexNameAndMessage.test(infoForm.message.trim())) {
    errors.message = "El campo solo acepta letras y espacios";
  }
  if (!regexPhoneNumber.test(infoForm.phone.trim())) {
    errors.phone = "El campo solo acepta numeros";
  }
  return errors;
};
export default function Contactus() {
  const SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID;
  const TEMPLATE = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY;
  const POST_CONTACTS = import.meta.env.VITE_POST_CONTACTS;

  const form = useRef();
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE, form.current, {
        publicKey: KEY,
      })
      .then(
        () => {
          toast.success("Formulario enviado con exito!");
          axios.post(POST_CONTACTS, infoForm);
          setInfoForm({
            user_name: "",
            phone: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  const { infoForm, setInfoForm, errors, handleChange, handleBlur } =
    useForm(validationsForm);
  return (
    <div className="flex flex-col justify-center items-center bg-base lg:py-20 s:pb-16 xs:pb-14">
      <h1 className="font-title text-darkBlue font-semibold lg:text-5xl flex justify-center mt-16 s:text-center xs:mt-8 s:mt-11 md:text-5xl s:text-5xl xs:text-4xl xs:text-center ">
        {t("contactus")}
      </h1>
      <form
        ref={form}
        onSubmit={(e) => sendEmail(e)}
        className="flex flex-col lg:justify-center lg:items-center px-4 lg:p-0 lg:w-[88vw] max-w-screen-xl w-[75vw]"
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
          className="font-title  lg:w-2/3 lg:h-[90px] h-[50px] shadow-xl lg:my-2 my-0 mt-2 lg:mt-0 lg:ml-0 rounded-md bg-gray-100  border-hidden md:h-[96px] s:h-[94px] xs:h-[94px]"
          placeholder={t("message")}
          type="text"
          name="message"
          required
        ></textarea>
        {errors.message && (
          <p className="font-title text-red-500 text-xs">*{errors.message}</p>
        )}
        <p className="font-regular leading-5 font-title text-darkBlue text-end">
          {t("campoobligatorio")}
        </p>
        <section className="flex lg:justify-center justify-center lg:w-2/3 lg:mt-10 mt-5 ">
          <button
            className="cursor-pointer font-title lg:text-2xl bg-darkBlue text-white rounded-md lg:w-64 w-40 xs:w-32 lg:py-2 lg:px-5  lg:h-[48px] h-[38px] mb-4 py-2 px-4 md:text-2xl md:h-[50px] s:text-2xl s:h-[52px] xs:text-xl xs:h-[52px]  "
            type="submit"
          >
            {t("sendButton")}
          </button>
        </section>
      </form>
    </div>
  );
}
