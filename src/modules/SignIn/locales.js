import translate from '../../services/translate';

const namespace = 'signin';

translate.addResourceBundle('en', namespace, {
  formTitle: 'Sign in form',
  formIntro: 'Any user/password combo works...'
});

translate.addResourceBundle('fr', namespace, {
  formTitle: 'Inscrivez-vous',
  formIntro: 'importe quel combo utilisateur / mot de passe fonctionne...'
});
