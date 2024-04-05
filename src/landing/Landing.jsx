import bannerSL from "../img/bannerSL.png";
import { useTranslation } from "react-i18next";

export default function Landing() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="text-darkBlue font-title">
        <section className="flex justify-center items-center relative xs:hidden s:hidden h-1/4 md:overflow-hidden ">
          <img
            src={bannerSL}
            className="lg:h-1/4 xs:hidden s:hidden lg:w-[100vw]"
          />
          <h2 className="text-white font-title tracking-wide font-light text-end absolute bottom-0 lg:right-72 md:right-24 md:text-4xl lg:mb-28 md:mb-16 lg:text-4xl">
            {t("primerrenglonLarge")}
            <br /> {t("segundorenglonLarge")}
            <br /> {t("tercerrenglonLarge")}
          </h2>
        </section>
        <div className="lg:hidden md:hidden flex justify-center items-center relative h-1/4 overflow-hidden ">
          <img src={bannerSL} className="" />
          <h2
            className={`text-white font-title font-light leading-10 xs:mt-32 xs:mr-${
              i18n.language === "es" ? 14 : 9
            } s:mt-32 s:mr-20 absolute text-2xl`}
          >
            {t("primerrenglonSmall")} <br />
            {t("segundorenglonSmall")} <br />
            {t("tercerrenglonSmall")},
            <br /> {t("cuartorenglonSmall")} <br />
            {t("quintorenglonSmall")} <br />
            {t("sextorenglonSmall")}
          </h2>
        </div>
        <div className=" bg-darkBlue flex flex-col lg:p-40 md:px-20 md:py-32 s:px-6 s:py-20 xs:px-6 xs:py-16 ">
          <p className="text-center tracking-wider font-light lg:leading-loose s:leading-loose md:leading-relaxed whitespace-pre-line text-base md:text-3xl p-6 s:text-lg xs:text-xl xs:leading-8 ">
            <span className="font-semibold text-base text-xl s:text-md xs:text-md md:text-3xl">
              Malm Green & Lerner Abogados
            </span>
            {t("landingP1")}
          </p>
        </div>
      </div>
    </>
  );
}
