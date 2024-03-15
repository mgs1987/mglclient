import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//import LanguageDetector from "i18next-browser-languagedetector";
import i18nBackend from "i18next-http-backend";
const getCurrentHost =
  import.meta.env.MODE === "development"
    ? "http://localhost:5173"
    : "LINK TO PROD";
i18n
  .use(i18nBackend)
  //.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "es",
    fallbackLng: "es",
    detection: {
      checkWhitelist: true,
    },
    debug: false,
    backend: {
      loadPath: `${getCurrentHost}/i18n/{{lng}}.json`,
    },
  });

export default i18n;