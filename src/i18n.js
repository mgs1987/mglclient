import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nBackend from "i18next-http-backend";
i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    lng: "es",
    fallbackLng: "es",
    detection: {
      checkWhitelist: true,
    },
    debug: false,
    backend: {
      loadPath: "https://mglabogados.com/i18n/{{lng}}.json",
    },
  });

export default i18n;
