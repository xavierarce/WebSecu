import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en_EN from "../../locales/en_EN.json";
import es_ES from "../../locales/es_ES.json";
import fr_FR from "../../locales/fr_FR.json";

export const languageResources = {
  en_EN: { translation: en_EN },
  es_ES: { translation: es_ES },
  fr_FR: { translation: fr_FR },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en_EN",
  fallbackLng: "es_ES",
  resources: languageResources,
});

export default i18next;
