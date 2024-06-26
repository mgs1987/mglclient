import palermo from "../img/palermo.jpg";
import wsp from "../img/wsp.png";
import tel from "../img/tel.png";
import mail from "../img/mail.png";
import { useTranslation } from "react-i18next";
export default function Map() {
  const { t } = useTranslation();
  return (
    <div className="bg-base grid lg:grid-cols-2 xs:grid-cols-1 s:grid-cols-1 sm:grid-cols-1 lg:gap-0 text-base font-title lg:h-72 lg:py-4 md:h-64 md:py-12 s:h-48 xs:h-48 xs:py-5 s:py-5  sm:h-60 sm:px-1 sm:pt-28 sm:pb-16 lg:w-[100vw]">
      <img
        src={palermo}
        alt="pal"
        className="lg:h-72 md:h-64 hidden lg:block md:w-[50vw] lg:w-[50vw]"
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <section className="bg-darkBlue leading-3 flex justify-center flex-col items-center xs:w-full xs:max-w-full">
        <section className="s:text-start xs:text-start xs:text-sm ">
          <h3 className="text-md s:text-sm sm:text-xl ">{t("emergency")} </h3>
          <p className="s:leading-none flex items-center s:text-sm ">
            <img
              src={tel}
              alt="tel"
              className="h-4 lg:ml-1 lg:mr-2 md:h-5 md:ml-0 md:mr-1 s:mr-2 xs:mr-2 sm:h-5 sm:ml-0 sm:mr-2"
            />
            <a
              className="text-white no-underline cursor-pointer"
              href="tel:+ 54 9 (11) 6187-9552"
            >
              + 54 9 (11) 6187-9552 (Argentina)
            </a>
          </p>
          <p className="leading-3 flex items-center s:text-sm">
            <img
              src={wsp}
              alt="wsp"
              className="h-4 lg:ml-1 lg:mr-2 md:h-5 md:ml-0 md:mr-1 s:mr-2 xs:mr-2  sm:h-5 sm:ml-0 sm:mr-2"
            />
            + 1 (437) 858 2301 {t("ext")}
          </p>
          <p className="leading-3 flex items-center s:text-sm">
            <img
              src={mail}
              alt="mail"
              className="h-3 lg:ml-1 lg:mr-2 md:h-5 md:ml-0 md:mr-1 s:mr-2 xs:mr-2  sm:h-5 sm:ml-0 sm:mr-2"
            />
            <a
              className="text-white no-underline cursor-pointer"
              href="mailto:consultas.mglabogados@gmail.com"
            >
              consultas.mglabogados@gmail.com
            </a>
          </p>
        </section>
      </section>
    </div>
  );
}
