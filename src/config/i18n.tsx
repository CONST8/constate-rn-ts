import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import I18n from 'react-native-i18n';

const deviceLocale = I18n.currentLocale();
i18n.use(initReactI18next).init({
  lng:
    deviceLocale.indexOf('pt') !== -1
      ? 'ptBr'
      : deviceLocale.indexOf('es') !== -1
      ? 'es'
      : 'en',
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: {
    ptBr: {
      translations: require('../lang/pt-br.json'),
    },
    en: {
      translations: require('../lang/en-us.json'),
    },
    es: {
      translations: require('../lang/es-es.json'),
    },
  },
});

export default i18n;
