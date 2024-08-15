import { useTranslation } from "react-i18next";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import useForm from "../hook/useForm";
import { toast } from "react-toastify";
import { validationsForm } from "./Validations";

export default function Contactus() {
  const SERVICE_ID = import.meta.env.VITE_YOUR_SERVICE_ID;
  const TEMPLATE = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const KEY = import.meta.env.VITE_YOUR_PUBLIC_KEY;

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
    <div className="main-container-form ">
      <h1 className="h1-form ">{t("contactus")}</h1>
      <form
        ref={form}
        onSubmit={(e) => sendEmail(e)}
        className="form-main-container"
      >
        <input
          value={infoForm.user_name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="input-field1"
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
          className="input-field2"
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
          className="input-field3 "
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
          className="textarea-form"
          placeholder={t("message")}
          type="text"
          name="message"
          required
        ></textarea>
        {errors.message && (
          <p className="font-title text-red-500 text-xs">*{errors.message}</p>
        )}
        <p className="p-section-btn font-regular">{t("campoobligatorio")}</p>
        <section className="btn-sec">
          <button className="btn-form" type="submit">
            {t("sendButton")}
          </button>
        </section>
      </form>
    </div>
  );
}
