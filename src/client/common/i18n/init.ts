/**
 * setting i18n & init
 */

import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

// TODO: add Other locales file
import enUS from "./locales/en-US";
import jaJp from "./locales/ja-JP";
import zhCN from "./locales/zh-CN";

const resources: Resource = {
  en: { translation: enUS },
  ja: { translation: jaJp },
  "zh-CN": { translation: zhCN }
};

// i18n config
console.log(`Browser Language:${navigator.language}`)
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: navigator.language, // use navigator language
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
