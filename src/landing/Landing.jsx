import bannerSL from "../img/bannerSL.png";
import { useTranslation } from "react-i18next";

export default function Landing() {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-darkBlue font-title ">
        <section className="flex justify-center items-center relative xs:hidden s:hidden ">
          <img
            src={bannerSL}
            className="lg:h-1/4 md:h-auto xs:hidden s:hidden lg:w-[100vw]"
          />
          <h2 className="text-white font-title tracking-wide font-light text-end absolute bottom-0 lg:right-72 md:right-20 lg:mb-28 md:mb-10 lg:text-4xl">
            {t("primerrenglonLarge")}
            <br /> {t("segundorenglonLarge")}
            <br /> {t("tercerrenglonLarge")}
          </h2>
        </section>
        <div className="lg:hidden md:hidden flex justify-center relative xs:h-1/4 ">
          <img src={bannerSL} className="xs:mr-16 s:mr-10 " />
          <h2 className="text-white font-title font-light leading-10 absolute bottom-0 right-2 mb-8 mr-4 text-3xl">
            {t("primerrenglonSmall")} <br />
            {t("segundorenglonSmall")} <br />
            {t("tercerrenglonSmall")},
            <br /> {t("cuartorenglonSmall")} <br />
            {t("quintorenglonSmall")} <br />
            {t("sextorenglonSmall")}
          </h2>
        </div>
        <div className=" bg-darkBlue flex flex-col md:p-10 s:p-9 xs:p-8 lg:py-24">
          <p className="text-center tracking-wider lg:leading-11 whitespace-pre-line text-base md:text-3xl lg:p-20 p-6 s:text-lg xs:text-md ">
            <span className="font-bold text-base text-xl s:text-md xs:text-md md:text-3xl">
              Malm Green & Lerner Abogados
            </span>
            {t("landingP1")}
          </p>
        </div>
      </div>
    </>
  );
}
