import bannerSL from "../img/bannerSL.png";
import { useTranslation } from "react-i18next";

export default function Landing() {
  const { t } = useTranslation();
  return (
    <>
      <div className="text-darkBlue font-title">
        <section className="flex justify-center relative xs:hidden s:hidden">
          <img
            src={bannerSL}
            className="lg:w-[100vw] lg:h-auto md:w-[100vw] md:h-auto xs:hidden s:hidden"
          />
          <h2 className="text-white font-title text-end font-light absolute bottom-0 lg:right-36 md:right-20 lg:mb-28 md:mb-10 lg:text-5xl">
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
        <article className="lg:p-20 bg-darkBlue flex flex-col md:p-10 s:p-9 xs:p-8">
          <p className="text-center whitespace-pre-line text-base text-xl lg:p-10 p-6 s:text-md xs:text-sm">
            <span className="font-bold text-base text-xl s:text-md xs:text-sm">
              Malm Green & Lerner Abogados
            </span>
            {t("landingP1")}
          </p>
        </article>
      </div>
    </>
  );
}
