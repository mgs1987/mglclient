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
          onChange={handleChange}
          className="font-title lg:w-2/3 lg:h-[50px] h-[30px] lg:my-2 my-0 lg:ml-0 rounded-md border-hidden bg-gray-100 shadow-xl "
          placeholder={t("completename")}
          type="text"
          name="user_name"
        />
        <input
          onChange={handleChange}
          className="font-title lg:w-2/3 lg:h-[50px] h-[30px] lg:my-2 my-0 mt-2 lg:mt-0 lg:ml-0 rounded-md bg-gray-100  border-hidden shadow-xl "
          placeholder={t("phone")}
          type="text"
          name="phone"
        />
        <input
          onChange={handleChange}
          className="font-title  lg:w-2/3 lg:h-[50px] h-[30px] lg:my-2 my-0 mt-2 lg:mt-0 lg:ml-0 rounded-md bg-gray-100  border-hidden shadow-xl "
          placeholder={t("email")}
          type="text"
          name="user_email"
        />
        <textarea
          onChange={handleChange}
          className="font-title  lg:w-2/3 lg:h-[90px] h-[50px] shadow-xl lg:my-2 my-0 mt-2 lg:mt-0 lg:ml-0 rounded-md bg-gray-100  border-hidden"
          placeholder={t("message")}
          type="text"
          name="description"
        ></textarea>
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
