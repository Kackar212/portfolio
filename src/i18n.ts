import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translation from "../translation.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: translation,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
