export default class TopNavbarController {
  /** @ngInject */
  constructor($translate, $auth, $state, $toast) {
    const languages = [
      { key: 'EN', name: 'English' },
      { key: 'TW', name: '繁體中文' },
      { key: 'CN', name: '简体中文' },
    ];

    const currentLanguage = $translate.use();

    Object.assign(this, {
      $translate, $auth, $state, $toast, languages, currentLanguage,
    });
  }

  changeLanguage(key) {
    this.$translate.use(key);
    this.currentLanguage = key;
  }

  signout() {
    this.$auth.logout();
    this.$state.go('auth.signin');
    this.$toast.show('Sign Out Success!');
  }
}