import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

const fallbackLng = ['pt'];
const availableLanguages = ['en', 'pt'];

const options = {
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'], //
  htmlTag: document.documentElement,
  checkWhitelist: true,
};

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng,
    debug: true,
    lng: 'pt',
    whitelist: availableLanguages,
    detection: options,

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: true,
    },
  });

export default i18n;
