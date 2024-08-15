import bannerSL from "../img/bannerSL.webp";
import { useTranslation } from "react-i18next";

export default function Landing() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="text-darkBlue font-title bg-darkBlue ">
        <section className="main-content-landing">
          <img src={bannerSL} className="img-landing" />
          <h2 style={{ maxWidth: "70%" }} className="h2-landing">
            {t("primerrenglonLarge")}
            <br className="lg:block md:hidden" /> {t("segundorenglonLarge")}
            <br className="lg:block md:hidden" /> {t("tercerrenglonLarge")}
          </h2>
        </section>
        <div className="img-banner-landing">
          <img src={bannerSL} />
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
        <div className="sub-div-banner md:px-18">
          <p className="p-land s:text-md xs:text-md">
            <span className="span-land">Malm Green & Lerner Abogados</span>
            {t("landingP1")}
          </p>
        </div>
      </div>
    </>
  );
}
