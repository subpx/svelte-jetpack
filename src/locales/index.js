import translate from '../services/translate';

translate.addResourceBundle('en', 'common', {
  test: 'Test'
});

translate.addResourceBundle('en', 'common', {
  test2: 'Test 2'
});

translate.addResourceBundle('fr', 'common', {
  test: 'Test wee wee'
});

translate.addResourceBundle('fr', 'common', {
  test2: 'Test 2 wee wee'
});

console.log('English translations');
console.log(translate.t('common:test'));
console.log(translate.t('common:test2'));

console.log('French translations');
translate.changeLanguage('fr');
console.log(translate.t('common:test'));
console.log(translate.t('common:test2'));

translate.changeLanguage('en');
