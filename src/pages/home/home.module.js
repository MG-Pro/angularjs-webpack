import angular from 'angular'

class HomeIndexController {
  constructor () {
    this.title = 'HomeComponent'
  }
}

class HomeIndexComponent {
  constructor () {
    this.template = require('./home.view.html')
    this.controller = HomeIndexController
  }
}

const HOME_MODULE = angular
  .module('home.module', [])
  .component('homeComponent', new HomeIndexComponent())

export {HOME_MODULE}
