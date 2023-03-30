import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    pl: {
      translation: {
        popup: "Sprawdź to!",
        changeDisplay: "Zmieniono sposób wyświetlania wiadomości.",
        changeLangaugeButton: "Zmień język",
        page: "na stronę"
      },
    },
    en: {
      translation: {
        popup: "Check it!",
        changeDisplay: "The display format for news has been changed.",
        changeLangaugeButton: "Change Language",
        page: "per page"
      },
    },
  },
});

export default i18n;
