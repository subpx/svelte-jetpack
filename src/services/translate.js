import i18next from 'i18next';

const translate = i18next.createInstance({
  fallbackLng: 'en',
  defaultNS: 'common'
}, () => {

});

export default translate;
