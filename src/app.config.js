const home = {
  name: 'home',
  url: '/',
  component: 'homeComponent',
  lazyLoad: ($transition$) => {
    const $ocLazyLoad = $transition$.injector().get('$ocLazyLoad')

    return import('./pages/home/home.module')
      .then(mod => $ocLazyLoad.load(mod.HOME_MODULE))
      .catch(err => {
        throw new Error('Ooops, something went wrong, ' + err)
      })
  },
}

routing.$inject = ['$urlRouterProvider', '$locationProvider', '$stateProvider']

export default function routing ($urlRouterProvider, $locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true)
  $stateProvider.state(home)
  $urlRouterProvider.otherwise('/')
}

