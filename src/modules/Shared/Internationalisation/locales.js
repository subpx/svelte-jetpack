import translate from '../../../services/translate';

const namespace = 'internationalisation';

translate.addResourceBundle('en', namespace, {
  title: 'English Title',
  subTitle: 'English subtitle'
});

translate.addResourceBundle('fr', namespace, {
  title: 'French Title',
  subTitle: 'French subtitle'
});
