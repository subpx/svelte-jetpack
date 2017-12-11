import i18next from 'i18next';

const translate = i18next.createInstance({
  whitelist: ['en', 'fr'],
  fallbackLng: 'en',
  debug: true,
}, () => {
  console.log('we ready to translate');
});

export default translate;
