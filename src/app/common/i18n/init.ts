import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

// language files
import { english } from "./locales/en-US";
import { japanese } from "./locales/ja-JP";
import { chinese } from "./locales/zh-CN";

const resources: Resource = {
  en: { translation: english },
  ja: { translation: japanese },
  "zh-CN": { translation: chinese },
};

// set i18n
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: navigator.language,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
