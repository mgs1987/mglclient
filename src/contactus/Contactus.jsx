import { useTranslation } from "react-i18next";
export default function Contactus() {
  const { t } = useTranslation();
  return (
    <>
      <h1 className="font-title text-darkBlue font-bold flex justify-center">
        {t("contactus")}
      </h1>
      <form id="contact-form" className="flex flex-col lg:ml-80 px-4 lg:p-0">
        <input
          className="w-[88vw] lg:w-2/3 lg:h-[50px] lg:my-2 my-0 lg:ml-0 border border-darkBlue  lg:rounded-2xl md:rounded-xl rounded-xl"
          placeholder="Nombre y Apellido"
          type="text"
          name="user_name"
        />
        <input
          className="w-[88vw] lg:w-2/3 lg:h-[50px] lg:my-2 my-0 lg:ml-0 border border-darkBlue  lg:rounded-2xl md:rounded-xl rounded-xl"
          placeholder="Teléfono"
          type="text"
          name="phone"
        />
        <input
          className="w-[88vw] lg:w-2/3 lg:h-[50px] lg:my-2 my-0 lg:ml-0 border border-darkBlue  lg:rounded-2xl md:rounded-xl rounded-xl"
          placeholder="Correo electrónico"
          type="text"
          name="user_email"
        />
        <textarea
          className="w-[88vw] lg:w-2/3 lg:h-[50px] lg:my-2  lg:ml-0 border  border-darkBlue  rounded-2xl mt-3 p-4 lg:mt-0 lg:p-0 lg:py-10"
          placeholder=" Mensaje"
          type="message"
        ></textarea>
        <section className="flex lg:justify-end justify-center lg:w-2/3 lg:mt-10 mt-5">
          <button
            className="border border-blue-950 rounded-2xl bg-darkBlue text-white lg:py-2 lg:px-5 lg:w-[113px] lg:h-[48px] lg:mb-10 mb-4 py-2 px-4"
            type="submit"
          >
            {t("sendButton")}
          </button>
        </section>
      </form>
    </>
  );
}
