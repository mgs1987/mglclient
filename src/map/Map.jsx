import palermo from "../img/palermo.jpg";
import wsp from "../img/wsp.png";
import tel from "../img/tel.png";
import mail from "../img/mail.png";
import { useTranslation } from "react-i18next";
export default function Map() {
  const { t } = useTranslation();
  return (
    <div className="bg-base grid grid-cols-2 xs:grid-cols-1 s:grid-cols-1 lg:gap-0 text-base font-title lg:h-72 lg:py-4 md:h-64 md:px-1 md:py-12 s:h-48 xs:h-48 xs:py-5 s:py-5">
      <img
        src={palermo}
        alt="pal"
        className="lg:h-72 md:h-64 hidden lg:block md:block md:w-[50vw] lg:w-[50vw] max-w-screen-2xl"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <section className="bg-darkBlue leading-3 flex justify-center flex-col items-center xs:w-full xs:max-w-full">
        <section className="s:text-start xs:text-start xs:text-sm ">
          <h3 className="text-md s:text-sm ">{t("emergency")} </h3>
          <p className="s:leading-none flex items-center s:text-sm ">
            <img
              src={tel}
              alt="tel"
              className="h-4 lg:ml-1 lg:mr-2 md:h-5 md:ml-0 md:mr-1 s:mr-2 xs:mr-2"
            />
            + 54 9 (11) 6187-9552 (Argentina)
          </p>
          <p className="leading-3 flex items-center s:text-sm">
            <img
              src={wsp}
              alt="wsp"
              className="h-4 lg:ml-1 lg:mr-2 md:h-5 md:ml-0 md:mr-1 s:mr-2 xs:mr-2"
            />
            +1 (437) 858 2301 {t("ext")}
          </p>
          <p className="leading-3 flex items-center s:text-sm">
            <img
              src={mail}
              alt="mail"
              className="h-3 lg:ml-1 lg:mr-2 md:h-5 md:ml-0 md:mr-1 s:mr-2 xs:mr-2 "
            />
            consultas.mglabogados@gmail.com
          </p>
        </section>
      </section>
    </div>
  );
}
