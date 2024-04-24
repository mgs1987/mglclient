import bannerSL from "../img/bannerSL.png";
import { useTranslation } from "react-i18next";

export default function Landing() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="text-darkBlue font-title bg-darkBlue ">
        <section className="flex justify-center items-center relative xs:hidden s:hidden h-1/4 md:overflow-hidden sm:overflow-hidden ">
          <img src={bannerSL} className="lg:h-1/4 xs:hidden s:hidden " />
          <h2
            style={{ maxWidth: "70%" }}
            className="text-white text-right font-title tracking-wide font-light absolute bottom-0 lg:right-10 lg:left-52 md:right-16 md:text-4xl sm:right-16 sm:text-3xl sm:mb-16 lg:mb-36 md:mb-16 lg:text-4xl"
          >
            {t("primerrenglonLarge")}
            <br className="lg:block md:hidden" /> {t("segundorenglonLarge")}
            <br className="lg:block md:hidden" /> {t("tercerrenglonLarge")}
          </h2>
        </section>
        <div className="lg:hidden md:hidden sm:hidden flex justify-center items-center relative h-1/4 overflow-hidden ">
          <img src={bannerSL} className="" />
          <h2
            className={`text-white font-title font-light leading-10 xs:mt-32 xs:mr-${
              i18n.language === "es" ? 14 : 8
            } s:mt-32 s:mr-22 absolute text-2xl`}
          >
            {t("primerrenglonSmall")} <br />
            {t("segundorenglonSmall")} <br />
            {t("tercerrenglonSmall")},
            <br /> {t("cuartorenglonSmall")} <br />
            {t("quintorenglonSmall")} <br />
            {t("sextorenglonSmall")}
          </h2>
        </div>
        <div className=" bg-darkBlue flex flex-col lg:px-40 md:px-18 md:py-32 s:px-6 s:py-20 xs:px-6 xs:py-16 ">
          <p className="lg:mx-8 lg:px-10 text-center tracking-wider font-light lg:leading-loose s:leading-loose md:leading-relaxed whitespace-pre-line text-base md:text-2xl sm:text-xl sm:leading-10 sm:p-20 lg:p-16 s:text-lg xs:text-lg xs:leading-8 xs:p-8 s:p-10  ">
            <span className="font-semibold text-base text-xl s:text-md xs:text-md md:text-2xl sm:text-2xl">
              Malm Green & Lerner Abogados
            </span>
            {t("landingP1")}
          </p>
        </div>
      </div>
    </>
  );
}
