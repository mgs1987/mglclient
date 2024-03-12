import { useState } from "react";
import { useTranslation } from "react-i18next";
export default function Contactus() {
  const { t } = useTranslation();
  const [infoForm, setInfoForm] = useState();

  const handleSubmit = () => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfoForm({ ...infoForm, [name]: value });
  };
  return (
    <>
      <h1 className="font-title text-darkBlue font-bold flex justify-center">
        {t("contactus")}
      </h1>
      <form
        id="contact-form"
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col lg:ml-80 px-4 lg:p-0"
      >
        <input
          onChange={handleChange}
          className="font-title w-[88vw] lg:w-2/3 lg:h-[50px] lg:my-2 my-0 lg:ml-0 drop-shadow-2xl border-hidden bg-gray-100  lg:rounded-2xl md:rounded-xl rounded-xl"
          placeholder={t("completename")}
          type="text"
          name="user_name"
        />
        <input
          onChange={handleChange}
          className="font-title w-[88vw] lg:w-2/3 lg:h-[50px] lg:my-2 my-0 lg:ml-0 bg-gray-100  border-hidden lg:rounded-2xl md:rounded-xl rounded-xl"
          placeholder={t("phone")}
          type="text"
          name="phone"
        />
        <input
          onChange={handleChange}
          className="font-title w-[88vw] lg:w-2/3 lg:h-[50px] lg:my-2 my-0 lg:ml-0 bg-gray-100  border-hidden lg:rounded-2xl md:rounded-xl rounded-xl"
          placeholder={t("email")}
          type="text"
          name="user_email"
        />
        <textarea
          onChange={handleChange}
          className="font-title w-[88vw] lg:w-2/3 lg:h-[50px] lg:my-2  lg:ml-0 bg-gray-100  border-hidden rounded-2xl mt-3 p-4 lg:mt-0 lg:p-0 lg:py-10"
          placeholder={t("message")}
          type="text"
          name="description"
        ></textarea>
        <section className="flex lg:justify-end justify-center lg:w-2/3 lg:mt-10 mt-5">
          <button
            className="font-title border border-blue-950 rounded-2xl bg-darkBlue text-white lg:py-2 lg:px-5 lg:w-[113px] lg:h-[48px] lg:mb-10 mb-4 py-2 px-4"
            type="submit"
          >
            {t("sendButton")}
          </button>
        </section>
      </form>
    </>
  );
}
